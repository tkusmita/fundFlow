import { DashboardLayout } from "@/components/dashboard-layout"
import { EventsManagement } from "@/components/events-management"

export default function EventsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Events Management</h1>
          <p className="text-muted-foreground">Organize and manage your charity events.</p>
        </div>
        <EventsManagement />
      </div>
    </DashboardLayout>
  )
}
