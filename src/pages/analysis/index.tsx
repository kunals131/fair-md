import BiasAnalysisDashboard from '@/components/BiasAnalysisDashboard'
import RootLayout from '@/components/layout'
import React from 'react'

const biasAnalysisData = [
    {
        "bias_factor": "Access Disparities",
        "sub_factors": [
            {
                "sub_factor": "Geographical Location",
                "score": 0.70,
                "evidence": "Patient from rural area faced multiple connection issues during the consultation.",
                "impact_assessment": "Poor connectivity leads to incomplete consultations and potential miscommunication, adversely affecting health outcomes.",
                "recommendations": "Deploy local telemedicine kiosks with reliable internet or provide subsidized connectivity solutions in rural areas."
            },
            {
                "sub_factor": "Internet Connectivity",
                "score": 0.75,
                "evidence": "Patient reported poor internet connectivity quality affecting consultation clarity.",
                "impact_assessment": "Interruptions can cause significant information loss leading to incorrect treatment adherence.",
                "recommendations": "Optimize telemedicine platform for low-bandwidth conditions and introduce offline features."
            }
        ]
    },
    {
        "bias_factor": "Technological Literacy",
        "sub_factors": [
            {
                "sub_factor": null,
                "score": 0.60,
                "evidence": "Patient struggled with setting up a stable video connection, requiring multiple attempts.",
                "impact_assessment": "Limited technological skills can lead to frustration and decreased utilization of telemedicine services.",
                "recommendations": "Implement user-friendly interfaces and provide training sessions or technical assistance for elderly patients."
            }
        ]
    },
    {
        "bias_factor": "Socioeconomic Status",
        "sub_factors": [
            {
                "sub_factor": null,
                "score": 0.65,
                "evidence": "Low-income status correlates with the patient's poor internet quality and lack of equipment.",
                "impact_assessment": "Cost barriers affect the ability to access necessary technology for effective telemedicine use.",
                "recommendations": "Offer financial assistance programs for equipment and internet costs to low-income patients."
            }
        ]
    },
    {
        "bias_factor": "Age Bias",
        "sub_factors": [
            {
                "sub_factor": "Elderly Patients",
                "score": 0.55,
                "evidence": "Elderly patient had difficulties in understanding the consultation due to technological constraints.",
                "impact_assessment": "Older patients might face compounded challenges with technology, affecting their health management.",
                "recommendations": "Enhance educational outreach tailored for elderly patients on telemedicine usage and offer consistent support."
            }
        ]
    }
]



const Analysis = () => {
    return (
        <RootLayout>
            <div className='text-lg font-semibold'>Analysis summary</div>
            <div className='mt-2.5 text-base opacity-80'>
                The analysis highlights significant biases in Access Disparities and Technological Literacy. Elderly patients and those from low socioeconomic statuses, especially in rural areas with poor internet connectivity, face challenges accessing telemedicine effectively
            </div>
            <main className="mt-5">
                <BiasAnalysisDashboard detailed_bias_analysis={biasAnalysisData} />
            </main>

        </RootLayout>
    )
}

export default Analysis