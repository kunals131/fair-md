import type { NextApiRequest, NextApiResponse } from "next";
import { callGPT } from "@/lib/llm_call";
import { prompts } from "@/constants/prompts";
import dbConnect from "@/lib/dbConnect";
import Analysis from "@/model/analysis";
import crypto from 'crypto';

type Data = {
  message: string;
  data?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    try {
      await dbConnect();
      const analyses = await Analysis.find({}).sort({ createdAt: -1 });
      return res.status(200).json({ message: 'Success', data: analyses });
    } catch (error) {
      console.error('Error fetching analyses:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    let { userQuery } = req.body;

    if (!userQuery) {
      return res.status(400).json({ message: 'User query is required' });
    }
    // let response = { message: 'No response from LLM' };
    // if (intent === "analysis") {
    //   response = await callGPT(userQuery, prompts.ANALYSIS_PROMPT);
    // }
    // if (intent === "testcases") {
    //   response = await callGPT(userQuery, prompts.TESTCASES_PROMPT);
    // }

    const response = await callGPT(userQuery, prompts.ANALYSIS_PROMPT);
    await dbConnect();
    // Generate a hash for the user query
    const queryHash = crypto.createHash('sha256').update(userQuery).digest('hex').substring(0, 4);
    const analysis = new Analysis({
      query: queryHash,
      label: `Analysis-${new Date().toLocaleDateString('en-GB').split('/').join('.')}-${queryHash}`,
      response: response
    });
    await analysis.save();

    return res.status(200).json(response);
  } catch (error) {
    console.error('Error in analysis API:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
