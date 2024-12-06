// Import axios (for Node.js environment)
import axios from 'axios';

interface GPTMessage {
    role: 'system' | 'user';
    content: string;
}

interface GPTResponse {
    message: string;
}

// Define the function to call GPT
export async function callGPT(query: string, prompt: string): Promise<GPTResponse> {
    const apiKey = process.env.OPENAI_API_KEY;
    const apiUrl = 'https://api.openai.com/v1/chat/completions';

    try {
        const response = await axios.post(apiUrl, {
            model: 'gpt-4o-mini',
            messages: [
                { role: 'system', content: prompt },
                { role: 'user', content: query }
            ] as GPTMessage[],
            temperature: 1,
            max_tokens: 2048,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            response_format: { type: "json_object" }
        }, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            }
        });

        const jsonResponse = response.data.choices[0].message.content;
        console.log('GPT Response:', jsonResponse);
        return JSON.parse(jsonResponse) as GPTResponse || { message: 'No response from LLM' };

    } catch (error: unknown) {
        if (error instanceof Error) {
            const axiosError = error as any;
            console.error('Error calling GPT:', axiosError.response?.data || axiosError.message);
        }
        throw error;
    }
}

// // Example usage
// callGPT('What is the weather in Tokyo?', prompts.ANALYSIS_PROMPT)
//     .then((response: GPTResponse) => console.log('Received:', JSON.stringify(response, null, 2)))
//     .catch((error: Error) => console.error('Error:', error));
