import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function DashboardCharts() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Donor Trends Over Time</CardTitle>
          <CardDescription>Monthly donor activity and donation volume</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[250px] flex items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg">
            <div className="text-center">
              <div className="text-muted-foreground mb-2">📈</div>
              <p className="text-sm text-muted-foreground">Line chart for donor trends</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Donor Demographics</CardTitle>
          <CardDescription>Breakdown of your donor base</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[250px] flex items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg">
            <div className="text-center">
              <div className="text-muted-foreground mb-2">📊</div>
              <p className="text-sm text-muted-foreground">Pie chart for demographics</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Campaign Success Rates</CardTitle>
          <CardDescription>Performance of your fundraising campaigns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[250px] flex items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg">
            <div className="text-center">
              <div className="text-muted-foreground mb-2">📊</div>
              <p className="text-sm text-muted-foreground">Bar graph for campaign success</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Campaign Progress</CardTitle>
          <CardDescription>Track the progress of your ongoing campaigns</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Clean Water Initiative</span>
              <span>75%</span>
            </div>
            <Progress value={75} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Education Fund</span>
              <span>90%</span>
            </div>
            <Progress value={90} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Emergency Relief</span>
              <span>40%</span>
            </div>
            <Progress value={40} className="h-2" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
