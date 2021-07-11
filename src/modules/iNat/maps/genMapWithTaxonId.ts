import Jimp from "jimp";
import { iNatBaseApiUrlV1 } from "../../../lib/constants";
import { iNatObservationMapColor } from "../../../lib/settings";

// generates heat map Jimp with taxon id
export const genMapWithTaxonId = ({
  taxonId,
  mapType,
}: {
  taxonId: string;
  mapType: "points" | "colored_heatmap" | "grid";
}) => {
  return Jimp.read(
    `${iNatBaseApiUrlV1}/${mapType}/0/0/0.png?color=${iNatObservationMapColor}&taxon_id=${taxonId}`
  ).catch((err) => null);
};
