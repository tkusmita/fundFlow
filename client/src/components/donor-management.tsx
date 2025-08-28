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
import { Plus, Search, Mail, Phone } from "lucide-react"

const donors = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    phone: "+1 (555) 123-4567",
    totalDonated: "$5,000",
    lastDonation: "2024-01-15",
    status: "active",
    donationCount: 12,
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "michael@example.com",
    phone: "+1 (555) 234-5678",
    totalDonated: "$3,500",
    lastDonation: "2024-01-14",
    status: "active",
    donationCount: 8,
  },
  {
    id: "3",
    name: "Emily Davis",
    email: "emily@example.com",
    phone: "+1 (555) 345-6789",
    totalDonated: "$2,800",
    lastDonation: "2024-01-10",
    status: "active",
    donationCount: 15,
  },
  {
    id: "4",
    name: "Robert Wilson",
    email: "robert@example.com",
    phone: "+1 (555) 456-7890",
    totalDonated: "$2,200",
    lastDonation: "2023-12-20",
    status: "inactive",
    donationCount: 6,
  },
]

export function DonorManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

  const filteredDonors = donors.filter(
    (donor) =>
      donor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donor.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Donors</CardTitle>
            <CardDescription>Manage your donor database and track their contributions</CardDescription>
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Donor
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Donor</DialogTitle>
                <DialogDescription>Add a new donor to your database. Fill in their details below.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input id="name" placeholder="John Doe" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input id="email" placeholder="john@example.com" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="phone" className="text-right">
                    Phone
                  </Label>
                  <Input id="phone" placeholder="+1 (555) 123-4567" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={() => setIsAddDialogOpen(false)}>
                  Add Donor
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
              placeholder="Search donors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Total Donated</TableHead>
              <TableHead>Donations</TableHead>
              <TableHead>Last Donation</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDonors.map((donor) => (
              <TableRow key={donor.id}>
                <TableCell className="font-medium">{donor.name}</TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <div className="flex items-center text-sm">
                      <Mail className="mr-1 h-3 w-3" />
                      {donor.email}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Phone className="mr-1 h-3 w-3" />
                      {donor.phone}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-medium">{donor.totalDonated}</TableCell>
                <TableCell>{donor.donationCount}</TableCell>
                <TableCell>{donor.lastDonation}</TableCell>
                <TableCell>
                  <Badge variant={donor.status === "active" ? "default" : "secondary"}>{donor.status}</Badge>
                </TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    View Details
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
