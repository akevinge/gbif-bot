import { MessageEmbed } from "discord.js";

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
    .setImage(image)
    .setURL(image);
};
