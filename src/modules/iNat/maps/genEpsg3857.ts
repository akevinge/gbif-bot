import Jimp from "jimp";

export const genEpsg3857 = () => {
  return Jimp.read("./images/EPSG-3857.png").catch((err) => null);
};
