import { BaseApi } from "../base-api";

export const BusinessApi = BaseApi.injectEndpoints({
	endpoints: (build) => ({
		getBusinesses: build.query({
			query: (params) => {
				return {
					url: "/businesses",
					method: "GET",
					params,
				};
			}
		})
	})
});

export const { useGetBusinessesQuery } = BusinessApi;