import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MitigationStrategies({ data }: { data: any[] }) {
    return (
        <div className="space-y-4">
            {data.map((strategy, index) => (
                <Card key={index}>
                    <CardHeader>
                        <CardTitle>Strategy {index + 1}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p><strong>Strategy:</strong> {strategy.strategy}</p>
                        <p><strong>Observed Outcome:</strong> {strategy.observed_outcome}</p>
                        <p><strong>Further Recommendations:</strong> {strategy.further_recommendations}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

