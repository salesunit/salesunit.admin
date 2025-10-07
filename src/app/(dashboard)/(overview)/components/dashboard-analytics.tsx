import { Card, CardContent } from "@/components/ui/card";
import { FC } from "react";

interface DashboardAnalyticsProps {
  totalUsers?: number;
  totalBusinesses?: number;
}
export const DashboardAnalytics: FC<DashboardAnalyticsProps> = ({
  totalBusinesses = 0,
  totalUsers = 0,
}) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 w-full">
      <Card>
        <CardContent>
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="mt-2 text-3xl font-bold">{totalUsers}</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <h2 className="text-lg font-semibold">Total Businesses</h2>
          <p className="mt-2 text-3xl font-bold">{totalBusinesses}</p>
        </CardContent>
      </Card>
    </div>
  );
};
