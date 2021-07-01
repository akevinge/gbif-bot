import { config as dotEnvConfig } from "dotenv";
import Jimp from "jimp";
dotEnvConfig();
import { runBot } from "./client";
import { mapData } from "./modules/maps/MapData";
mapData.generateMapData().then(() => {
  console.log(
    mapData.easternHemisphereMapData instanceof Jimp &&
      mapData.westernHemisphereMapData instanceof Jimp
      ? "Sucessfully generated map data"
      : "Failed to generate map data"
  );
});
runBot();
