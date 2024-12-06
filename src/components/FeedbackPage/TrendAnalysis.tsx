import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownIcon, ArrowRightIcon, ArrowUpIcon } from 'lucide-react'

export default function TrendAnalysis({ data }: { data: any[] }) {
    return (
        <div className="space-y-4">
            {data.map((trend, index) => (
                <Card key={index}>
                    <CardHeader>
                        <CardTitle>{trend.bias_factor}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p><strong>Sub-factor:</strong> {trend.sub_factor || 'N/A'}</p>
                        <p><strong>Initial Score:</strong> {trend.initial_score?.toFixed(2) || 'N/A'}</p>
                        <p><strong>Most Recent Score:</strong> {trend.most_recent_score?.toFixed(2) || 'N/A'}</p>
                        <p><strong>Trend:</strong> {trend.trend} {getTrendIcon(trend.trend)}</p>
                        <p><strong>Rate of Change:</strong> {trend.rate_of_change?.toFixed(2) || 'N/A'}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

function getTrendIcon(trend: string) {
    switch (trend) {
        case 'worsened':
            return <ArrowUpIcon className="inline text-red-500" />
        case 'improved':
            return <ArrowDownIcon className="inline text-green-500" />
        default:
            return <ArrowRightIcon className="inline text-gray-500" />
    }
}

