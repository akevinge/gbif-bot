import fetch from "node-fetch";
import FormData from "form-data";

interface JsonFetchWrapperParams {
  method: "GET" | "POST" | "DELETE" | "PUT" | "PATCH";
  body?: object | FormData;
  headers?: object;
  urlSearchParams?: { [i: string]: any };
}

export const JsonFetchWrapper = <T>(
  url: string,
  { method, body, headers, urlSearchParams }: JsonFetchWrapperParams
): Promise<{ data: T | null; err: boolean | Error }> => {
  return fetch(
    `${url}${
      urlSearchParams ? `?${new URLSearchParams(urlSearchParams)}` : ""
    }`,
    {
      method,
      headers: { ...headers },
      ...(method !== "GET" &&
        (body instanceof FormData
          ? { body }
          : { body: JSON.stringify(body || {}) })),
    }
  )
    .then(async (r) => {
      if (r.ok) {
        try {
          return await r.json();
        } catch {
          return {};
        }
      } else {
        throw await r
          .json()
          .catch(() => new Error("Fetch error but could not parse body"));
      }
    })
    .then((data: any) => {
      return { data: <T>data, err: false };
    })
    .catch((err) => {
      return { data: null, err: err };
    });
};
