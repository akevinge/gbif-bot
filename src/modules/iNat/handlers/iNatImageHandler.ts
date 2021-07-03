import { embedPagination } from "../../gbif/embeds/pagination";
import { iNatImageEmbedBuilder } from "../embeds/iNatImageEmbedBuilder";
import { iNatTaxaSearch } from "../search/iNatTaxaSearch";

export const iNatImageHandler: CommandHandlerWQuery = async (
  { channel, author },
  query
) => {
  const searchData = await iNatTaxaSearch({ query });

  if (searchData && searchData.results.length > 0) {
    const { results } = searchData;
    const {
      record: { name, taxon_photos },
    } = results[0];

    const imageUrls = taxon_photos.map(
      ({ photo: { medium_url } }) => medium_url
    );
    const embeds = iNatImageEmbedBuilder({ name, imageUrls: imageUrls });

    embedPagination({ channel, author }, embeds);
  } else {
    channel.send(
      "Could not find data for your query, please check to make sure you spelled it correctly"
    );
  }
};
