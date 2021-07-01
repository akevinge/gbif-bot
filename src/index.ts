import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();
import { runBot } from "./client";
import { generateCachedMapData } from "./modules/maps/MapData";
generateCachedMapData();
runBot();
