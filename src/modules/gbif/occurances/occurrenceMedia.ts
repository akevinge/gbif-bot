import { gBifBaseApiUrlV1 } from "../../../lib/constants";
import {
  OccurrenceEmbedData,
  OccurrenceMediaResult,
} from "../../../types/gbif/OccurrenceMedia";
import { JsonFetchWrapper } from "../../../utils";

export const getOccurrenceMedia = ({
  taxonKey,
}: {
  taxonKey: string | number;
}): Promise<OccurrenceEmbedData[]> => {
  return JsonFetchWrapper<{ results: OccurrenceMediaResult[] }>(
    `${gBifBaseApiUrlV1}/occurrence/search`,
    {
      method: "GET",
      urlSearchParams: {
        taxonKey,
      },
    }
  )
    .then(({ data }) => {
      if (data) {
        const { results } = data;

        return results
          .filter(({ media }) => media.length > 0)
          .map(
            ({
              scientificName,
              media,
              verbatimEventDate,
              verbatimLocality,
              taxonomicStatus,
              occurrenceID,
            }) => ({
              scientificName,
              verbatimEventDate,
              verbatimLocality,
              taxonomicStatus,
              identifier: media[0].identifier,
              references: media[0].references,
              occurrenceID,
            })
          );
      } else {
        return [];
      }
    })
    .catch((err) => []);
};
