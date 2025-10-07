"use client";

import { AppPagination } from "@/components/app-pagination";
import { AppTable } from "@/components/app-table";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useDebounceInput } from "@/hooks/use-debounce";
import { UserColumns } from "@/lib/user-columns";
import { useGetAllUsersQuery } from "@/redux/api/users";
import { IQuery } from "@/utils/query.util";
import { SearchIcon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export default function UsersPage() {
  const [usersQuery, setUsersQuery] = useState<IQuery>({
    limit: 10,
    page: 1,
  });

  const [userSearch, setUserSearch] = useState<string>("");

  const {
    data: usersData,
    isLoading,
    isFetching,
  } = useGetAllUsersQuery(usersQuery);

  const users = useMemo(() => {
    if (usersData) {
      const { data } = usersData;
      return data ? data.users : [];
    }
    return [];
  }, [usersData]);

  const updateQuery = (newQuery: IQuery) => {
    setUsersQuery((prev) => ({ ...prev, ...newQuery }));
  };

  const debouncedSearchInput = useDebounceInput(userSearch, 800);

  useEffect(() => {
    if (debouncedSearchInput) {
      updateQuery({ "filter[search]": debouncedSearchInput, page: 1 });
    } else {
      updateQuery({ "filter[search]": undefined, page: 1 });
    }
  }, [debouncedSearchInput]);

  return (
    <section className="p-6">
      <div>
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        <p className="text-gray-600 mb-6">
          Manage your users here. You can view, edit, and delete user accounts.
        </p>
      </div>

      {usersData && (
        <Card>
          <CardContent>
            <div className="max-w-sm w-full mb-4 relative">
              <Input
                placeholder="Search user..."
                onChange={(e) => setUserSearch(e.target.value)}
                className="w-full pl-8"
              />
              <SearchIcon
                size={16}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>
            <AppTable
              data={users}
              columns={UserColumns}
              loading={isLoading || isFetching}
            />
            <AppPagination
              itemsOnCurrentPage={users.length}
              limit={usersQuery.limit as number}
              totalItems={usersData.data.totalItems}
              currentPage={usersQuery.page as number}
              totalPages={usersData.data.totalPages}
              hasNextPage={usersData.data.nextPage}
              hasPreviousPage={usersData.data.prevPage}
              nextPageHandler={() =>
                updateQuery({ page: (usersQuery.page as number) + 1 })
              }
              previousPageHandler={() =>
                updateQuery({ page: (usersQuery.page as number) - 1 })
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
