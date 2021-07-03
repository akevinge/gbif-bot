import { gBifBaseApiUrlV2 } from "../../../lib/constants";
import { mapStyle, mapTileType } from "../../../lib/settings";
import { mapSize } from "../../../lib/constants";

type GenerateMapParams = {
  taxonKey: string | number;
  coords: {
    z: number;
    x: number;
    y: number;
  };
};

export const genOccMapLinkWithTaxonKey = ({
  taxonKey,
  coords: { z, x, y },
}: GenerateMapParams): string => {
  return `${gBifBaseApiUrlV2}/map/occurrence/density/${z}/${x}/${y}${mapSize}?style=${mapStyle}&bin=${mapTileType}&hexPerTile=100&srs=EPSG:4326&taxonKey=${taxonKey}`;
};
