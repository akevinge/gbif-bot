import { Message } from "discord.js";
import { helpEmbed } from "../embeds/general";

export const helpHandler = ({ channel }: Message) => {
  channel.send(helpEmbed());
};
