"use client";
import { IBusiness } from "@/redux/api/business/interface";
import { formatDate } from "@/utils/dateFormat.util";
import { ColumnDef } from "@tanstack/react-table";

export const BusinessColumns: ColumnDef<IBusiness, unknown>[] = [
  {
    accessorKey: "name",
    header: () => <span>Business Name</span>,
    cell: ({ row }) => row.original.name,
  },
  {
    accessorKey: "category",
    header: () => <span>Category</span>,
    cell: ({ row }) => row.original.category,
  },
  {
    accessorKey: "country",
    header: () => <span>Country</span>,
    cell: ({ row }) => row.original.country,
  },
  {
    accessorKey: "state",
    header: () => <span>State</span>,
    cell: ({ row }) => row.original.state,
  },
  {
    accessorKey: "city",
    header: () => <span>City</span>,
    cell: ({ row }) => row.original.city,
  },
  {
    accessorKey: "phone",
    header: () => <span>Phone</span>,
    cell: ({ row }) => row.original.phone,
  },
  {
    accessorKey: "email",
    header: () => <span>Email</span>,
    cell: ({ row }) => row.original.email || "N/A",
  },
  {
    accessorKey: "isRegistered",
    header: () => <span>Registered</span>,
    cell: ({ row }) => (row.original.isRegistered ? "Yes" : "No"),
  },
  {
    accessorKey: "yearFounded",
    header: () => <span>Year Founded</span>,
    cell: ({ row }) => Number(row.original.yearFounded) || "N/A",
  },
  {
    accessorKey: "createdAt",
    header: () => <span>Created At</span>,
    cell: ({ row }) => formatDate(row.original.createdAt),
  },
];
