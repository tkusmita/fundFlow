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
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"

const campaigns = [
  {
    id: "CAMP-001",
    name: "Clean Water Initiative",
    goal: "$10,000",
    raised: "$7,500",
    startDate: "2024-01-01",
    endDate: "2024-03-31",
    status: "active",
    progress: 75,
  },
  {
    id: "CAMP-002",
    name: "Education Fund for Children",
    goal: "$15,000",
    raised: "$13,500",
    startDate: "2024-02-01",
    endDate: "2024-04-30",
    status: "active",
    progress: 90,
  },
  {
    id: "CAMP-003",
    name: "Emergency Relief Fund",
    goal: "$20,000",
    raised: "$8,000",
    startDate: "2024-01-20",
    endDate: "2024-02-29",
    status: "active",
    progress: 40,
  },
  {
    id: "CAMP-004",
    name: "Healthcare Support Program",
    goal: "$5,000",
    raised: "$5,000",
    startDate: "2023-11-01",
    endDate: "2023-12-31",
    status: "completed",
    progress: 100,
  },
]

export function CampaignsManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

  const filteredCampaigns = campaigns.filter(
    (campaign) =>
      campaign.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      campaign.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Campaigns</CardTitle>
            <CardDescription>Manage your fundraising campaigns and track their progress.</CardDescription>
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Campaign
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Campaign</DialogTitle>
                <DialogDescription>Create a new fundraising campaign.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="campaignName" className="text-right">
                    Name
                  </Label>
                  <Input id="campaignName" placeholder="New Campaign Title" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="goal" className="text-right">
                    Goal
                  </Label>
                  <Input id="goal" type="number" placeholder="10000" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Description
                  </Label>
                  <Textarea id="description" placeholder="Brief description of the campaign" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="startDate" className="text-right">
                    Start Date
                  </Label>
                  <Input id="startDate" type="date" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="endDate" className="text-right">
                    End Date
                  </Label>
                  <Input id="endDate" type="date" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={() => setIsAddDialogOpen(false)}>
                  Add Campaign
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
              placeholder="Search campaigns..."
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
              <TableHead>Goal</TableHead>
              <TableHead>Raised</TableHead>
              <TableHead>Dates</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Progress</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCampaigns.map((campaign) => (
              <TableRow key={campaign.id}>
                <TableCell className="font-medium">{campaign.name}</TableCell>
                <TableCell>{campaign.goal}</TableCell>
                <TableCell>{campaign.raised}</TableCell>
                <TableCell>
                  {campaign.startDate} - {campaign.endDate}
                </TableCell>
                <TableCell>
                  <Badge variant={campaign.status === "active" ? "default" : "secondary"}>{campaign.status}</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Progress value={campaign.progress} className="h-2 w-24" />
                    <span className="text-sm text-muted-foreground">{campaign.progress}%</span>
                  </div>
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
