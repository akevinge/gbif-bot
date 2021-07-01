import { assert } from "chai";
import { genOccMapLinkWithTaxonKey } from "../modules/maps/genOccMapLink";

describe("Test GBIF Map API", () => {
  it("generate map link", (done) => {
    const link = genOccMapLinkWithTaxonKey({
      taxonKey: 1,
      coords: { z: 0, x: 0, y: 0 },
    });
    assert(typeof link === "string");
    assert(link.endsWith("1"));
    done();
  });
});
