import { MessageEmbed } from "discord.js";
import { embedColor } from "../../../lib/settings";

const embedBuilder = (name: string, imageUrl: string) => {
  return new MessageEmbed()
    .setTitle(name)
    .setImage(imageUrl)
    .setColor(embedColor);
};

export const iNatImageEmbedBuilder = ({
  name,
  imageUrls,
}: {
  name: string;
  imageUrls: string[];
}): MessageEmbed[] => {
  return imageUrls.map((url) => embedBuilder(name, url));
};
