export type iNatSearchResult = {
  score: number;
  type: string;
  matches: string[];
  record: {
    id: string;
    rank: string;
    name: string;
    default_photo: {
      id: string;
      url: string;
      square_url: string;
      medium_url: string;
    };
    taxon_photos: {
      taxon_id: string;
      photo: {
        url: string;
        medium_url: string;
      };
    }[];
  };
};

export type iNatSearchData = {
  results: iNatSearchResult[];
};
