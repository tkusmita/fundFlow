"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Users,
  DollarSign,
  Heart,
  TrendingUp,
  Calendar,
  Phone,
  Mail,
  Plus,
  Search,
  Filter,
  MoreHorizontal,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function CharityAdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data
  const stats = [
    {
      title: "Total Donations",
      value: "$124,580",
      change: "+12.5%",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Active Donors",
      value: "2,847",
      change: "+8.2%",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Beneficiaries Helped",
      value: "1,234",
      change: "+15.3%",
      icon: Heart,
      color: "text-red-600",
    },
    {
      title: "Active Campaigns",
      value: "12",
      change: "+2",
      icon: TrendingUp,
      color: "text-purple-600",
    },
  ]

  const campaigns = [
    {
      id: 1,
      name: "Clean Water Initiative",
      target: 50000,
      raised: 32500,
      donors: 245,
      status: "active",
      endDate: "2024-03-15",
    },
    {
      id: 2,
      name: "Education for All",
      target: 75000,
      raised: 68200,
      donors: 412,
      status: "active",
      endDate: "2024-04-20",
    },
    {
      id: 3,
      name: "Emergency Relief Fund",
      target: 100000,
      raised: 89750,
      donors: 567,
      status: "active",
      endDate: "2024-02-28",
    },
  ]

  const recentDonations = [
    {
      id: 1,
      donor: "Sarah Johnson",
      amount: 250,
      campaign: "Clean Water Initiative",
      date: "2024-01-15",
      method: "Credit Card",
    },
    {
      id: 2,
      donor: "Michael Chen",
      amount: 500,
      campaign: "Education for All",
      date: "2024-01-14",
      method: "Bank Transfer",
    },
    {
      id: 3,
      donor: "Emily Davis",
      amount: 100,
      campaign: "Emergency Relief Fund",
      date: "2024-01-14",
      method: "PayPal",
    },
    {
      id: 4,
      donor: "Robert Wilson",
      amount: 750,
      campaign: "Clean Water Initiative",
      date: "2024-01-13",
      method: "Credit Card",
    },
  ]

  const donors = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "+1 (555) 123-4567",
      totalDonated: 1250,
      lastDonation: "2024-01-15",
      status: "active",
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "m.chen@email.com",
      phone: "+1 (555) 987-6543",
      totalDonated: 2100,
      lastDonation: "2024-01-14",
      status: "active",
    },
    {
      id: 3,
      name: "Emily Davis",
      email: "emily.davis@email.com",
      phone: "+1 (555) 456-7890",
      totalDonated: 850,
      lastDonation: "2024-01-14",
      status: "active",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-purple-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Charity Admin Panel</h1>
            <p className="text-gray-600">Manage your charity operations</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              Today
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-100 bg-white border-r border-blue-200 min-h-screen">
          <nav className="p-6">
            <div className="space-y-2">
              <Button
                variant={activeTab === "overview" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("overview")}
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                Overview
              </Button>
              <Button
                variant={activeTab === "campaigns" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("campaigns")}
              >
                <Heart className="w-4 h-4 mr-2" />
                Campaigns
              </Button>
              <Button
                variant={activeTab === "donors" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("donors")}
              >
                <Users className="w-4 h-4 mr-2" />
                Donors
              </Button>
              <Button
                variant={activeTab === "donations" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("donations")}
              >
                <DollarSign className="w-4 h-4 mr-2" />
                Donations
              </Button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-20 w-full">
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
                {stats.map((stat, index) => (
                  <Card key={index}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
                      <stat.icon className={`w-4 h-4 ${stat.color}`} />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <p className="text-xs text-green-600 mt-1">{stat.change} from last month</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Campaign Progress */}
              <Card>
                <CardHeader>
                  <CardTitle>Active Campaigns</CardTitle>
                  <CardDescription>Track the progress of your ongoing campaigns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {campaigns.map((campaign) => (
                      <div key={campaign.id} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{campaign.name}</h4>
                          <Badge variant="secondary">{campaign.status}</Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span>${campaign.raised.toLocaleString()} raised</span>
                          <span>Goal: ${campaign.target.toLocaleString()}</span>
                        </div>
                        <Progress value={(campaign.raised / campaign.target) * 100} className="h-2" />
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{campaign.donors} donors</span>
                          <span>Ends {campaign.endDate}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Donations */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Donations</CardTitle>
                  <CardDescription>Latest donations received</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentDonations.map((donation) => (
                      <div key={donation.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarFallback>
                              {donation.donor
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{donation.donor}</p>
                            <p className="text-sm text-gray-600">{donation.campaign}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-green-600">${donation.amount}</p>
                          <p className="text-xs text-gray-500">{donation.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "campaigns" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Campaigns</h2>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  New Campaign
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {campaigns.map((campaign) => (
                  <Card key={campaign.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{campaign.name}</CardTitle>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <Badge variant={campaign.status === "active" ? "default" : "secondary"}>{campaign.status}</Badge>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Progress</span>
                            <span>{Math.round((campaign.raised / campaign.target) * 100)}%</span>
                          </div>
                          <Progress value={(campaign.raised / campaign.target) * 100} />
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-600">Raised</p>
                            <p className="font-bold">${campaign.raised.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Goal</p>
                            <p className="font-bold">${campaign.target.toLocaleString()}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span>{campaign.donors} donors</span>
                          <span>Ends {campaign.endDate}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "donors" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Donors</h2>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input placeholder="Search donors..." className="pl-10 w-64" />
                  </div>
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Donor
                  </Button>
                </div>
              </div>

              <Card>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Donor</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Total Donated</TableHead>
                      <TableHead>Last Donation</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {donors.map((donor) => (
                      <TableRow key={donor.id}>
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <Avatar>
                              <AvatarFallback>
                                {donor.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{donor.name}</p>
                              <p className="text-sm text-gray-600">ID: {donor.id}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="flex items-center text-sm">
                              <Mail className="w-3 h-3 mr-1" />
                              {donor.email}
                            </div>
                            <div className="flex items-center text-sm">
                              <Phone className="w-3 h-3 mr-1" />
                              {donor.phone}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="font-bold text-green-600">${donor.totalDonated.toLocaleString()}</span>
                        </TableCell>
                        <TableCell>{donor.lastDonation}</TableCell>
                        <TableCell>
                          <Badge variant={donor.status === "active" ? "default" : "secondary"}>{donor.status}</Badge>
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <DropdownMenuItem>View Profile</DropdownMenuItem>
                              <DropdownMenuItem>Send Message</DropdownMenuItem>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          )}

          {activeTab === "donations" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Donations</h2>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input placeholder="Search donations..." className="pl-10 w-64" />
                  </div>
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>

              <Card>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Donor</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Campaign</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentDonations.map((donation) => (
                      <TableRow key={donation.id}>
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <Avatar>
                              <AvatarFallback>
                                {donation.donor
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <span className="font-medium">{donation.donor}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="font-bold text-green-600">${donation.amount}</span>
                        </TableCell>
                        <TableCell>{donation.campaign}</TableCell>
                        <TableCell>{donation.date}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{donation.method}</Badge>
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <DropdownMenuItem>View Receipt</DropdownMenuItem>
                              <DropdownMenuItem>Send Thank You</DropdownMenuItem>
                              <DropdownMenuItem>Refund</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
