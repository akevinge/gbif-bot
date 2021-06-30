export const convertToQueryString = (str: string) => {
  return str.replace(/ /g, "%20");
};
