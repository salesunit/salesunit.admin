"use client";

import {
	ChevronLeftIcon,
	ChevronRightIcon,
	ChevronsLeftIcon,
	ChevronsRightIcon,
} from "lucide-react";
import { FC } from "react";
import { Button } from "./ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";

interface AppPaginationProps {
  totalItems: number;
  itemsOnCurrentPage: number;
  totalPages?: number;
  currentPage?: number;
  limit?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  nextPageHandler?: () => void;
  previousPageHandler?: () => void;
  setCurrentPage?: (index: number) => void;
  setLimit?: (size: number) => void;
}

export const AppPagination: FC<AppPaginationProps> = ({
  hasNextPage,
  hasPreviousPage,
  nextPageHandler,
  previousPageHandler,
  currentPage = 1,
  limit = 10,
  totalPages = 1,
  totalItems = 0,
  setLimit,
  setCurrentPage,
}) => {
  return (
    <div className="flex sm:flex-row flex-col flex-wrap items-center justify-between p-4 gap-4">
      <div className="flex items-center space-x-2">
        <p className="text-sm font-medium">Rows per page</p>
        <Select
          value={`${limit}`}
          onValueChange={(value) => {
            setLimit?.(Number(value));
          }}
        >
          <SelectTrigger className="h-8 w-[70px]">
            <SelectValue placeholder={limit} />
          </SelectTrigger>
          <SelectContent side="top">
            {[10, 20, 25, 30, 40, 50].map((limit) => (
              <SelectItem key={limit} value={`${limit}`}>
                {limit}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex w-[100px] items-center justify-center text-sm font-medium">
        Page {currentPage} of {totalPages}
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="icon"
          className="hidden size-8 lg:flex"
          onClick={() => setCurrentPage?.(1)}
          disabled={!hasPreviousPage}
        >
          <span className="sr-only">Go to first page</span>
          <ChevronsLeftIcon />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="size-8"
          onClick={() => previousPageHandler?.()}
          disabled={!hasPreviousPage}
        >
          <span className="sr-only">Go to previous page</span>
          <ChevronLeftIcon />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="size-8"
          onClick={() => nextPageHandler?.()}
          disabled={!hasNextPage}
        >
          <span className="sr-only">Go to next page</span>
          <ChevronRightIcon />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="hidden size-8 lg:flex"
          onClick={() => setCurrentPage?.(totalPages)}
          disabled={!hasNextPage}
        >
          <span className="sr-only">Go to last page</span>
          <ChevronsRightIcon />
        </Button>
      </div>
    </div>
  );
};
