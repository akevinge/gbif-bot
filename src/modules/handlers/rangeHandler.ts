import { generateOccMap } from "../maps/generateOccurrenceMap";

export const rangeHandler: CommandHandlerWQuery = ({}, query) => {
  generateOccMap({ taxonKey: 1 });
};
