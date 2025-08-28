import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const recentDonations = [
  {
    id: "DON-001",
    donor: "Sarah Johnson",
    amount: "$500.00",
    campaign: "Clean Water Initiative",
    date: "2024-01-15",
    status: "completed",
  },
  {
    id: "DON-002",
    donor: "Michael Chen",
    amount: "$250.00",
    campaign: "Education Fund",
    date: "2024-01-14",
    status: "completed",
  },
  {
    id: "DON-003",
    donor: "Emily Davis",
    amount: "$1,000.00",
    campaign: "Emergency Relief",
    date: "2024-01-14",
    status: "pending",
  },
  {
    id: "DON-004",
    donor: "Robert Wilson",
    amount: "$150.00",
    campaign: "Healthcare Support",
    date: "2024-01-13",
    status: "completed",
  },
  {
    id: "DON-005",
    donor: "Lisa Anderson",
    amount: "$300.00",
    campaign: "Food Security",
    date: "2024-01-13",
    status: "completed",
  },
]

export function RecentDonations() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Donations</CardTitle>
        <CardDescription>Latest donations received from your supporters</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Donation ID</TableHead>
              <TableHead>Donor</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Campaign</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentDonations.map((donation) => (
              <TableRow key={donation.id}>
                <TableCell className="font-medium">{donation.id}</TableCell>
                <TableCell>{donation.donor}</TableCell>
                <TableCell>{donation.amount}</TableCell>
                <TableCell>{donation.campaign}</TableCell>
                <TableCell>{donation.date}</TableCell>
                <TableCell>
                  <Badge variant={donation.status === "completed" ? "default" : "secondary"}>{donation.status}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
