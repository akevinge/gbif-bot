type CommandHandlerWQuery = (
  msg: import("discord.js").Message,
  query: string
) => void;

type CommandHandler = (msg: import("discord.js").Message) => void;

type Command = typeof import("./Command").commandArray[number];
