import Jimp from "jimp";

export const compToEpsg3857 = async ({
  map,
  epsg,
}: {
  map: Jimp;
  epsg: Jimp;
}) => {
  return epsg.composite(map, 0, 0);
};
