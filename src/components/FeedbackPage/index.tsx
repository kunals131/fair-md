import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "../ui/scroll-area"
import TrendAnalysis from "./TrendAnalysis"
import BiasAnalysis from "./BiasAnalysis"
import ExecutiveSummary from "./ExecutiveSummary"
import MitigationStrategies from "./MitigationStrategy"

interface BiasAnalysisDashboardProps {
    data: any // Replace 'any' with a more specific type if available
}

export default function FeedbackPage({ data }: BiasAnalysisDashboardProps) {
    const latestAnalysis = data.analyses[0] // Assuming the latest analysis is first in the array

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Analysis Report</h1>
            <Tabs defaultValue="summary" className="space-y-4 ">
                <TabsList className="bg-black/30">
                    <TabsTrigger value="summary">Summary</TabsTrigger>
                    <TabsTrigger value="analysis">Detailed Analysis</TabsTrigger>
                    <TabsTrigger value="trends">Trends</TabsTrigger>
                    <TabsTrigger value="mitigation">Mitigation</TabsTrigger>
                </TabsList>
                <TabsContent value="summary">
                    <Card>
                        <CardHeader>
                            <CardTitle>Executive Summary</CardTitle>
                            <CardDescription>Latest analysis overview</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ScrollArea className="h-[400px]">
                                <ExecutiveSummary data={latestAnalysis.response} />
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="analysis">
                    <Card>
                        <CardHeader>
                            <CardTitle>Detailed Bias Analysis</CardTitle>
                            <CardDescription>In-depth look at bias factors</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ScrollArea className="h-[400px]">
                                <BiasAnalysis data={latestAnalysis.response.detailed_bias_analysis} />
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="trends">
                    <Card>
                        <CardHeader>
                            <CardTitle>Trend Analysis</CardTitle>
                            <CardDescription>Bias factor trends over time</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ScrollArea className="h-[400px]">
                                <TrendAnalysis data={data.feedback.bias_factor_trends} />
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="mitigation">
                    <Card>
                        <CardHeader>
                            <CardTitle>Mitigation Strategies</CardTitle>
                            <CardDescription>Recommendations and outcomes</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ScrollArea className="h-[400px]">
                                <MitigationStrategies data={data.feedback.mitigation_feedback} />
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

