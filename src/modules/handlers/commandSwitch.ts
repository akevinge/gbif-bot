import { Message } from "discord.js";
import { Command } from "../commands/commands";
import { helpHandler } from "./generalHandler";
import { imageHandler } from "./imageHandler";
import { rangeHandler } from "./rangeHandler";

export const commandSwitch = ({
  message: { channel },
  message,
  command,
  query,
}: {
  message: Message;
  command: Command;
  query: string | undefined;
}) => {
  switch (command) {
    case "help":
      helpHandler(message);
      break;
    case "image":
      if (query) {
        imageHandler(message, query);
      } else {
        channel.send("Please provide a valid scientific name");
      }
      break;
    case "range":
      if (query) {
        rangeHandler(message, query);
      } else {
        channel.send("Please provide a valid scientific name");
      }
      break;
  }
};
