import { getTaxonKeyBySciName } from "../modules/species/matchSp";
import { expect, assert } from "chai";

describe("Test GBIF Species API", () => {
  it("Get TakonKey using /species/match", (done) => {
    getTaxonKeyBySciName({ sciName: "Solenopsis" })
      .then((match) => {
        if (match) {
          const { scientificName, taxonKey } = match;
          assert(typeof taxonKey === "number");
          assert(typeof scientificName === "string");
          done();
        }
      })
      .catch(() => done());
  });
});
