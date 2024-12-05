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
    `
}
