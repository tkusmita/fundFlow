import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Gift, TrendingUp, Award } from "lucide-react";

export const DonorStats = () => {
  const stats = [
    {
      title: "Total Donated",
      value: "$2,450",
      change: "Thank you for your generosity!",
      icon: Heart,
      color: "text-red-500",
      bgColor: "bg-red-100",
    },
    {
      title: "Lives Impacted",
      value: "127",
      change: "People helped by your donations",
      icon: TrendingUp,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Projects Supported",
      value: "8",
      change: "Active sponsorships",
      icon: Gift,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Donor Level",
      value: "Gold",
      change: "Top 10% of donors",
      icon: Award,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              {stat.title}
            </CardTitle>
            <div className={`p-2 rounded-full ${stat.bgColor}`}>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
