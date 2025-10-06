"use client";

import { AppTable } from "@/components/app-table";
import { Card, CardContent } from "@/components/ui/card";
import { BusinessColumns } from "@/lib/business-columns";
import { businessData } from "../(overview)/business-data";

export default function BusinessPage() {
  return (
    <section className="p-6">
      <div>
        <h1 className="text-2xl font-bold mb-4">Businesses</h1>
        <p className="text-gray-600 mb-6">
          Manage your businesses here. You can view, edit, and delete business
          accounts.
        </p>
      </div>

      <Card>
        <CardContent>
          <AppTable columns={BusinessColumns} data={businessData} />
        </CardContent>
      </Card>
    </section>
  );
}
