import { JsonFetchWrapper } from "../../utils";
import { gBifBaseApiUrlV1 } from "../../lib/constants";
import { limitKingdom, limitPhylum } from "../../lib/settings";

export const getTaxonKeyBySciName = ({
  sciName,
}: {
  sciName: string;
}): Promise<{ scientificName: string; taxonKey: number } | null> => {
  return JsonFetchWrapper<{
    usageKey: number;
    matchType: string;
    confidence: number;
    scientificName: string;
  }>(`${gBifBaseApiUrlV1}/species/match`, {
    method: "GET",
    urlSearchParams: {
      kingdom: limitKingdom,
      phylum: limitPhylum,
      genus: sciName,
    },
  })
    .then(({ data }) => {
      if (data) {
        const { scientificName, usageKey } = data;
        return { scientificName, taxonKey: usageKey };
      } else {
        return null;
      }
    })
    .catch(() => null);
};
