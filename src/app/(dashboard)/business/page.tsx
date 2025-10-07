"use client";

import { AppPagination } from "@/components/app-pagination";
import { AppTable } from "@/components/app-table";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useDebounceInput } from "@/hooks/use-debounce";
import { BusinessColumns } from "@/lib/business-columns";
import { useGetBusinessesQuery } from "@/redux/api/business";
import { IQuery } from "@/utils/query.util";
import { SearchIcon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export default function BusinessPage() {
  const [businessQuery, setBusinessQuery] = useState<IQuery>({
    limit: 10,
    page: 1,
  });

  const [businessSearch, setBusinessSearch] = useState<string>("");

  const {
    data: businessData,
    isLoading,
    isFetching,
  } = useGetBusinessesQuery(businessQuery);

  const businesses = useMemo(() => {
    if (businessData) {
      const { data } = businessData;
      return data ? data.businesses : [];
    }
    return [];
  }, [businessData]);

  const updateQuery = (newQuery: IQuery) => {
    setBusinessQuery((prev) => ({ ...prev, ...newQuery }));
  };

  const debouncedSearchInput = useDebounceInput(businessSearch, 800);

  useEffect(() => {
    if (debouncedSearchInput) {
      updateQuery({ "filter[name]": debouncedSearchInput, page: 1 });
    } else {
      updateQuery({ "filter[name]": undefined, page: 1 });
    }
  }, [debouncedSearchInput]);

  return (
    <section className="p-6">
      <div>
        <h1 className="text-2xl font-bold mb-4">Businesses</h1>
        <p className="text-gray-600 mb-6">
          Manage your businesses here. You can view, edit, and delete business
          accounts.
        </p>
      </div>

      {businessData && (
        <Card>
          <CardContent>
            <div className="max-w-sm w-full mb-4 relative">
              <Input
                placeholder="Search business name..."
                onChange={(e) => setBusinessSearch(e.target.value)}
                className="w-full pl-8"
              />
              <SearchIcon
                size={16}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>

            <AppTable
              columns={BusinessColumns}
              data={businesses}
              loading={isLoading || isFetching}
            />
            <AppPagination
              itemsOnCurrentPage={businesses.length}
              totalItems={businessData?.data.totalItems || 0}
              totalPages={businessData?.data.totalPages || 0}
              currentPage={businessData.data.currentPage}
              hasNextPage={businessData.data.nextPage}
              hasPreviousPage={businessData.data.prevPage}
              limit={(businessQuery.limit as number) || 10}
              nextPageHandler={() =>
                updateQuery({ page: ((businessQuery.page as number) || 1) + 1 })
              }
              previousPageHandler={() =>
                updateQuery({ page: ((businessQuery.page as number) || 1) - 1 })
              }
              setCurrentPage={(page: number) => updateQuery({ page })}
              setLimit={(limit: number) => updateQuery({ limit, page: 1 })}
            />
          </CardContent>
        </Card>
      )}
    </section>
  );
}
