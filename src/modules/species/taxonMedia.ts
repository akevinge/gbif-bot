import { gBifbaseApiUrlV1 } from "../../lib/constants";
import { JsonFetchWrapper } from "../../utils";
import { TaxonMediaResult, TaxonEmbedData } from "../../types/TaxonMedia";

export const getTaxonMedia = ({
  taxonKey,
}: {
  taxonKey: string | number;
}): Promise<TaxonEmbedData[]> => {
  return JsonFetchWrapper<{ results: TaxonMediaResult[] }>(
    `${gBifbaseApiUrlV1}/species/${taxonKey}/media`,
    {
      method: "GET",
    }
  )
    .then(({ data, err }) => {
      if (data) {
        return data.results.map(({ identifier, references }) => ({
          identifier,
          references,
        }));
      } else {
        return [];
      }
    })
    .catch(() => []);
};
