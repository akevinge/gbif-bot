import { Message } from "discord.js";
import { getTaxonKeyBySciName } from "../species/matchSp";

export const infoHandler = async ({ channel }: Message, query: string) => {
  const data = await getTaxonKeyBySciName({ sciName: query });
  console.log(data);
  if (data) {
    const { taxonKey, scientificName } = data;
    console.log({ taxonKey, scientificName });
  }
};
