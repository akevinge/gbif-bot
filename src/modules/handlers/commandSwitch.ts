import { Message } from "discord.js";
import { Command } from "../commands/commands";
import { helpHandler } from "./generalHandler";
import { infoHandler } from "./infoHandler";

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
    case "info":
      if (query) {
        infoHandler(message, query);
      } else {
        channel.send("Please provide a valid scientific name");
      }
      break;
    case "test":
      break;
  }
};
