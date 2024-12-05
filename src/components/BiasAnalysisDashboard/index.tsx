import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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
    detailed_bias_analysis: BiasFactor[]
}

export default function BiasAnalysisDashboard({ detailed_bias_analysis }: BiasAnalysisProps) {
    return (
        <div className="container mx-auto ">
            <div className="grid gap-6 md:grid-cols-2">
                {detailed_bias_analysis.map((factor, index) => (
                    <Card key={index} className="w-full bg-black/50 p-0 border-none">
                        <CardHeader>
                            <CardTitle className="text-white text-lg  font-semibold">{factor.bias_factor}</CardTitle>
                            <CardDescription>
                                Average Score: {(factor.sub_factors.reduce((acc, sf) => acc + sf.score, 0) / factor.sub_factors.length).toFixed(2)}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Accordion type="single" collapsible className="w-full">
                                {factor.sub_factors.map((subFactor, subIndex) => (
                                    <AccordionItem className="text-white" key={subIndex} value={`item-${index}-${subIndex}`}>
                                        <AccordionTrigger>
                                            {subFactor.sub_factor || factor.bias_factor}
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="space-y-2">
                                                <div>
                                                    <span className="font-semibold">Score:</span>
                                                    <Progress value={subFactor.score * 100} className="mt-2" />
                                                </div>
                                                <div>
                                                    <span className="font-semibold">Evidence:</span> {subFactor.evidence}
                                                </div>
                                                <div>
                                                    <span className="font-semibold">Impact Assessment:</span> {subFactor.impact_assessment}
                                                </div>
                                                <div>
                                                    <span className="font-semibold">Recommendations:</span> {subFactor.recommendations}
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

