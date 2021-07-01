import { Message, MessageEmbed } from "discord.js";
import { embedPagination } from "./pagination";
import { TaxonEmbedData } from "../../ts/types/TaxonMediaResult";

export const taxonImageEmbedBuilder = ({
  identifier,
  references,
  sciName,
}: TaxonEmbedData & { sciName: string }) => {
  return new MessageEmbed()
    .setTitle("Taxonomic Image")
    .setDescription(sciName)
    .setURL(references)
    .setImage(identifier);
};

export const imageEmbedSender = ({
  channel,
  author,
  embeds,
}: Pick<Message, "channel" | "author"> & {
  embeds: MessageEmbed[];
}) => {
  embedPagination({ channel, author }, embeds);
};
