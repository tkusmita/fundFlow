import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, DollarSign } from "lucide-react";

export const DonationHistory = () => {
  const donations = [
    {
      id: 1,
      project: "Clean Water Initiative",
      amount: "$150",
      date: "2024-12-15",
      status: "Completed",
      impact: "Provided clean water for 15 families",
    },
    {
      id: 2,
      project: "Education Fund",
      amount: "$300",
      date: "2024-11-28",
      status: "Completed",
      impact: "Sponsored 3 children's education",
    },
    {
      id: 3,
      project: "Food Relief Program",
      amount: "$100",
      date: "2024-11-10",
      status: "Completed",
      impact: "Fed 25 families for a week",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-blue-600" />
          Donation History
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {donations.map((donation) => (
            <div key={donation.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-gray-900">{donation.project}</h4>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  {donation.status}
                </Badge>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                <span className="flex items-center gap-1">
                  <DollarSign className="h-3 w-3" />
                  {donation.amount}
                </span>
                <span>{donation.date}</span>
              </div>
              <p className="text-sm text-gray-700 italic">{donation.impact}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
