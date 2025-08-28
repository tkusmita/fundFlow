"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Plus, Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const donations = [
  {
    id: "DON-001",
    donor: "Sarah Johnson",
    amount: "$500.00",
    campaign: "Clean Water Initiative",
    date: "2024-01-15",
    paymentMethod: "Credit Card",
    status: "completed",
  },
  {
    id: "DON-002",
    donor: "Michael Chen",
    amount: "$250.00",
    campaign: "Education Fund",
    date: "2024-01-14",
    paymentMethod: "PayPal",
    status: "completed",
  },
  {
    id: "DON-003",
    donor: "Emily Davis",
    amount: "$1,000.00",
    campaign: "Emergency Relief",
    date: "2024-01-14",
    paymentMethod: "Bank Transfer",
    status: "pending",
  },
  {
    id: "DON-004",
    donor: "Robert Wilson",
    amount: "$150.00",
    campaign: "Healthcare Support",
    date: "2024-01-13",
    paymentMethod: "Credit Card",
    status: "completed",
  },
  {
    id: "DON-005",
    donor: "Lisa Anderson",
    amount: "$300.0    0",
    campaign: "Food Security",
    date: "2024-01-13",
    paymentMethod: "PayPal",
    status: "completed",
  },
]

export function DonationsManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

  const filteredDonations = donations.filter(
    (donation) =>
      donation.donor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donation.campaign.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donation.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Donations</CardTitle>
            <CardDescription>Manage and track all donations received.</CardDescription>
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Donation
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Donation</DialogTitle>
                <DialogDescription>Manually add a new donation record.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="donorName" className="text-right">
                    Donor Name
                  </Label>
                  <Input id="donorName" placeholder="Jane Doe" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="amount" className="text-right">
                    Amount
                  </Label>
                  <Input id="amount" type="number" placeholder="100.00" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="campaign" className="text-right">
                    Campaign
                  </Label>
                  <Select>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select a campaign" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clean-water">Clean Water Initiative</SelectItem>
                      <SelectItem value="education-fund">Education Fund</SelectItem>
                      <SelectItem value="emergency-relief">Emergency Relief</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="date" className="text-right">
                    Date
                  </Label>
                  <Input id="date" type="date" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="paymentMethod" className="text-right">
                    Payment Method
                  </Label>
                  <Select>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="credit-card">Credit Card</SelectItem>
                      <SelectItem value="paypal">PayPal</SelectItem>
                      <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                      <SelectItem value="cash">Cash</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={() => setIsAddDialogOpen(false)}>
                  Add Donation
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 mb-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search donations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Donor</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Campaign</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDonations.map((donation) => (
              <TableRow key={donation.id}>
                <TableCell className="font-medium">{donation.id}</TableCell>
                <TableCell>{donation.donor}</TableCell>
                <TableCell>{donation.amount}</TableCell>
                <TableCell>{donation.campaign}</TableCell>
                <TableCell>{donation.date}</TableCell>
                <TableCell>{donation.paymentMethod}</TableCell>
                <TableCell>
                  <Badge variant={donation.status === "completed" ? "default" : "secondary"}>{donation.status}</Badge>
                </TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
