export const commands = [
  {
    name: "help",
    function: "help",
  },
  {
    name: "test",
    function: "test",
  },
  { name: "info", function: "return all taxon data" },
];

export const commandNames = commands.map(({ name }) => name);

export type Command = "help" | "test" | "info";
