import BiasAnalysisDashboard from '@/components/BiasAnalysisDashboard'
import Graph from '@/components/Graph'
import { GRAPH_TYPES } from '@/components/Graph/utils'
import RootLayout from '@/components/layout'
import Stats from '@/components/Stats'
import React, { useEffect } from 'react'


const DUMMY_DATA = {
    "executive_summary": "The analysis of telemedicine interaction data has identified several significant biases, particularly in Access Disparities, Internet Connectivity, and Language Barriers. These biases greatly impact user experience and access to healthcare, especially among marginalized groups, and can exacerbate existing inequalities in the healthcare system.",
    "detailed_bias_analysis": [
        {
            "bias_factor": "Access Disparities",
            "sub_factors": [
                {
                    "sub_factor": "Geographical Location",
                    "score": 0.65,
                    "evidence": "Rural patients have reported decreased access to telemedicine services compared to urban counterparts.",
                    "impact_assessment": "These disparities can lead to delayed care and worsening health outcomes for rural populations.",
                    "recommendations": "Implement targeted outreach and mobile health units in rural areas to enhance access."
                },
                {
                    "sub_factor": "Socioeconomic Status",
                    "score": 0.7,
                    "evidence": "Users from lower-income backgrounds report challenges in affording necessary technology.",
                    "impact_assessment": "This creates a barrier to accessing telemedicine services, perpetuating health inequalities.",
                    "recommendations": "Offer subsidized technology access programs to lower-income patients."
                }
            ]
        },
        {
            "bias_factor": "Internet Connectivity",
            "sub_factors": [
                {
                    "sub_factor": null,
                    "score": 0.75,
                    "evidence": "Frequent reports of connection issues in lower economic regions affecting service usability.",
                    "impact_assessment": "Poor connectivity disrupts consultations, leading to missed appointments and incomplete care.",
                    "recommendations": "Enhance network infrastructure in underserved areas and offer technical support for users."
                }
            ]
        },
        {
            "bias_factor": "Language Barriers",
            "sub_factors": [
                {
                    "sub_factor": "Multilingual Support",
                    "score": 0.68,
                    "evidence": "Patients indicate difficulties in understanding medical advice due to limited language options.",
                    "impact_assessment": "Misunderstandings can lead to poor treatment adherence and negative health outcomes.",
                    "recommendations": "Incorporate more languages and dialects into telemedicine platforms."
                },
                {
                    "sub_factor": "Accent and Dialect Recognition",
                    "score": 0.6,
                    "evidence": "Users report issues with voice recognition software in contexts with diverse accents.",
                    "impact_assessment": "This can result in inaccurate data entry and miscommunication between patients and providers.",
                    "recommendations": "Improve the software's recognition capabilities across different accents."
                }
            ]
        },
        {
            "bias_factor": "Cultural Understanding",
            "sub_factors": [
                {
                    "sub_factor": null,
                    "score": 0.55,
                    "evidence": "Providers often lack training on cultural nuances that affect patient interactions.",
                    "impact_assessment": "Misunderstandings stemming from cultural insensitivity can lead to patient frustration and disengagement.",
                    "recommendations": "Provide cultural competence training for healthcare providers."
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
            "bias_factor": "Internet Connectivity",
            "score": 0.75
        },
        {
            "bias_factor": "Language Barriers",
            "score": 0.68
        },
        {
            "bias_factor": "Cultural Understanding",
            "score": 0.55
        }
    ],
    "additional_insights": [
        {
            "insight": "A strong correlation exists between Socioeconomic Status and Internet Connectivity, as lower-income populations face greater connectivity issues."
        },
        {
            "insight": "In the context of India, language barriers are prominent due to the multitude of regional languages, whereas in the UK, accent recognition poses unique challenges."
        }
    ],
    "data_for_graphs": [
        {
            "bias_factor": "Access Disparities",
            "sub_factor": "Geographical Location",
            "score": 0.65
        },
        {
            "bias_factor": "Access Disparities",
            "sub_factor": "Socioeconomic Status",
            "score": 0.7
        },
        {
            "bias_factor": "Internet Connectivity",
            "sub_factor": null,
            "score": 0.75
        },
        {
            "bias_factor": "Language Barriers",
            "sub_factor": "Multilingual Support",
            "score": 0.68
        },
        {
            "bias_factor": "Language Barriers",
            "sub_factor": "Accent and Dialect Recognition",
            "score": 0.6
        },
        {
            "bias_factor": "Cultural Understanding",
            "sub_factor": null,
            "score": 0.55
        }
    ],
    "appendix": {
        "data_sources": [
            "Patient interaction logs",
            "User feedback surveys",
            "Telemedicine service usage statistics"
        ],
        "methodology": "Analysis based on data collection from user feedback and statistical evaluations of service efficiency."
    }
}


const Analysis = () => {
    const [data, setData] = React.useState(null)

    useEffect(() => {
        const item = localStorage.getItem('analysis');
        if (item) {
            setData(JSON.parse(item));
        }
    }, [])

    if (!data) {
        return null;
    }
    return (
        <RootLayout>
            <div className='text-lg font-semibold'>Analysis summary</div>
            <div className='-translate-x-[10px]'>
                <Stats data={DUMMY_DATA?.bias_highlights?.map(item => ({ label: item.bias_factor, value: item.score }))} />
            </div>
            <div className='mt-4 text-base opacity-80'>
                The analysis highlights significant biases in Access Disparities and Technological Literacy. Elderly patients and those from low socioeconomic statuses, especially in rural areas with poor internet connectivity, face challenges accessing telemedicine effectively
            </div>
            <main className="mt-5">
                <Graph type={GRAPH_TYPES.BAR_CHART} labels={DUMMY_DATA.data_for_graphs?.map(item => item.bias_factor)} datasets={[{
                    label: 'Bias Scores',
                    data: DUMMY_DATA.data_for_graphs?.map(item => item.score * 100),
                    backgroundColor: '#429FAD',
                    borderColor: 'blue',
                }]} />
                <BiasAnalysisDashboard detailedBiasAnalysis={(data as any)?.detailed_bias_analysis} />
            </main>

        </RootLayout>
    )
}

export default Analysis