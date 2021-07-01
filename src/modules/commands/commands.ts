export const commands = [
  {
    name: "help",
    function: "help",
  },
  {
    name: "image",
    function: "returns taxonomic and occurance images",
  },
  { name: "range", function: "return range map" },
];

export const commandNames = commands.map(({ name }) => name);

export type Command = "help" | "image" | "range";
