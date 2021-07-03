import { iNatBaseApiUrlV1 } from "../../../lib/constants";
import { iNatSearchData } from "../../../types/iNat/iNatSearchData";
import { JsonFetchWrapper } from "../../../utils";

export const iNatTaxaSearch = ({ query }: { query: string }) => {
  return JsonFetchWrapper<iNatSearchData>(`${iNatBaseApiUrlV1}/search`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    urlSearchParams: {
      q: query,
      sources: "taxa",
    },
  })
    .then(({ data, err }) => {
      return data || null;
    })
    .catch(() => null);
};
