import { DashboardLayout } from "@/components/dashboard-layout"
import { CampaignsManagement } from "@/components/campaigns-management"

export default function CampaignsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Campaigns Management</h1>
          <p className="text-muted-foreground">Create, track, and manage your fundraising campaigns.</p>
        </div>
        <CampaignsManagement />
      </div>
    </DashboardLayout>
  )
}
