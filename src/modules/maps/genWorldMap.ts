import Jimp from "jimp";

export const genWorldMap = () => {
  return Jimp.read("./images/worldmap.png");
};
