import { MessageEmbed } from "discord.js";
import { embedColor } from "../../../lib/settings";

export const iNatRangeEmbedBuilder = ({
  imgLink,
  title,
  webLink,
}: {
  imgLink: string;
  title: string;
  webLink: string;
}) => {
  return new MessageEmbed()
    .setTitle(title)
    .setImage(imgLink)
    .setColor(embedColor)
    .setURL(webLink);
};
