import Jimp from "jimp";

export const genWorldMap = () => {
  return Jimp.read("./images/EPSG-4326.png");
};
