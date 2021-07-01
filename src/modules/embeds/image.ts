import { Message, MessageEmbed } from "discord.js";
import { embedPagination } from "./pagination";
import { TaxonEmbedData } from "../../ts/types/TaxonMediaResult";

export const taxonImageEmbedBuilder = ({
  identifier,
  references,
}: TaxonEmbedData) => {
  return new MessageEmbed()
    .setTitle("Taxonomic Image")
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
