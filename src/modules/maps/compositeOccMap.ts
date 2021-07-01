import { genOccMapLinkWithTaxonKey } from "./genOccMapLink";
import Jimp from "jimp";
import { pxMapSize } from "../../lib/constants";
import { genWorldMap } from "./genWorldMap";

const genMapLinks = ({ taxonKey }: { taxonKey: string | number }): string[] => {
  return [
    genOccMapLinkWithTaxonKey({
      taxonKey,
      coords: { z: 0, x: 1, y: 0 },
    }),
    genOccMapLinkWithTaxonKey({
      taxonKey,
      coords: { z: 0, x: 0, y: 0 },
    }),
  ];
};

const readMapLinks = (west: string, east: string) => {
  return Promise.all<Jimp | undefined, Jimp | undefined>([
    Jimp.read(west).catch(() => undefined),
    Jimp.read(east).catch(() => undefined),
  ]);
};

export const compositeOccMap = async ({
  taxonKey,
}: {
  taxonKey: string | number;
}): Promise<Jimp | undefined> => {
  const worldMap = await genWorldMap();
  if (worldMap) {
    const [eastLink, westLink] = genMapLinks({ taxonKey });
    const [occWestMap, occEastMap] = await readMapLinks(westLink, eastLink);

    if (occWestMap) {
      worldMap.composite(occWestMap, 0, 0);
    }
    if (occEastMap) {
      worldMap.composite(occEastMap, pxMapSize, 0);
    }
    return worldMap;
  }
};
