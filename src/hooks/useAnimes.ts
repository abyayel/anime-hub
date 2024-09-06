import { AnimeQuery } from "../App";
import { useData } from "./useData";

export interface Anime {
  id: string;
  attributes: {
    canonicalTitle: string;
    averageRating: string;
    ageRating: string;
    posterImage: {
      tiny: string;
      small: string;
      medium: string;
      large: string;
      original: string;
    };
  };
}

function useAnime(animeQuery: AnimeQuery) {
  return useData<Anime>(
    "/anime",
    {
      params: {
        "filter[categories]": animeQuery?.category,
        "filter[status]": animeQuery?.status,
        "filter[text]": animeQuery.searchText,
        sort: animeQuery?.order,
      },
    },
    [animeQuery]
  );
}

export { useAnime };
