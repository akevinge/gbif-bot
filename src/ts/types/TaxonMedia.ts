export type TaxonMediaResult = {
  type: string;
  format: string;
  identifier: string;
  references: string;
};

export type TaxonEmbedData = Pick<
  TaxonMediaResult,
  "identifier" | "references"
>;
