import { MessageEmbed } from "discord.js";
import { embedColor } from "../../lib/settings";
import { commands } from "../commands/commands";

export const helpEmbedBuilder = (): MessageEmbed => {
  const embed = new MessageEmbed().setTitle("Commands").setColor(embedColor);
  for (let c of commands.slice(1)) {
    embed.addField(c.name, c.function);
  }
  return embed;
};
