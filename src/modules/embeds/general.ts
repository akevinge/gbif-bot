import { MessageEmbed } from "discord.js";
import { commands } from "../commands/commands";

export const helpEmbed = (): MessageEmbed => {
  const embed = new MessageEmbed().setTitle("Commands: ");
  for (let c of commands.slice(1)) {
    embed.addField(c.name, c.function);
  }
  return embed;
};
