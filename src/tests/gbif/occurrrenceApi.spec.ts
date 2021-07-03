import { config } from "dotenv";
config();
import { getTaxonKeyBySciName } from "../../modules/gbif/species/matchSp";
import { assert } from "chai";
import { getOccurrenceMedia } from "../../modules/gbif/occurances/occurrenceMedia";

describe("Test GBIF Occurrrence API", () => {
  it("Get taxon media using /occurrence/search and /species/match for taxonKey", (done) => {
    getTaxonKeyBySciName({ sciName: "Camponotus discolor" })
      .then((match) => {
        if (match) {
          const { taxonKey, scientificName } = match;
          getOccurrenceMedia({ taxonKey }).then((media) => {
            assert.isArray(media);
            done();
          });
        }
      })
      .catch(() => done());
  });
});
