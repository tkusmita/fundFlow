import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, DollarSign, UserPlus, Megaphone } from "lucide-react"

const latestDonations = [
  { id: "1", donor: "Alice Smith", amount: "$150.00", campaign: "Education Fund", time: "2 hours ago" },
  { id: "2", donor: "Bob Johnson", amount: "$50.00", campaign: "Clean Water", time: "5 hours ago" },
  { id: "3", donor: "Charlie Brown", amount: "$200.00", campaign: "Emergency Relief", time: "1 day ago" },
]

const newDonorSignups = [
  { id: "1", name: "David Lee", email: "david@example.com", time: "3 hours ago", initials: "DL" },
  { id: "2", name: "Eve Davis", email: "eve@example.com", time: "10 hours ago", initials: "ED" },
]

const campaignUpdates = [
  { id: "1", campaign: "New School Building", update: "Reached 75% of goal!", time: "1 day ago" },
  { id: "2", campaign: "Winter Food Drive", update: "Distributed 500 meals", time: "2 days ago" },
]

const upcomingEvents = [
  { id: "1", name: "Annual Charity Gala", date: "March 10, 2025", location: "Grand Ballroom" },
  { id: "2", name: "Community Cleanup Day", date: "April 5, 2025", location: "Riverside Park" },
]

export function RecentActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity Feed</CardTitle>
        <CardDescription>Stay updated with the latest happenings in your charity</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <DollarSign className="mr-2 h-5 w-5 text-muted-foreground" /> Latest Donations
          </h3>
          <div className="space-y-4">
            {latestDonations.map((donation) => (
              <div key={donation.id} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">
                    {donation.donor} donated {donation.amount}
                  </p>
                  <p className="text-xs text-muted-foreground">to {donation.campaign}</p>
                </div>
                <span className="text-xs text-muted-foreground">{donation.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <UserPlus className="mr-2 h-5 w-5 text-muted-foreground" /> New Donor Sign-ups
          </h3>
          <div className="space-y-4">
            {newDonorSignups.map((donor) => (
              <div key={donor.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg" alt={donor.name} />
                    <AvatarFallback>{donor.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{donor.name}</p>
                    <p className="text-xs text-muted-foreground">{donor.email}</p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">{donor.time}</span>
              </div>
            ))}
          </div>
        </div>

        <Separator className="col-span-full" />

        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <Megaphone className="mr-2 h-5 w-5 text-muted-foreground" /> Latest Campaign Updates
          </h3>
          <div className="space-y-4">
            {campaignUpdates.map((update) => (
              <div key={update.id} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{update.campaign}</p>
                  <p className="text-xs text-muted-foreground">{update.update}</p>
                </div>
                <span className="text-xs text-muted-foreground">{update.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <CalendarDays className="mr-2 h-5 w-5 text-muted-foreground" /> Upcoming Charity Events
          </h3>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{event.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {event.date} at {event.location}
                  </p>
                </div>
                <Badge variant="outline">Event</Badge>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
