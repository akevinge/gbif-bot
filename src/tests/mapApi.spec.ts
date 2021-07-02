import { assert } from "chai";
import { compositeOccMap } from "../modules/gbif/maps/compositeOccMap";
import { getTaxonKeyBySciName } from "../modules/gbif/species/matchSp";
import { postUploadImage } from "../modules/image-upload/imgbb";

describe("Test GBIF Map API", () => {
  it("generate map link", (done) => {
    getTaxonKeyBySciName({ sciName: "atta texana" })
      .then((matchObj) => {
        if (matchObj) {
          return matchObj;
        } else {
          throw new Error("failed to get taxon key");
        }
      })
      .then(async (matchObj) => {
        const map = await compositeOccMap({ taxonKey: matchObj.taxonKey });
        if (map) {
          const link = await postUploadImage({
            image: map,
            title: matchObj.scientificName,
          });
          console.log(link);
          assert(typeof link === "string");
          done();
        }
      });
  });
});
