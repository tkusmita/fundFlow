"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function DonationChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Donation Overview</CardTitle>
        <CardDescription>Monthly donation trends for the past 6 months</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] flex items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg">
          <div className="text-center">
            <div className="text-muted-foreground mb-2">📊</div>
            <p className="text-sm text-muted-foreground">Chart visualization would go here</p>
            <p className="text-xs text-muted-foreground mt-1">Integration with charting library needed</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
