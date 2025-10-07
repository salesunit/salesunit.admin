import { IQuery } from "@/utils/query.util";
import { PaginationResponseType } from "../api-types";
import { BaseApi } from "../base-api";
import { IBusiness } from "./interface";

export const BusinessApi = BaseApi.injectEndpoints({
  endpoints: (build) => ({
    getBusinesses: build.query<
      PaginationResponseType<"businesses", IBusiness>,
      IQuery
    >({
      query: (params) => {
        return {
          url: "/business/all",
          method: "GET",
          params,
        };
      },
    }),
  }),
});

export const { useGetBusinessesQuery } = BusinessApi;
