import { AppTable } from "@/components/app-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserTable } from "@/components/users-table";
import { BusinessColumns } from "@/lib/business-columns";
import { businessData } from "./business-data";
import { DashboardAnalytics } from "./components/dashboard-analytics";
import { userData } from "./user-data";

export default function DashboardPage() {
  return (
    <section className="space-y-4 p-4">
      <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
      <p className="mt-2 text-gray-600">
        Select an option from the sidebar to get started.
      </p>

      <DashboardAnalytics />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Users</CardTitle>
          </CardHeader>
          <CardContent>
            <UserTable data={userData.filter((user, index) => index < 8)} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Businesses</CardTitle>
          </CardHeader>
          <CardContent>
            <AppTable
              columns={BusinessColumns}
              data={businessData.filter((user, index) => index < 8)}
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
