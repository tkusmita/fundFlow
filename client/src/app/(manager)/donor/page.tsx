import { DashboardLayout } from "@/components/dashboard-layout"
import { StatsCards } from "@/components/stats-cards"
import { RecentActivityFeed } from "@/components/recent-activity-feed"
import { DashboardCharts } from "@/components/dashboard-charts"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening with your charity today.</p>
        </div>

        <StatsCards />

        <DashboardCharts />

        <RecentActivityFeed />
      </div>
    </DashboardLayout>
  )
}
