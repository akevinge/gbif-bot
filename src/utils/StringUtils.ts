export const formatGenusName = (str: string) => {
  return `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`;
};

export const formatSpeciesName = (str: string) => {
  return str.toLowerCase();
};

export const formatGenusAndSpeciesName = (str: string) => {
  return str
    .split("")
    .map((s, i) => (i === 0 ? formatGenusName(s) : formatSpeciesName(s)))
    .join("");
};
