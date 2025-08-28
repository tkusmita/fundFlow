import { DashboardLayout } from "@/components/dashboard-layout"
import { DonationsManagement } from "@/components/donations-management"

export default function DonationsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Donations Management</h1>
          <p className="text-muted-foreground">Track and manage all incoming donations.</p>
        </div>
        <DonationsManagement />
      </div>
    </DashboardLayout>
  )
}
