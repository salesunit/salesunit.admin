"use client";
import { AppTable } from "@/components/app-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BusinessColumns } from "@/lib/business-columns";
import { UserColumns } from "@/lib/user-columns";
import { useGetBusinessesQuery } from "@/redux/api/business";
import { useGetAllUsersQuery } from "@/redux/api/users";
import { useMemo } from "react";
import { DashboardAnalytics } from "./components/dashboard-analytics";

export default function DashboardPage() {
  const {
    data: usersData,
    isLoading: isLoadingUsers,
    isFetching: isFetchingUsers,
  } = useGetAllUsersQuery({ limit: 8, page: 1 });
  const users = useMemo(() => {
    if (usersData) {
      const { data } = usersData;
      return data ? data.users : [];
    }
    return [];
  }, [usersData]);

  const {
    data: businessesData,
    isLoading: isLoadingBusinesses,
    isFetching: isFetchingBusinesses,
  } = useGetBusinessesQuery({ limit: 8, page: 1 });
  const businesses = useMemo(() => {
    if (businessesData) {
      const { data } = businessesData;
      return data ? data.businesses : [];
    }
    return [];
  }, [businessesData]);

  return (
    <section className="space-y-4 p-4">
      <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
      <p className="mt-2 text-gray-600">
        This is the admin dashboard where you can manage users and businesses.
      </p>

      <DashboardAnalytics
        totalUsers={usersData?.data.totalItems}
        totalBusinesses={businessesData?.data.totalItems}
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Users</CardTitle>
          </CardHeader>
          <CardContent>
            <AppTable
              columns={UserColumns}
              data={users}
              loading={isLoadingUsers || isFetchingUsers}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Businesses</CardTitle>
          </CardHeader>
          <CardContent>
            <AppTable
              columns={BusinessColumns}
              data={businesses}
              loading={isLoadingBusinesses || isFetchingBusinesses}
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
