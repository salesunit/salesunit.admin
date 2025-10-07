"use client";

import { User } from "@/redux/api/users/interface";
import { formatDate } from "@/utils/dateFormat.util";
import { ColumnDef } from "@tanstack/react-table";

export const UserColumns: ColumnDef<User>[] = [
  //   {
  //     accessorKey: "id",
  //     cell: ({ row }) => row.getValue("id"),
  //     header: () => <span>ID</span>,
  //   },
  {
    id: "fullName",
    accessorFn: (row) => `${row.firstName} ${row.lastName}`,
    cell: ({ row }) => row.getValue("fullName"),
    header: () => <span>Full Name</span>,
  },
  {
    accessorKey: "phone",
    cell: ({ row }) => row.getValue("phone") || "N/A",
    header: () => <span>Phone</span>,
  },
  {
    accessorKey: "email",
    cell: ({ row }) => row.getValue("email") || "N/A",
    header: () => <span>Email</span>,
  },
  {
    accessorKey: "createdAt",
    cell: ({ row }) => formatDate(row.getValue("createdAt")),
    header: () => <span>Created At</span>,
  },
];
