export type SuccessResponseType<T = void> = {
  success: boolean;
  data: T;
  message: string;
  errors?: string[] | null;
};

export type PaginationResponseType<K extends string, T> = {
  success: boolean;
  message: string;
  errors?: string[] | null;
  data: {
    totalPages: number;
    currentPage: number;
    totalItems: number;
    nextPage: boolean;
    prevPage: boolean;
  } & Record<K, T[]>;
};
