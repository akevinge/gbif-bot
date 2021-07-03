import { Browser, launch } from "puppeteer";
import { isProduction } from "../lib/constants";

const browserOptions = isProduction
  ? {
      headless: true,
      executablePath: "/usr/bin/chromium-browser",
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    }
  : { headless: true };

class PupBrowser {
  browser: Browser | undefined;

  async initBrowser() {
    this.browser = await launch(browserOptions);
    if (this.browser) {
      console.log("Browser running");
    }
  }
}

export const pupBrowser = new PupBrowser();
