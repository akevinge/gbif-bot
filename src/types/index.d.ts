type CommandHandlerWQuery = (
  msg: import("discord.js").Message,
  query: string
) => void;

type CommandHandler = (msg: import("discord.js").Message) => void;
