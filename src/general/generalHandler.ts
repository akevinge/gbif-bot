import { Message } from "discord.js";
import { helpEmbedBuilder } from "./generalEmbeds";

export const helpHandler: CommandHandler = ({ channel }: Message) => {
  channel.send(helpEmbedBuilder());
};
