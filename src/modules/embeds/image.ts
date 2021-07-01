import { Message, MessageEmbed } from "discord.js";
import { embedPagination } from "./pagination";
import { TaxonEmbedData } from "../../types/TaxonMedia";
import { OccurrenceEmbedData } from "../../types/OccurrenceMedia";
import { embedColor } from "../../lib/settings";

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

export const occurrenceImageEmbedBuilder = ({
  identifier,
  references,
  scientificName,
  verbatimLocality,
  verbatimEventDate,
  occurrenceID,
  taxonomicStatus,
}: OccurrenceEmbedData) => {
  return new MessageEmbed()
    .setTitle("Occurrence Image")
    .setColor(embedColor)
    .setDescription(scientificName)
    .setURL(occurrenceID)
    .setImage(identifier)
    .addField("Location", verbatimLocality)
    .addField("Date", verbatimEventDate)
    .addField("Status", taxonomicStatus);
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
