import { Client } from "discord.js";
import { botToken, isProduction } from "./lib/constants";
import { prefix } from "./lib/settings";
import { Command, commandNames } from "./modules/commands/commands";
import { commandSwitch } from "./modules/handlers/commandSwitch";
import { formatGenusAndSpeciesName } from "./utils";

const client = new Client();
client.on("message", (message) => {
  const { content, channel } = message;
  if (content.startsWith(prefix)) {
    const command = content
      .substring(1, content.indexOf(" ") + 1 || content.length + 1)
      .trim();
    const query =
      content.indexOf(" ") !== -1
        ? formatGenusAndSpeciesName(content.slice(content.indexOf(" ") + 1))
        : undefined;
    if (commandNames.includes(command)) {
      commandSwitch({ message, command: command as Command, query });
    } else {
      channel.send("Please provide a valid command");
    }
  }
});

client.on("ready", () => {
  client.user?.setPresence({
    activity: {
      name: ".help",
      type: "WATCHING",
    },
    status: "online",
  });
  if (isProduction) {
    client.user?.setAvatar("https://unsplash.com/photos/9a9Xu9lXA7A");
  }
  console.log("Bot running");
});

export const runBot = () => client.login(botToken);
