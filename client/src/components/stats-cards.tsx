import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Users, TrendingUp, Target, Handshake, PiggyBank } from "lucide-react"

const stats = [
  {
    title: "Total Donations",
    value: "$45,231.89",
    change: "+20.1% from last month",
    icon: DollarSign,
  },
  {
    title: "Active Donors",
    value: "2,350",
    change: "+180 new donors",
    icon: Users,
  },
  {
    title: "Ongoing Campaigns",
    value: "5",
    change: "2 new this month",
    icon: Target,
  },
  {
    title: "Volunteer Count",
    value: "120",
    change: "+15 new volunteers",
    icon: Handshake,
  },
  {
    title: "Fund Utilization",
    value: "85%",
    change: "on track for Q1",
    icon: PiggyBank,
  },
  {
    title: "Monthly Growth",
    value: "+12.5%",
    change: "+4.3% from last month",
    icon: TrendingUp,
  },
]

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
