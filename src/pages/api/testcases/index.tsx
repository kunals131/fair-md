import type { NextApiRequest, NextApiResponse } from "next";
import { callGPT } from "@/lib/llm_call";
import { prompts } from "@/constants/prompts";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { userQuery, intent = "analysis" } = req.body;

    if (!userQuery) {
      return res.status(400).json({ message: 'User query is required' });
    }
    let response = { message: 'No response from LLM' };
    if (intent === "analysis") {
      response = await callGPT(userQuery, prompts.ANALYSIS_PROMPT);
    }
    if (intent === "testcases") {
      response = await callGPT(userQuery, prompts.TESTCASES_PROMPT);
    }

    return res.status(200).json(response);
  } catch (error) {
    console.error('Error in analysis API:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}