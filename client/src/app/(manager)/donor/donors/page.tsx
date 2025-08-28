import { DashboardLayout } from "@/components/dashboard-layout"
import { DonorManagement } from "@/components/donor-management"

export default function DonorsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Donor Management</h1>
          <p className="text-muted-foreground">Manage your donor database and relationships</p>
        </div>
        <DonorManagement />
      </div>
    </DashboardLayout>
  )
}
