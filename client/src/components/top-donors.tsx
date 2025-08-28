import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const topDonors = [
  {
    name: "Sarah Johnson",
    email: "sarah@example.com",
    amount: "$5,000",
    avatar: "/placeholder-user.jpg",
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    email: "michael@example.com",
    amount: "$3,500",
    avatar: "/placeholder-user.jpg",
    initials: "MC",
  },
  {
    name: "Emily Davis",
    email: "emily@example.com",
    amount: "$2,800",
    avatar: "/placeholder-user.jpg",
    initials: "ED",
  },
  {
    name: "Robert Wilson",
    email: "robert@example.com",
    amount: "$2,200",
    avatar: "/placeholder-user.jpg",
    initials: "RW",
  },
  {
    name: "Lisa Anderson",
    email: "lisa@example.com",
    amount: "$1,900",
    avatar: "/placeholder-user.jpg",
    initials: "LA",
  },
]

export function TopDonors() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Donors</CardTitle>
        <CardDescription>Your most generous supporters this month</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topDonors.map((donor) => (
            <div key={donor.email} className="flex items-center space-x-4">
              <Avatar className="h-9 w-9">
                <AvatarImage src={donor.avatar || "/placeholder.svg"} alt={donor.name} />
                <AvatarFallback>{donor.initials}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">{donor.name}</p>
                <p className="text-sm text-muted-foreground">{donor.email}</p>
              </div>
              <div className="font-medium">{donor.amount}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
