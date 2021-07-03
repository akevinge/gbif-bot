import { Message } from "discord.js";
import { helpHandler } from "./generalHandler";
import { imageHandler } from "../modules/gbif/handlers/imageHandler";
import { rangeHandler } from "../modules/gbif/handlers/rangeHandler";
import { iNatImageHandler } from "../modules/iNat/handlers/iNatImageHandler";

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
  const invalidQueryMsg = "Please provide a valid scientific name";
  switch (command) {
    case "help":
      helpHandler(message);
      break;
    case "image":
      if (query) {
        imageHandler(message, query);
      } else {
        channel.send(invalidQueryMsg);
      }
      break;
    case "range":
      if (query) {
        rangeHandler(message, query);
      } else {
        channel.send(invalidQueryMsg);
      }
      break;
    case "image2":
      if (query) {
        iNatImageHandler(message, query);
      } else {
        channel.send(invalidQueryMsg);
      }
      break;
  }
};
