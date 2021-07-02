import { MessageEmbed } from "discord.js";
import { embedColor } from "../../../lib/settings";

type RangeEmbedBuilderParams = {
  image: string;
  scientificName: string;
};

export const rangeEmbedBuilder = ({
  image,
  scientificName,
}: RangeEmbedBuilderParams): MessageEmbed => {
  return new MessageEmbed()
    .setTitle(scientificName)
    .setColor(embedColor)
    .setImage(image)
    .setURL(image);
};
