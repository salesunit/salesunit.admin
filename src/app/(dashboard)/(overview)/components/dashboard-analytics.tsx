import { Card, CardContent } from "@/components/ui/card";
import { FC } from "react";

export const DashboardAnalytics: FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full">
      <Card>
        <CardContent>
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="mt-2 text-3xl font-bold">1,234</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <h2 className="text-lg font-semibold">Total Businesses</h2>
          <p className="mt-2 text-3xl font-bold">567</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <h2 className="text-lg font-semibold">New Signups</h2>
          <p className="mt-2 text-3xl font-bold">89</p>
        </CardContent>
      </Card>
    </div>
  );
};
