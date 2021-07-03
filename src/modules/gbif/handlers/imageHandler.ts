import { Message } from "discord.js";
import { OccurrenceEmbedData } from "../../../types/gbif/OccurrenceMedia";
import { TaxonEmbedData } from "../../../types/gbif/TaxonMedia";
import {
  imageEmbedSender,
  occurrenceImageEmbedBuilder,
  taxonImageEmbedBuilder,
} from "../embeds/image";
import { getOccurrenceMedia } from "../occurances/occurrenceMedia";
import { getTaxonKeyBySciName } from "../species/matchSp";
import { getTaxonMedia } from "../species/taxonMedia";

export const imageHandler: CommandHandlerWQuery = async (
  { channel, author }: Message,
  query: string
) => {
  const matchObj = await getTaxonKeyBySciName({ sciName: query });
  if (matchObj) {
    const { taxonKey, scientificName } = matchObj;

    const [taxonMedia, occurrenceMedia] = await Promise.all<
      TaxonEmbedData[],
      OccurrenceEmbedData[]
    >([getTaxonMedia({ taxonKey }), getOccurrenceMedia({ taxonKey })]);

    const taxonImageEmbds = taxonMedia.map((taxonMedia) =>
      taxonImageEmbedBuilder({ ...taxonMedia, sciName: scientificName })
    );

    const occurrenceImageEmbeds = occurrenceMedia.map((occMedia) =>
      occurrenceImageEmbedBuilder(occMedia)
    );

    imageEmbedSender({
      channel,
      author,
      embeds: [...taxonImageEmbds, ...occurrenceImageEmbeds],
    });
  }
};
