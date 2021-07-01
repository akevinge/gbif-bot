import { Message } from "discord.js";
import { imageEmbedSender, taxonImageEmbedBuilder } from "../embeds/image";
import { getTaxonKeyBySciName } from "../species/matchSp";
import { getTaxonMedia } from "../species/taxonMedia";

export const imageHandler = async (
  { channel, author }: Message,
  query: string
) => {
  const matchObj = await getTaxonKeyBySciName({ sciName: query });
  if (matchObj) {
    const { taxonKey, scientificName } = matchObj;
    const taxonMedias = await getTaxonMedia({ taxonKey });
    const taxonImageEmbds = taxonMedias.map((taxonMedia) =>
      taxonImageEmbedBuilder({ ...taxonMedia, sciName: scientificName })
    );
    imageEmbedSender({ channel, author, embeds: taxonImageEmbds });
  }
};
