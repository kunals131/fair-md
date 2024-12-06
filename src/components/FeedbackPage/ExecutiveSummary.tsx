import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ExecutiveSummary({ data }: { data: any }) {
    return (
        <div className="space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle>Executive Summary</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>{data.executive_summary}</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Bias Highlights</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc pl-5">
                        {data.bias_highlights.map((highlight: any, index: number) => (
                            <li key={index}>
                                {highlight.bias_factor}: {highlight.score.toFixed(2)}
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
    )
}

