import { gBifbaseApiUrlV2 } from "../../lib/constants";
import { mapSize, mapStyle, mapTileType } from "../../lib/settings";

type GenerateMapParams = {
  taxonKey: string | number;
  coords: {
    z: number;
    x: number;
    y: number;
  };
};

export const generateMapLinkWithTaxonKey = ({
  taxonKey,
  coords: { z, x, y },
}: GenerateMapParams): string => {
  return `${gBifbaseApiUrlV2}/map/occurrence/density/${z}/${x}/${y}${mapSize}?style=${mapStyle}&bin=${mapTileType}&srs=EPSG:4326&taxonKey=${taxonKey}`;
};
