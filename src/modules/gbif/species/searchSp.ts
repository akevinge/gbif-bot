import { gBifBaseApiUrlV1 } from "../../../lib/constants";
import { gbifLimitKingdom } from "../../../lib/settings";
import { JsonFetchWrapper } from "../../../utils";

type Result = {
  nubKey: string;
  kingdom: string;
  phylum: string;
  order: string;
  family: string;
  genus: string;
};

export const filterSpForTaxonKey = async ({
  query,
}: {
  query: string;
}): Promise<string | undefined> => {
  return searchSp({ query }).then((data) => {
    if (data) {
      if (gbifLimitKingdom) {
        return data.find(({ kingdom }) => kingdom === gbifLimitKingdom)?.nubKey;
      } else {
        return data[0].nubKey;
      }
    } else {
      return undefined;
    }
  });
};

export const searchSp = ({
  query,
}: {
  query: string;
}): Promise<Result[] | null> => {
  return JsonFetchWrapper<{
    results: Result[];
  }>(
    `${gBifBaseApiUrlV1}/species/search?q=${query}&rank=${
      query.split(" ").length > 1 ? "species" : "genus"
    }`,
    { method: "GET" }
  )
    .then(({ data, err }) => {
      if (data) {
        return data.results;
      } else {
        return null;
      }
    })
    .catch((err) => null);
};
