import { launch } from "puppeteer";
import { iNatWebTaxaUrl, isProduction } from "../../../lib/constants";
import { pupBrowser } from "../../../general/PupBrowser";

export const taxaMapScreenshot = async ({
  taxonId,
}: {
  taxonId: string;
}): Promise<string | undefined | Buffer> => {
  const browser = pupBrowser.browser;
  if (browser) {
    const page = await browser.newPage();
    await page.goto(`${iNatWebTaxaUrl}/${taxonId}`);
    try {
      await page.waitForSelector("[href='#map-tab']", { timeout: 5000 });
    } catch {
      return;
    }
    try {
      await page.click("[href='#map-tab']").catch(() => null);
    } catch {
      return;
    }
    try {
      await page.waitForSelector(".gm-control-active", { timeout: 5000 });
    } catch {
      return;
    }
    try {
      await page.click(".gm-control-active", {
        clickCount: 1,
      });
    } catch {
      return;
    }
    try {
      return (await page.screenshot({ encoding: "base64" })) || undefined;
    } catch {
      return;
    }
  } else {
    pupBrowser
      .initBrowser()
      .then(() => taxaMapScreenshot({ taxonId }))
      .catch(() => {
        throw new Error("Browser uninitiated");
      });
  }
};
