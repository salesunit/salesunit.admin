import { getCookieValue } from "@/utils/cookies.util";
import { BaseQueryFn } from "@reduxjs/toolkit/query";
import axios, {
	AxiosError,
	AxiosRequestConfig,
	AxiosRequestHeaders,
	Method,
} from "axios";

export const AxiosBaseQuery =
  ({
    baseUrl = "",
    baseHeaders = {},
  }: {
    baseUrl: string;
    baseHeaders?: AxiosRequestConfig["headers"];
  }): BaseQueryFn<{
    url: string;
    method: Method;
    data?: AxiosRequestConfig["data"];
    params?: AxiosRequestConfig["params"];
    headers?: AxiosRequestConfig["headers"];
  }> =>
  async ({ url, method, data, params, headers }) => {
    try {
      const token = getCookieValue("accessToken");
      let requestHeaders = {
        ...baseHeaders,
        ...headers,
      } as AxiosRequestHeaders;
      if (token) {
        requestHeaders = {
          ...requestHeaders.headers,
          Authorization: `Bearer ${token}`,
        } as AxiosRequestHeaders;
      }
      const result = await axios({
        url: baseUrl + url,
        method,
        params,
        data,
        headers: requestHeaders,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;

      // Fix: Use err.response?.status instead of err.status
      // if (err.response?.status === 401) {
      //   // Remove cookie
      //   const currentPath = window.location.href;
      //   removeCookie("accessToken");
      //   window.location.href = `/login?redirect=${encodeURIComponent(
      //     currentPath
      //   )}`;
      // }

      // Fix: Return proper error structure for RTK Query
      return {
        error: {
          status: err.response?.status || err.code || "FETCH_ERROR",
          data: err.response?.data || { message: err.message },
          error: err.message,
        },
      };
    }
  };
