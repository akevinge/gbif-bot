import { Message } from "discord.js";
import { helpEmbed } from "../embeds/general";

export const helpHandler: CommandHandler = ({ channel }: Message) => {
  channel.send(helpEmbed());
};
