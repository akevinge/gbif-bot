import { rangeEmbedBuilder } from "../embeds/range";
import { postUploadImage } from "../imgur/imageUpload";
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
      const link = await postUploadImage({ image: map, title: scientificName });
      if (link) {
        channel.send(rangeEmbedBuilder({ image: link, scientificName }));
      }
    } else {
      channel.send("An error occured during map generation");
    }
  }
};
