"use client";
import { IBusiness } from "@/redux/api/business/interface";
import { formatDate } from "@/utils/dateFormat.util";
import { ColumnDef } from "@tanstack/react-table";

export const BusinessColumns: ColumnDef<IBusiness, unknown>[] = [
  {
    accessorKey: "name",
    header: () => <span>Business Name</span>,
    cell: ({ row }) => <span>{row.original.name}</span>,
  },
  {
    accessorKey: "category",
    header: () => <span>Category</span>,
    cell: ({ row }) => <span>{row.original.category}</span>,
  },
  {
    accessorKey: "country",
    header: () => <span>Country</span>,
    cell: ({ row }) => (
      <span className="capitalize">{row.original.country}</span>
    ),
  },
  {
    accessorKey: "state",
    header: () => <span>State</span>,
    cell: ({ row }) => <span>{row.original.state}</span>,
  },
  {
    accessorKey: "city",
    header: () => <span>City</span>,
    cell: ({ row }) => <span>{row.original.city}</span>,
  },
  {
    accessorKey: "phone",
    header: () => <span>Phone</span>,
    cell: ({ row }) => <span>{row.original.phone}</span>,
  },
  {
    accessorKey: "email",
    header: () => <span>Email</span>,
    cell: ({ row }) => <span>{row.original.email || "N/A"}</span>,
  },
  {
    accessorKey: "isRegistered",
    header: () => <span>Registered</span>,
    cell: ({ row }) => <span>{row.original.isRegistered ? "Yes" : "No"}</span>,
  },
  {
    accessorKey: "yearFounded",
    header: () => <span>Year Founded</span>,
    cell: ({ row }) => <span>{Number(row.original.yearFounded) || "N/A"}</span>,
  },
  {
    accessorKey: "createdAt",
    header: () => <span>Created At</span>,
    cell: ({ row }) => <span>{formatDate(row.original.createdAt)}</span>,
  },
];
