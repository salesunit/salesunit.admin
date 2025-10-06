import { deleteCookie, getCookie, hasCookie, setCookie } from "cookies-next";

/**
 * Retrieves the value of a cookie by its name.
 * @param name - The name of the cookie to retrieve.
 * @returns The cookie value as a string or undefined if not found.
 */
export const getCookieValue = (name: string): string | undefined => {
  return hasCookie(name) ? getCookie(name)?.toString() : undefined;
};

export const hasCookieKey = (name: string) => {
  return hasCookie(name);
};

/**
 * Sets a cookie with the specified name and value.
 * @param name - The name of the cookie.
 * @param value - The value of the cookie.
 * @param maxAge - The maximum age of the cookie in seconds (default: 3600 seconds).
 */
export const setCookieValue = (
  name: string,
  value: string,
  maxAge: number = 3600
): void => {
  setCookie(name, value, {
    maxAge,
    path: "/",
  });
};

/**
 * Removes a cookie by its name.
 * @param name - The name of the cookie to remove.
 */
export const removeCookie = (name: string): void => {
  deleteCookie(name);
};
