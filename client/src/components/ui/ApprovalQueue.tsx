'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Clock, User } from "lucide-react";


export const ApprovalQueue = () => {
  const { toast } = useToast();

  const pendingApprovals = [
    {
      id: 1,
      type: "Donation Request",
      applicant: "Sarah Johnson",
      amount: "$500",
      description: "Emergency medical fund for local community",
      submitDate: "2024-12-20",
      priority: "High",
    },
    {
      id: 2,
      type: "Sponsorship",
      applicant: "Green Earth Foundation",
      amount: "$1,200",
      description: "Tree planting initiative in urban areas",
      submitDate: "2024-12-19",
      priority: "Medium",
    },
    {
      id: 3,
      type: "Donor Registration",
      applicant: "Michael Chen",
      amount: "N/A",
      description: "Corporate donor verification",
      submitDate: "2024-12-18",
      priority: "Low",
    },
  ];

  const handleApprove = (id: number, applicant: string) => {
    toast({
      title: "Approved Successfully",
      description: `${applicant}'s request has been approved.`,
    });
  };

  const handleReject = (id: number, applicant: string) => {
    toast({
      title: "Request Rejected",
      description: `${applicant}'s request has been rejected.`,
      variant: "destructive",
    });
  };

  return (
    <div className="space-y-4">
      {pendingApprovals.map((approval) => (
        <Card key={approval.id} className="hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <User className="h-5 w-5 text-gray-600" />
                {approval.applicant}
              </CardTitle>
              <div className="flex items-center gap-2">
                <Badge
                  variant={
                    approval.priority === "High"
                      ? "destructive"
                      : approval.priority === "Medium"
                      ? "default"
                      : "secondary"
                  }
                >
                  {approval.priority} Priority
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {approval.submitDate}
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-600">Type</p>
                  <p className="text-lg">{approval.type}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Amount</p>
                  <p className="text-lg font-semibold text-green-600">{approval.amount}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Submit Date</p>
                  <p className="text-lg">{approval.submitDate}</p>
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium text-gray-600 mb-2">Description</p>
                <p className="text-gray-800">{approval.description}</p>
              </div>
              
              <div className="flex gap-3 pt-4">
                <Button
                  onClick={() => handleApprove(approval.id, approval.applicant)}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                >
                  <CheckCircle className="h-4 w-4" />
                  Approve
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => handleReject(approval.id, approval.applicant)}
                  className="flex items-center gap-2"
                >
                  <XCircle className="h-4 w-4" />
                  Reject
                </Button>
                <Button variant="outline">View Details</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

function useToast(): { toast: any; } {
    throw new Error("Function not implemented.");
}

