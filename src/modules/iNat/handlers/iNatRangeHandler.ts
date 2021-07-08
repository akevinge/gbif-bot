import { compToEpsg3857 } from "../maps/compToEpsg3857";
import { genEpsg3857 } from "../maps/genEpsg3857";
import { genMapWithTaxonId } from "../maps/genMapWithTaxonId";
import { iNatTaxaSearch } from "../search/iNatTaxaSearch";
import { postUploadImage as imgbbUpload } from "../../image-upload/imgbb";
import { postUploadImage as imgurUpload } from "../../image-upload/imgur";
import { iNatRangeEmbedBuilder } from "../embeds/iNatRangeEmbedBuilder";
import { iNatWebTaxaUrl } from "../../../lib/constants";

export const iNatRangeHandler: CommandHandlerWQuery = async (
  { channel },
  query
) => {
  const searchObj = await iNatTaxaSearch({ query });
  if (searchObj && searchObj.results?.length) {
    const taxonId = searchObj.results[0]?.record?.id;
    const sciName = searchObj.results[0]?.record?.name;

    if (taxonId) {
      const [worldmap, observationmap] = await Promise.all([
        genEpsg3857(),
        genMapWithTaxonId({ taxonId, mapType: "points" }),
      ]).catch((err) => [null, null]);

      if (worldmap && observationmap) {
        const combinedMapBase64 = (
          await (
            await compToEpsg3857({ map: observationmap, epsg: worldmap })
          ).getBase64Async("image/png")
        ).slice(22);

        const link =
          (await imgurUpload({ image: combinedMapBase64, title: sciName })) ||
          (await imgbbUpload({ image: combinedMapBase64, title: sciName }));
        if (link) {
          channel.send(
            iNatRangeEmbedBuilder({
              imgLink: link,
              title: sciName,
              webLink: `${iNatWebTaxaUrl}/${taxonId}`,
            })
          );
        } else {
          channel.send("Internal error: could not upload image");
        }
      } else {
        channel.send("Internal error could not generate worldmap or heatmap");
      }
    }
  } else {
    channel.send("Could not find data matching your query");
  }
};
