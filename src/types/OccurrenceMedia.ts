export type OccurrenceMediaResult = {
  scientificName: string;
  taxonomicStatus: string;
  verbatimEventDate: string;
  verbatimLocality: string;
  occurrenceID: string;
  media: {
    type: string;
    format: string;
    references: string;
    identifier: string;
  }[];
};

export type OccurrenceEmbedData = {
  references: string;
  identifier: string;
  scientificName: string;
  verbatimEventDate: string;
  verbatimLocality: string;
  taxonomicStatus: string;
  occurrenceID: string;
};
