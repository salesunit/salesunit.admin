import { IQuery } from "@/utils/query.util";
import { PaginationResponseType } from "../api-types";
import { BaseApi } from "../base-api";
import { User } from "./interface";

export const UsersApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<PaginationResponseType<"users", User>, IQuery>({
      query: (query) => {
        return {
          url: "/auth/all-users",
          method: "GET",
          params: query,
        };
      },
      providesTags: ["users"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllUsersQuery } = UsersApi;
