import { Message } from "discord.js";
import { helpEmbedBuilder } from "../embeds/general";

export const helpHandler: CommandHandler = ({ channel }: Message) => {
  channel.send(helpEmbedBuilder());
};
