import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import Analysis from "@/model/analysis";
import { callGPT } from "@/lib/llm_call";
import { prompts } from "@/constants/prompts";

type Data = {
  message: string;
  data?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await dbConnect();

    // Get all analyses sorted by timestamp
    const analyses = await Analysis.find({})
      .sort({ createdAt: -1 })
      .lean();

    if (!analyses.length) {
      return res.status(200).json({
        message: 'No analyses found',
        data: []
      });
    }

    // Calculate improvement metrics
    const metrics = new Map();
    analyses.forEach((analysis: any, index: any) => {
      if (index < analyses.length - 1) {
        const timeDiff = analysis.createdAt.getTime() - analyses[index + 1].createdAt.getTime();
        metrics.set(`improvement_${index}`, timeDiff / (1000 * 60)); // Time difference in minutes
      }
    });

    // Generate improvement suggestions using LLM
    const analysisPrompt = `Based on the following analysis history:
      ${analyses.map((a: any) => `Query: ${a.query}\nResponse: ${JSON.stringify(a.response)}\nTimestamp: ${a.createdAt}\n`).join('\n')}
      
      Please provide:
      1. An evaluation of the improvement in analysis quality over time
      2. Specific suggestions for further improvement
      3. Areas where consistency has been maintained
      4. Potential areas of concern`;

    const llmFeedback = await callGPT(analysisPrompt, prompts.FEEDBACK_PROMPT);

    return res.status(200).json({
      message: 'Success',
      data: {
        analyses: analyses,
        metrics: Object.fromEntries(metrics),
        feedback: llmFeedback,
      }
    });

  } catch (error) {
    console.error('Error in feedback analysis:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
