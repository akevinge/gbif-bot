import { MessageEmbed } from "discord.js";
import { embedColor } from "../lib/settings";

export const helpEmbedBuilder = (): MessageEmbed => {
  const embed = new MessageEmbed()
    .setTitle("Commands")
    .setColor(embedColor)
    .addFields(
      {
        name: ".image",
        value:
          "Displays taxonomic and occurance images for the given scientific name",
      },
      {
        name: ".range",
        value: "Displays a distribution map for the given scientific name",
      },
      {
        name: ".image2",
        value:
          "Displays iNaturalist occurrence images for the given scientific name",
      },
      {
        name: ".range2",
        value:
          "Displays iNaturalist observation map for the given scientific name",
      }
    );

  return embed;
};
