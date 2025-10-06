"use client";

import { User } from "@/redux/api/users/interface";
import {
	flexRender,
	getCoreRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { FC } from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../ui/table";
import { UserColumns } from "./columns";

export const UserTable: FC<{
  data: User[];
}> = ({ data }) => {
  const table = useReactTable({
    data,
    columns: UserColumns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup, index) => (
            <TableRow key={index}>
              {headerGroup.headers.map((header) => (
                <TableHead className="p-4" key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className="p-4 align-middle text-sm font-medium"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={table.getAllColumns().length}
                className="h-24 text-center"
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
