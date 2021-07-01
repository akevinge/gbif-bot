import { assert } from "chai";
import { generateMapLinkWithTaxonKey } from "../modules/maps/generateMapLink";

describe("Test GBIF Map API", () => {
  it("generate map link", (done) => {
    const link = generateMapLinkWithTaxonKey({
      taxonKey: 1,
      coords: { z: 0, x: 0, y: 0 },
    });
    assert(typeof link === "string");
    assert(link.endsWith("1"));
    done();
  });
});
