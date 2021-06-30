import fetch from "node-fetch";

interface JsonFetchWrapperParams {
  method: "GET" | "POST" | "DELETE" | "PUT" | "PATCH";
  body?: object;
  headers?: object;
  urlSearchParams?: { [i: string]: any };
}

export const JsonFetchWrapper = <T>(
  url: string,
  { method, body, headers, urlSearchParams }: JsonFetchWrapperParams
): Promise<{ data: T | null; err: boolean }> => {
  return fetch(
    `${url}${
      urlSearchParams ? `?${new URLSearchParams(urlSearchParams)}` : ""
    }`,
    {
      method,
      headers: { ...headers },
      ...(method !== "GET" && { body: JSON.stringify(body || {}) }),
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
        throw new Error();
      }
    })
    .then((data: any) => {
      return { data: <T>data, err: false };
    })
    .catch((err) => {
      return { data: null, err: err };
    });
};
