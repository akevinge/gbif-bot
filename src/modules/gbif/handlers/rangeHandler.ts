import { rangeEmbedBuilder } from "../embeds/range";
import { postUploadImage as imgurUpload } from "../../image-upload/imgur";
import { postUploadImage as imgBbUpload } from "../../image-upload/imgbb";
import { compositeOccMap } from "../maps/compositeOccMap";
import { getTaxonKeyBySciName } from "../species/matchSp";

export const rangeHandler: CommandHandlerWQuery = async (
  { channel },
  query
) => {
  const matchObj = await getTaxonKeyBySciName({ sciName: query });
  if (matchObj) {
    const { taxonKey, scientificName } = matchObj;
    const map = await compositeOccMap({ taxonKey });
    if (map) {
      const link =
        (await imgurUpload({
          image: (await map.getBase64Async("image/png")).slice(22),
          title: scientificName,
        })) ||
        (await imgBbUpload({
          image: (await map.getBase64Async("image/png")).slice(22),
          title: scientificName,
        }));

      if (link) {
        channel.send(rangeEmbedBuilder({ image: link, scientificName }));
      }
    } else {
      channel.send("An error occured during map generation");
    }
  }
};
