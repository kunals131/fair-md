import React from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface SubFactor {
    sub_factor: string | null
    score: number
    evidence: string
    impact_assessment: string
    recommendations: string
}

interface BiasFactor {
    bias_factor: string
    sub_factors: SubFactor[]
}

interface BiasAnalysisProps {
    detailedBiasAnalysis: BiasFactor[]
}

const BiasAnalysisUI: React.FC<BiasAnalysisProps> = ({ detailedBiasAnalysis }) => {
    const [expandedFactors, setExpandedFactors] = React.useState<Record<string, boolean>>({})

    const toggleFactor = (factor: string) => {
        setExpandedFactors(prev => ({ ...prev, [factor]: !prev[factor] }))
    }

    const getScoreColor = (score: number) => {
        if (score >= 0.7) return 'bg-red-500'
        if (score >= 0.5) return 'bg-yellow-500'
        return 'bg-green-500'
    }

    return (
        <div className="container mx-auto mt-12 p-4 space-y-4">
            <h1 className="text-xl font-semubold mb-4">Bias Breakdown</h1>
            {detailedBiasAnalysis.map((factor, index) => (
                <div key={index} className="w-full bg-black/10 cursor-pointer hover:scale-[1.01] duration-300 transition-all p-0 rounded-lg border border-white/5">
                    <div onClick={() => toggleFactor(factor?.bias_factor)} className="flex items-center justify-between py-4 px-4  font-medium border-gray-700">
                        <div>{factor.bias_factor}</div>
                        <div className='bg-black/20 rounded-lg w-[32px] h-[32px] flex items-center justify-center'>
                            {
                                expandedFactors[factor.bias_factor] ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                            }
                        </div>
                    </div>
                    {expandedFactors[factor.bias_factor] && <CardContent className='text-white flex flex-col gap-4'>
                        {expandedFactors[factor.bias_factor] && factor.sub_factors.map((subFactor, subIndex) => (
                            <div key={subIndex} className="mt-4 space-y-4">
                                <h3 className="font-medium">{subFactor.sub_factor || factor.bias_factor}</h3>
                                <div className="flex items-center space-x-2 mt-4">
                                    <Progress value={subFactor.score * 100} className={`w-full ${getScoreColor(subFactor.score)}`} />
                                    <span className="text-sm font-medium">{(subFactor.score * 100).toFixed(0)}%</span>
                                </div>
                                <p className="text-sm"><strong>Evidence:</strong> {subFactor.evidence}</p>
                                <p className="text-sm"><strong>Impact:</strong> {subFactor.impact_assessment}</p>
                                <p className="text-sm"><strong>Recommendations:</strong> {subFactor.recommendations}</p>
                            </div>
                        ))}
                    </CardContent>}
                </div>
            ))}
        </div>
    )
}

export default BiasAnalysisUI

// Example usage
const detailedBiasAnalysis = [
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

export function BiasAnalysisExample() {
    return <BiasAnalysisUI detailedBiasAnalysis={detailedBiasAnalysis} />
}

