export const commands = [
  {
    name: "help",
    function: "help",
  },
  {
    name: "image",
    function:
      "Returns taxonomic and occurance images for the given scientific name",
  },
  {
    name: "range",
    function: "Displays a distribution map for the given scientific name",
  },
];

export const commandNames = commands.map(({ name }) => name);

export type Command = "help" | "image" | "range";
