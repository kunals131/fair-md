import FeedbackPage from '@/components/FeedbackPage';
import RootLayout from '@/components/layout'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Feedback = () => {
    const [feedback, setFeedback] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchFeedbackData = () => {
        setIsLoading(true);
        axios.get("/api/feedback")
            .then((response) => {
                setFeedback(response?.data ?? "");
                localStorage.setItem('feedback', JSON.stringify(response.data));
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching feedback data:", error);
                setIsLoading(false);
            }).finally(() => {
                setIsLoading(false);
            });
    }

    useEffect(() => {
        fetchFeedbackData();
    }, [])

    return (
        <RootLayout>
            <FeedbackPage data={{
                "analyses": [
                    {
                        "_id": "675281bfcac01c99028f5ac2",
                        "query": "408c",
                        "label": "Analysis-06.12.2024-408c",
                        "response": {
                            "executive_summary": "The analysis of user profiles indicates significant biases related to access disparities, particularly in geographical location, socioeconomic status, and potential issues regarding representation and inclusion in the data. These biases could hinder equitable access to telemedicine services, particularly affecting the underprivileged and regions with limited infrastructure.",
                            "detailed_bias_analysis": [
                                {
                                    "bias_factor": "Access Disparities",
                                    "sub_factors": [
                                        {
                                            "sub_factor": "Geographical Location",
                                            "score": 0.7,
                                            "evidence": "User profiles show a concentration of active users in urban areas, indicating limited representation from rural locations.",
                                            "impact_assessment": "Patients in rural areas may experience delays in service access, exacerbating healthcare inequalities.",
                                            "recommendations": "Enhance telemedicine infrastructure in remote locations and partner with local health providers."
                                        },
                                        {
                                            "sub_factor": "Socioeconomic Status",
                                            "score": 0.6,
                                            "evidence": "Users with high salaries are overrepresented, while those from lower-income backgrounds are underrepresented.",
                                            "impact_assessment": "This bias reflects a lack of affordable telemedicine solutions for lower-income individuals.",
                                            "recommendations": "Develop subsidized programs and financial assistance models for low-income users."
                                        }
                                    ]
                                },
                                {
                                    "bias_factor": "Language Barriers",
                                    "sub_factors": [
                                        {
                                            "sub_factor": "Multilingual Support",
                                            "score": 0.65,
                                            "evidence": "Profiles indicate a shortage of users fluent in major Indian languages.",
                                            "impact_assessment": "Patients not fluent in English may struggle to communicate effectively with healthcare providers.",
                                            "recommendations": "Implement multilingual support features in telemedicine platforms."
                                        },
                                        {
                                            "sub_factor": "Accent and Dialect Recognition",
                                            "score": 0.55,
                                            "evidence": "Issues reported with automatic speech recognition software failing to recognize regional accents.",
                                            "impact_assessment": "This can lead to miscommunication and inadequate care due to data misentry.",
                                            "recommendations": "Improve recognition software to accommodate diverse regional accents."
                                        }
                                    ]
                                },
                                {
                                    "bias_factor": "Representation in Data",
                                    "sub_factors": [
                                        {
                                            "sub_factor": "Underrepresentation of Gender and Ethnic Minorities",
                                            "score": 0.75,
                                            "evidence": "A significant number of profiles lack representation from women and ethnic minorities.",
                                            "impact_assessment": "Healthcare solutions may not be tailored to diverse demographics, leading to inequities in care.",
                                            "recommendations": "Engage in outreach programs to encourage diverse participation in telemedicine platforms."
                                        },
                                        {
                                            "sub_factor": "Age Bias",
                                            "score": 0.55,
                                            "evidence": "Low representation of users above the age of 60.",
                                            "impact_assessment": "Elderly patients may not be receiving adequate telehealth services tailored to their needs.",
                                            "recommendations": "Design user-friendly interfaces and programs that cater specifically to older adults."
                                        }
                                    ]
                                }
                            ],
                            "bias_highlights": [
                                {
                                    "bias_factor": "Access Disparities",
                                    "score": 0.7
                                },
                                {
                                    "bias_factor": "Representation in Data",
                                    "score": 0.75
                                },
                                {
                                    "bias_factor": "Language Barriers",
                                    "score": 0.65
                                }
                            ],
                            "additional_insights": [
                                {
                                    "insight": "A strong correlation exists between socioeconomic status and access to telemedicine services, impacting how effectively healthcare can be delivered."
                                },
                                {
                                    "insight": "The lack of representation among diverse demographics in telemedicine platforms may hinder the effectiveness of healthcare delivery."
                                }
                            ],
                            "data_for_graphs": [
                                {
                                    "bias_factor": "Access Disparities",
                                    "sub_factor": "Geographical Location",
                                    "score": 0.7
                                },
                                {
                                    "bias_factor": "Access Disparities",
                                    "sub_factor": "Socioeconomic Status",
                                    "score": 0.6
                                },
                                {
                                    "bias_factor": "Language Barriers",
                                    "sub_factor": "Multilingual Support",
                                    "score": 0.65
                                },
                                {
                                    "bias_factor": "Language Barriers",
                                    "sub_factor": "Accent and Dialect Recognition",
                                    "score": 0.55
                                },
                                {
                                    "bias_factor": "Representation in Data",
                                    "sub_factor": "Underrepresentation of Gender and Ethnic Minorities",
                                    "score": 0.75
                                },
                                {
                                    "bias_factor": "Representation in Data",
                                    "sub_factor": "Age Bias",
                                    "score": 0.55
                                }
                            ],
                            "appendix": {
                                "data_sources": [
                                    "User engagement logs",
                                    "Demographic analyses",
                                    "User feedback on telemedicine experiences"
                                ],
                                "methodology": "The analysis was conducted utilizing statistical methods to assess bias prevalence and impact assessment."
                            }
                        },
                        "createdAt": "2024-12-06T04:46:55.881Z",
                        "__v": 0
                    },
                    {
                        "_id": "67521ea22adb4182d93fd6ec",
                        "query": "419c043c98405208de927eac9ca5af77fafb8132008d8727c4c2984c7e795b1d",
                        "label": "Analysis-06.12.2024-419c043c98405208de927eac9ca5af77fafb8132008d8727c4c2984c7e795b1d",
                        "response": {
                            "executive_summary": "The analysis of telemedicine interaction for Patient P001 reveals significant biases related to Internet Connectivity, Access Disparities, and Age Bias. The patient faced multiple challenges during the consultation, which may adversely affect their comprehension and adherence to treatment.",
                            "detailed_bias_analysis": [
                                {
                                    "bias_factor": "Access Disparities",
                                    "sub_factors": [
                                        {
                                            "sub_factor": "Internet Connectivity",
                                            "score": 0.8,
                                            "evidence": "Patient struggled with video connection. Multiple attempts needed to establish stable call.",
                                            "impact_assessment": "Poor connectivity hindered effective communication and may lead to frustration and misunderstandings.",
                                            "recommendations": "Enhance telemedicine platform to function well in low-bandwidth conditions and provide alternative modes of communication for affected patients."
                                        },
                                        {
                                            "sub_factor": "Geographical Location",
                                            "score": 0.65,
                                            "evidence": "Rural residency contributed to limited internet access and connectivity issues.",
                                            "impact_assessment": "Patients in rural areas often face longer wait times and poorer service quality, affecting their healthcare outcomes.",
                                            "recommendations": "Establish partnerships with local telecom providers to improve infrastructure."
                                        }
                                    ]
                                },
                                {
                                    "bias_factor": "Age Bias",
                                    "sub_factors": [
                                        {
                                            "sub_factor": null,
                                            "score": 0.7,
                                            "evidence": "Older patients may have challenges with technology and understanding complex medical instructions.",
                                            "impact_assessment": "Elderly patients may be less likely to comprehend medication instructions accurately, leading to non-compliance.",
                                            "recommendations": "Implement training sessions for elderly patients on technology use and provide simplified instructions for medications."
                                        }
                                    ]
                                },
                                {
                                    "bias_factor": "Cultural Understanding",
                                    "sub_factors": [
                                        {
                                            "sub_factor": "Traditional Beliefs",
                                            "score": 0.6,
                                            "evidence": "Potential reliance on traditional medicine could impact treatment adherence.",
                                            "impact_assessment": "Patients adhering to traditional beliefs may overlook prescribed modern treatments, influencing health outcomes.",
                                            "recommendations": "Incorporate discussions around traditional treatments within consultations to enhance receptiveness to prescribed medications."
                                        }
                                    ]
                                }
                            ],
                            "bias_highlights": [
                                {
                                    "bias_factor": "Access Disparities",
                                    "score": 0.8
                                },
                                {
                                    "bias_factor": "Age Bias",
                                    "score": 0.7
                                },
                                {
                                    "bias_factor": "Cultural Understanding",
                                    "score": 0.6
                                }
                            ],
                            "additional_insights": [
                                {
                                    "insight": "The combination of low socioeconomic status and age significantly affects access and comprehension of telemedicine services."
                                },
                                {
                                    "insight": "Poor internet connectivity disproportionately impacts rural patients, limiting their healthcare access."
                                }
                            ],
                            "data_for_graphs": [
                                {
                                    "bias_factor": "Access Disparities",
                                    "sub_factor": "Internet Connectivity",
                                    "score": 0.8
                                },
                                {
                                    "bias_factor": "Access Disparities",
                                    "sub_factor": "Geographical Location",
                                    "score": 0.65
                                },
                                {
                                    "bias_factor": "Age Bias",
                                    "sub_factor": null,
                                    "score": 0.7
                                },
                                {
                                    "bias_factor": "Cultural Understanding",
                                    "sub_factor": "Traditional Beliefs",
                                    "score": 0.6
                                }
                            ],
                            "appendix": {
                                "data_sources": [
                                    "Patient interaction logs",
                                    "Consultation feedback surveys",
                                    "Telemedicine platform performance reports"
                                ],
                                "methodology": "Analysis conducted based on reported consultation challenges and scoring on potential biases."
                            }
                        },
                        "createdAt": "2024-12-05T21:44:02.689Z",
                        "__v": 0
                    },
                    {
                        "_id": "67521dde2adb4182d93fd6ea",
                        "query": "419c043c98405208de927eac9ca5af77fafb8132008d8727c4c2984c7e795b1d",
                        "label": "Analysis-2024-12-05T21:40:46.227Z-419c043c98405208de927eac9ca5af77fafb8132008d8727c4c2984c7e795b1d",
                        "response": {
                            "executive_summary": "The analysis reveals significant biases in Internet Connectivity and Access Disparities, particularly affecting elderly patients in rural areas with low socioeconomic status. These biases hinder effective communication and care delivery, leading to poor health outcomes.",
                            "detailed_bias_analysis": [
                                {
                                    "bias_factor": "Internet Connectivity",
                                    "sub_factors": [
                                        {
                                            "sub_factor": null,
                                            "score": 0.85,
                                            "evidence": "Patient reported multiple failed attempts to establish stable video calls due to poor connectivity.",
                                            "impact_assessment": "Poor connectivity results in interrupted consultations, leading to increased frustration and inadequate care.",
                                            "recommendations": "Provide offline consultation options and improve internet infrastructure in rural areas."
                                        }
                                    ]
                                },
                                {
                                    "bias_factor": "Access Disparities",
                                    "sub_factors": [
                                        {
                                            "sub_factor": "Geographical Location",
                                            "score": 0.7,
                                            "evidence": "The patient resides in a rural area where healthcare resources and technology access are limited.",
                                            "impact_assessment": "Delays in access to appropriate care services can exacerbate health issues.",
                                            "recommendations": "Enhance outreach programs and mobile health services in rural communities."
                                        },
                                        {
                                            "sub_factor": "Socioeconomic Status",
                                            "score": 0.65,
                                            "evidence": "Low socioeconomic status affects the patient's ability to invest in better internet services or care options.",
                                            "impact_assessment": "Financial constraints limit access to necessary healthcare technologies, impacting overall health outcomes.",
                                            "recommendations": "Consider subsidies or assistive programs for low-income patients to improve access."
                                        }
                                    ]
                                },
                                {
                                    "bias_factor": "Gender Bias",
                                    "sub_factors": [
                                        {
                                            "sub_factor": null,
                                            "score": 0.55,
                                            "evidence": "Elderly female patients may face biases in treatment recommendations compared to male peers.",
                                            "impact_assessment": "This may lead to undertreatment or misdiagnosis in female patients.",
                                            "recommendations": "Training healthcare providers to recognize and address implicit biases in treatment."
                                        }
                                    ]
                                },
                                {
                                    "bias_factor": "Technological Literacy",
                                    "sub_factors": [
                                        {
                                            "sub_factor": null,
                                            "score": 0.6,
                                            "evidence": "The patient experienced difficulty managing the video call platform, leading to miscommunication.",
                                            "impact_assessment": "Challenges in using telemedicine platforms can hinder effective healthcare delivery and patient engagement.",
                                            "recommendations": "Offer training sessions for elderly patients on using telehealth technologies."
                                        }
                                    ]
                                }
                            ],
                            "bias_highlights": [
                                {
                                    "bias_factor": "Internet Connectivity",
                                    "score": 0.85
                                },
                                {
                                    "bias_factor": "Access Disparities",
                                    "score": 0.7
                                },
                                {
                                    "bias_factor": "Technological Literacy",
                                    "score": 0.6
                                }
                            ],
                            "additional_insights": [
                                {
                                    "insight": "There is a notable interaction between Internet Connectivity and Socioeconomic Status, suggesting that lower-income patients in rural areas are disproportionately affected by poor connectivity."
                                },
                                {
                                    "insight": "Elderly patients' unique challenges with technological literacy can exacerbate existing disparities in access to healthcare."
                                }
                            ],
                            "data_for_graphs": [
                                {
                                    "bias_factor": "Internet Connectivity",
                                    "sub_factor": null,
                                    "score": 0.85
                                },
                                {
                                    "bias_factor": "Access Disparities",
                                    "sub_factor": "Geographical Location",
                                    "score": 0.7
                                },
                                {
                                    "bias_factor": "Access Disparities",
                                    "sub_factor": "Socioeconomic Status",
                                    "score": 0.65
                                },
                                {
                                    "bias_factor": "Gender Bias",
                                    "sub_factor": null,
                                    "score": 0.55
                                },
                                {
                                    "bias_factor": "Technological Literacy",
                                    "sub_factor": null,
                                    "score": 0.6
                                }
                            ],
                            "appendix": {
                                "data_sources": [
                                    "Patient interaction logs",
                                    "User feedback surveys",
                                    "Consultation performance reviews"
                                ],
                                "methodology": "Analysis based on patient data highlighting experiences during telemedicine consultations and evaluating biases."
                            }
                        },
                        "createdAt": "2024-12-05T21:40:46.227Z",
                        "__v": 0
                    }
                ],
                "metrics": {
                    "improvement_0": 422.8865333333333,
                    "improvement_1": 3.274366666666667
                },
                "feedback": {
                    "time_comparison_summary": "Overall, the bias levels show a worsening trend in certain areas, particularly in Internet Connectivity and Access Disparities, but consistency has been maintained in recognizing issues related to Access Disparities and Age Bias.",
                    "bias_factor_trends": [
                        {
                            "bias_factor": "Internet Connectivity",
                            "sub_factor": null,
                            "initial_score": 0.8,
                            "most_recent_score": 0.85,
                            "trend": "worsened",
                            "rate_of_change": 0.05
                        },
                        {
                            "bias_factor": "Access Disparities",
                            "sub_factor": "Geographical Location",
                            "initial_score": 0.65,
                            "most_recent_score": 0.7,
                            "trend": "worsened",
                            "rate_of_change": 0.05
                        },
                        {
                            "bias_factor": "Access Disparities",
                            "sub_factor": "Socioeconomic Status",
                            "initial_score": 0.6,
                            "most_recent_score": 0.65,
                            "trend": "worsened",
                            "rate_of_change": 0.05
                        },
                        {
                            "bias_factor": "Age Bias",
                            "sub_factor": null,
                            "initial_score": 0.55,
                            "most_recent_score": 0.7,
                            "trend": "worsened",
                            "rate_of_change": 0.15
                        },
                        {
                            "bias_factor": "Cultural Understanding",
                            "sub_factor": "Traditional Beliefs",
                            "initial_score": 0.6,
                            "most_recent_score": null,
                            "trend": "no_change",
                            "rate_of_change": null
                        },
                        {
                            "bias_factor": "Technological Literacy",
                            "sub_factor": null,
                            "initial_score": 0.6,
                            "most_recent_score": null,
                            "trend": "no_change",
                            "rate_of_change": null
                        }
                    ],
                    "mitigation_feedback": [
                        {
                            "strategy": "Enhance telemedicine platform to function in low-bandwidth conditions.",
                            "observed_outcome": "Despite efforts, connectivity biases have worsened.",
                            "further_recommendations": "Prioritize infrastructure improvements in regions with low connectivity and explore offline consultation options."
                        },
                        {
                            "strategy": "Establish partnerships with local telecom providers.",
                            "observed_outcome": "Limited effectiveness in addressing geographical access disparities.",
                            "further_recommendations": "Aggressively pursue local partnerships and government initiatives for rural broadband expansion."
                        },
                        {
                            "strategy": "Provide training sessions for elderly patients.",
                            "observed_outcome": "Age biases have persisted, indicating a need for continued effort.",
                            "further_recommendations": "Expand training resources to include family members as support aides and create easy-to-understand guides."
                        }
                    ],
                    "additional_insights": [
                        {
                            "insight": "The recurring issues in Internet Connectivity and Access Disparities, especially affecting rural elderly patients, highlight systemic inequalities that require urgent attention.",
                            "relevance": "This matters significantly because it showcases a need for tailored interventions rather than generalized solutions."
                        },
                        {
                            "insight": "Increasing scores in biases over the evaluation periods indicate an urgent need for policy adjustments and resource allocation to the most affected demographics.",
                            "relevance": "Consistent monitoring and actionable changes can improve the overall healthcare delivery for vulnerable populations."
                        }
                    ],
                    "data_for_graphs": [
                        {
                            "bias_factor": "Internet Connectivity",
                            "sub_factor": null,
                            "timestamps": [
                                {
                                    "timestamp": "2024-12-06T03:14:02+05:30",
                                    "score": 0.8
                                },
                                {
                                    "timestamp": "2024-12-06T03:10:46+05:30",
                                    "score": 0.85
                                }
                            ]
                        },
                        {
                            "bias_factor": "Access Disparities",
                            "sub_factor": "Geographical Location",
                            "timestamps": [
                                {
                                    "timestamp": "2024-12-06T03:14:02+05:30",
                                    "score": 0.65
                                },
                                {
                                    "timestamp": "2024-12-06T03:10:46+05:30",
                                    "score": 0.7
                                }
                            ]
                        },
                        {
                            "bias_factor": "Access Disparities",
                            "sub_factor": "Socioeconomic Status",
                            "timestamps": [
                                {
                                    "timestamp": "2024-12-06T03:14:02+05:30",
                                    "score": 0.6
                                },
                                {
                                    "timestamp": "2024-12-06T03:10:46+05:30",
                                    "score": 0.65
                                }
                            ]
                        },
                        {
                            "bias_factor": "Age Bias",
                            "sub_factor": null,
                            "timestamps": [
                                {
                                    "timestamp": "2024-12-06T03:14:02+05:30",
                                    "score": 0.55
                                },
                                {
                                    "timestamp": "2024-12-06T03:10:46+05:30",
                                    "score": 0.7
                                }
                            ]
                        }
                    ]
                }
            }} />
        </RootLayout>
    )
}

export default Feedback