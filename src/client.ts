import { Client } from "discord.js";
import { botToken } from "./lib/constants";
import { prefix } from "./lib/settings";
import { Command, commandNames } from "./modules/commands/commands";
import { commandSwitch } from "./modules/handlers/commandSwitch";

const client = new Client();
client.on("message", (message) => {
  const { content, channel } = message;
  if (content.startsWith(prefix)) {
    const command = content
      .substring(1, content.indexOf(" ") + 1 || content.length + 1)
      .trim();
    const query =
      content.indexOf(" ") !== -1
        ? content.slice(content.indexOf(" "))
        : undefined;
    if (commandNames.includes(command)) {
      commandSwitch({ message, command: command as Command, query });
    } else {
      channel.send("Please provide a valid command");
    }
  }
});

client.on("ready", () => {
  console.log("bot running");
});

export const runBot = () => client.login(botToken);
