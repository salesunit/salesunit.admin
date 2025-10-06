"use client";

import { AppPagination } from "@/components/app-pagination";
import { AppTable } from "@/components/app-table";
import { Card, CardContent } from "@/components/ui/card";
import { UserColumns } from "@/lib/user-columns";
import { userData } from "../(overview)/user-data";

export default function UsersPage() {
  return (
    <section className="p-6">
      <div>
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        <p className="text-gray-600 mb-6">
          Manage your users here. You can view, edit, and delete user accounts.
        </p>
      </div>
      <Card>
        <CardContent>
          <AppTable data={userData} columns={UserColumns} />
          <AppPagination
            itemsOnCurrentPage={userData.length}
            totalItems={userData.length}
          />
        </CardContent>
      </Card>
    </section>
  );
}
