import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();
import { runBot } from "./client";
runBot();
import { pupBrowser } from "./general/PupBrowser";
pupBrowser.initBrowser();
