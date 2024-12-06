import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BiasAnalysis({ data }: { data: any[] }) {
    return (
        <div className="space-y-4">
            {data.map((biasFactor, index) => (
                <Card key={index}>
                    <CardHeader>
                        <CardTitle>{biasFactor.bias_factor}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {biasFactor.sub_factors.map((subFactor: any, subIndex: number) => (
                            <div key={subIndex} className="mb-4">
                                <h4 className="font-semibold">{subFactor.sub_factor || 'General'}</h4>
                                <p><strong>Score:</strong> {subFactor.score.toFixed(2)}</p>
                                <p><strong>Evidence:</strong> {subFactor.evidence}</p>
                                <p><strong>Impact:</strong> {subFactor.impact_assessment}</p>
                                <p><strong>Recommendations:</strong> {subFactor.recommendations}</p>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

