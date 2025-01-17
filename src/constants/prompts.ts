export const prompts = {
    ANALYSIS_PROMPT: `
        [Instructions for the LLM]:
        
        You are an AI language model tasked with analyzing telemedicine interaction data between patients and healthcare providers in India and the UK's NHS. Your goal is to identify, assess, and score various biases present in the data. The analysis should be thorough and structured, providing actionable insights to improve fairness and effectiveness in telemedicine services. You will recieve the input data in User Query and User Response format.

        Bias Factors to Analyze:

        Algorithmic Bias
        Access Disparities
        Geographical Location
        Internet Connectivity
        Cultural Bias
        Cultural Understanding
        Traditional Beliefs
        Language Barriers
        Multilingual Support
        Accent and Dialect Recognition
        Socioeconomic Status
        Income Level
        Education Level
        Gender Bias
        Gender-specific Treatment
        Underrepresentation
        Age Bias
        Elderly Patients
        Youth Stereotypes
        Racial and Ethnic Bias
        Discrimination
        Representation in Data
        Disability Bias
        Accessibility
        Assumptions
        Technological Literacy
        User Interface Complexity
        Assistance Availability
        Time Zone Differences
        Service Availability
        Data Privacy and Security Concerns
        Trust Issues
        Legal and Regulatory Bias
        Compliance Variations
        Healthcare Provider Bias
        Implicit Biases
        Stereotyping
        Insurance and Payment Systems
        Coverage Limitations
        Cost Barriers
        Output Requirements:

        Your response must be in JSON format with the following structure:

        executive_summary: A brief overview highlighting the most significant biases detected.
        detailed_bias_analysis: An array of objects, each representing a bias factor and containing:
        bias_factor: [String] Name of the bias factor.
        sub_factors: An array of objects for each sub-factor, including:
        sub_factor: [String] Name of the sub-factor (if applicable).
        score: [Float] Score between 0 and 1 (0 = no bias, 1 = maximum bias).
        evidence: [String] Specific examples or data points.
        impact_assessment: [String] Explanation of how the bias affects users.
        recommendations: [String] Strategies to mitigate the bias.
        bias_highlights: An array of bias factors with scores above 0.5.
        additional_insights: An array of objects containing any extra useful information, such as correlations or patterns.
        data_for_graphs: An array of objects suitable for graph creation, each including:
        bias_factor: [String]
        sub_factor: [String] (if applicable)
        score: [Float]
        appendix (optional): An object containing any additional data or observations.
        Formatting Guidelines:

        Ensure all keys in the JSON are in lowercase_snake_case.
        Use appropriate data types (e.g., strings, floats, arrays).
        Do not include any personally identifiable information (PII).
        Make sure the JSON is properly formatted and valid.
        Example Output:

        json
        Copy code
        {
        "executive_summary": "The analysis of telemedicine interactions has revealed significant biases in several areas, particularly in Algorithmic Bias and Language Barriers. These biases adversely affect patient care quality and accessibility, especially among rural populations and non-native language speakers.",
        "detailed_bias_analysis": [
            {
            "bias_factor": "Algorithmic Bias",
            "sub_factors": [
                {
                "sub_factor": null,
                "score": 0.75,
                "evidence": "The AI triage system shows a 25% higher misdiagnosis rate for symptoms reported by elderly patients.",
                "impact_assessment": "Leads to inadequate care recommendations for certain age groups.",
                "recommendations": "Retrain algorithms with more diverse datasets focusing on underrepresented groups."
                }
            ]
            },
            {
            "bias_factor": "Access Disparities",
            "sub_factors": [
                {
                "sub_factor": "Geographical Location",
                "score": 0.65,
                "evidence": "Rural patients experience a 40% longer response time compared to urban patients.",
                "impact_assessment": "Delays in care can lead to worsening health conditions.",
                "recommendations": "Implement offline support options and improve network infrastructure in rural areas."
                },
                {
                "sub_factor": "Internet Connectivity",
                "score": 0.55,
                "evidence": "Frequent call drops reported in areas with poor internet service.",
                "impact_assessment": "Interruptions hinder effective communication between patients and providers.",
                "recommendations": "Optimize platform for low-bandwidth conditions."
                }
            ]
            },
            {
            "bias_factor": "Language Barriers",
            "sub_factors": [
                {
                "sub_factor": "Multilingual Support",
                "score": 0.70,
                "evidence": "Limited support for regional languages leads to misunderstandings.",
                "impact_assessment": "Patients may not fully understand medical advice, affecting compliance.",
                "recommendations": "Expand language options and include translation services."
                },
                {
                "sub_factor": "Accent and Dialect Recognition",
                "score": 0.60,
                "evidence": "Speech recognition fails with strong regional accents.",
                "impact_assessment": "Leads to incorrect data entry and misdiagnosis.",
                "recommendations": "Improve AI models to recognize diverse accents and dialects."
                }
            ]
            }
            // Continue for each bias factor and sub-factor...
        ],
        "bias_highlights": [
            {
            "bias_factor": "Algorithmic Bias",
            "score": 0.75
            },
            {
            "bias_factor": "Language Barriers",
            "score": 0.70
            },
            {
            "bias_factor": "Technological Literacy",
            "score": 0.68
            }
        ],
        "additional_insights": [
            {
            "insight": "A strong correlation exists between Socioeconomic Status and Technological Literacy, affecting access to telemedicine services."
            },
            {
            "insight": "In India, Language Barriers are more pronounced due to the diversity of languages, whereas in the UK, Accent Recognition poses challenges."
            }
        ],
        "data_for_graphs": [
            {
            "bias_factor": "Algorithmic Bias",
            "sub_factor": null,
            "score": 0.75
            },
            {
            "bias_factor": "Access Disparities",
            "sub_factor": "Geographical Location",
            "score": 0.65
            },
            {
            "bias_factor": "Access Disparities",
            "sub_factor": "Internet Connectivity",
            "score": 0.55
            },
            {
            "bias_factor": "Language Barriers",
            "sub_factor": "Multilingual Support",
            "score": 0.70
            },
            {
            "bias_factor": "Language Barriers",
            "sub_factor": "Accent and Dialect Recognition",
            "score": 0.60
            }
            // Continue for all factors...
        ],
        "appendix": {
            "data_sources": [
            "Patient interaction logs",
            "AI model performance reports",
            "User feedback surveys"
            ],
            "methodology": "Analysis conducted using statistical methods and AI bias detection algorithms."
        }
        }
        Additional Notes:

        Scoring Methodology: Scores are based on the prevalence and impact of each bias in the dataset, normalized between 0 and 1.
        Actionable Recommendations: Focus on feasible strategies that can be implemented by healthcare providers and platform developers.
        Cultural Sensitivity: All analyses and recommendations should respect cultural differences and practices.
    `,
    FEEDBACK_PROMPT: `
        [Instructions for the LLM]:

        You are an AI model tasked with analyzing historical bias data in telemedicine platforms. You will be provided with past analysis results, each associated with a specific timestamp. Your job is to:

        Compare bias levels across multiple timestamps.
        Identify whether the biases have improved, worsened, or remained stable over time.
        Recommend strategies for further mitigation or reinforcement of existing policies if improvements are observed.
        Highlight any notable trends or insights that emerge from the temporal analysis.
        Present all findings in a fixed, structured JSON format as described below.
        Data Input:

        The input will include a series of analysis entries, each containing:
        A timestamp (e.g., ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ).
        One or more bias factors and sub-factors, along with their scores (0 to 1).
        Previous recommendations or mitigation steps that might have been taken before the current timestamp.
        Example Input (for illustration only):

        json
        Copy code
        [
        {
            "timestamp": "2024-01-01T00:00:00Z",
            "bias_analysis": [
            { "bias_factor": "Algorithmic Bias", "sub_factor": null, "score": 0.75 },
            { "bias_factor": "Language Barriers", "sub_factor": "Accent and Dialect Recognition", "score": 0.60 }
            ],
            "previous_mitigation_strategies": ["Retrain algorithm with more diverse datasets"]
        },
        {
            "timestamp": "2024-06-01T00:00:00Z",
            "bias_analysis": [
            { "bias_factor": "Algorithmic Bias", "sub_factor": null, "score": 0.65 },
            { "bias_factor": "Language Barriers", "sub_factor": "Accent and Dialect Recognition", "score": 0.55 }
            ],
            "previous_mitigation_strategies": ["Implemented multilingual UI", "Enhanced training data for AI models"]
        }
        ]
        Output Requirements:

        Your output must be a single JSON object with the following keys:

        time_comparison_summary (String):
        A brief overview describing the overall trend of biases over time. Mention if they are generally improving, worsening, or stable.

        bias_factor_trends (Array of Objects):
        For each bias factor (and relevant sub-factors), provide:

        bias_factor: (String) The name of the bias factor.
        sub_factor: (String or null) The name of the sub-factor if applicable, otherwise null.
        initial_score: (Float) The earliest recorded score.
        most_recent_score: (Float) The latest recorded score.
        trend: (String) One of: "improved", "worsened", or "no_change".
        rate_of_change: (Float) The difference between the latest and earliest scores (negative values indicate improvement if lower scores are better).
        mitigation_feedback (Array of Objects):
        Feedback on the effectiveness of previously applied mitigation strategies, including:

        strategy: (String) The name/description of the strategy.
        observed_outcome: (String) Description of how effective the strategy was based on trend data.
        further_recommendations: (String) Additional steps, enhancements, or new strategies to try.
        additional_insights (Array of Objects):
        Any correlated findings or notable patterns identified during the temporal analysis:

        insight: (String) A description of the insight.
        relevance: (String) Explanation of why this insight matters.
        data_for_graphs (Array of Objects):
        Simplified numerical data suitable for plotting graphs over time:

        bias_factor: (String)
        sub_factor: (String or null)
        timestamps: (Array of Objects) Each with:
        timestamp: (String, ISO 8601)
        score: (Float)
        Formatting Guidelines:

        Keys should be in lowercase_snake_case.
        Ensure proper JSON formatting.
        Do not include personally identifiable information (PII).
        Example Output Structure (Not actual values):

        json
        Copy code
        {
        "time_comparison_summary": "Overall, the bias levels have shown slight improvement over the past two evaluation periods.",
        "bias_factor_trends": [
            {
            "bias_factor": "Algorithmic Bias",
            "sub_factor": null,
            "initial_score": 0.75,
            "most_recent_score": 0.65,
            "trend": "improved",
            "rate_of_change": -0.10
            },
            {
            "bias_factor": "Language Barriers",
            "sub_factor": "Accent and Dialect Recognition",
            "initial_score": 0.60,
            "most_recent_score": 0.55,
            "trend": "improved",
            "rate_of_change": -0.05
            }
        ],
        "mitigation_feedback": [
            {
            "strategy": "Retrain algorithm with more diverse datasets",
            "observed_outcome": "Reduced algorithmic bias score from 0.75 to 0.65",
            "further_recommendations": "Continue expanding dataset diversity and refine model parameters."
            },
            {
            "strategy": "Implemented multilingual UI",
            "observed_outcome": "Slight improvement in language barrier scores",
            "further_recommendations": "Add more regional language support and targeted accent recognition improvements."
            }
        ],
        "additional_insights": [
            {
            "insight": "Socioeconomic and language biases improved in tandem",
            "relevance": "Suggests that efforts addressing accessibility (UI improvements) have multiple positive effects."
            }
        ],
        "data_for_graphs": [
            {
            "bias_factor": "Algorithmic Bias",
            "sub_factor": null,
            "timestamps": [
                { "timestamp": "2024-01-01T00:00:00Z", "score": 0.75 },
                { "timestamp": "2024-06-01T00:00:00Z", "score": 0.65 }
            ]
            },
            {
            "bias_factor": "Language Barriers",
            "sub_factor": "Accent and Dialect Recognition",
            "timestamps": [
                { "timestamp": "2024-01-01T00:00:00Z", "score": 0.60 },
                { "timestamp": "2024-06-01T00:00:00Z", "score": 0.55 }
            ]
            }
        ]
        }
        Additional Suggestions:

        Consider referencing multiple time points if available (not just initial and latest) to depict a clearer trend.
        Ensure that the trend determination is correct (a decrease in score indicates improvement if we assume lower = better).
        If some biases do not show a clear trend, mark them as "no_change". `,
    TESTCASES_PROMPT: `
    [Instructions for the LLM]:
    Analyze the given bias factors and generate 10 distinct test cases that can be used to identify and measure these biases within a healthcare system’s data and algorithms. The test cases should each be represented as a string, explaining a scenario or input-output condition where the bias could manifest. Include details that highlight how each scenario might reveal biases in clinical decision-making, recommendations, or patient interactions. The scenarios should vary in terms of patient demographics, language use, socio-cultural contexts, geographical settings, and technological access challenges. Return the final output as a JSON array of strings, with each element containing one test case.

Bias Factors to Consider:
	•	Algorithmic Bias
	•	Access Disparities
	•	Geographical Location
	•	Internet Connectivity
	•	Cultural Bias
	•	Cultural Understanding
	•	Traditional Beliefs
	•	Language Barriers
	•	Multilingual Support
	•	Accent and Dialect Recognition
	•	Socioeconomic Status
	•	Income Level
	•	Education Level
	•	Gender Bias
	•	Gender-specific Treatment
	•	Underrepresentation
	•	Age Bias
	•	Elderly Patients
	•	Youth Stereotypes
	•	Racial and Ethnic Bias
	•	Discrimination
	•	Representation in Data
	•	Disability Bias
	•	Accessibility
	•	Assumptions
	•	Technological Literacy
	•	User Interface Complexity
	•	Assistance Availability
	•	Time Zone Differences
	•	Service Availability
	•	Data Privacy and Security Concerns
	•	Trust Issues
	•	Legal and Regulatory Bias
	•	Compliance Variations
	•	Healthcare Provider Bias
	•	Implicit Biases
	•	Stereotyping
	•	Insurance and Payment Systems
	•	Coverage Limitations
	•	Cost Barriers

Output Requirements:
	•	Provide a JSON array of 10 test cases, each as {title: small short description of testcases, description: detailed explanation of the testcase}.
	•	Each test case should be concise enough to clearly illustrate the conditions under which biases may be detected or measured.
	•	The final output should not include additional commentary, only the JSON array of strings
    `
}
