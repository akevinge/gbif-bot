import { getTaxonKeyBySciName } from "../modules/gbif/species/matchSp";
import { assert, expect } from "chai";
import { getTaxonMedia } from "../modules/gbif/species/taxonMedia";

describe("Test GBIF Species API", () => {
  it("Get TakonKey using /species/match", (done) => {
    getTaxonKeyBySciName({ sciName: "Camponotus discolor" })
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

  it("Get taxon media using /species/{taxonKey}/media and /match for taxonKey", (done) => {
    getTaxonKeyBySciName({ sciName: "Camponotus" })
      .then((match) => {
        if (match) {
          const { taxonKey, scientificName } = match;
          getTaxonMedia({ taxonKey }).then((medias) => {
            assert.isArray(medias);
            assert(medias.length > 0);
            done();
          });
        }
      })
      .catch(() => done());
  });
});
