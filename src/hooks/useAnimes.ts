import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../services/api-client";

const apiClient = new APIClient<Anime>("anime");

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

export interface AnimeQuery {
  category: string | null;
  status: string | null;
  order: string | null;
  searchText: string | null;
}

function useAnime(animeQuery: AnimeQuery) {
  return useQuery({
    queryKey: [animeQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          "filter[categories]": animeQuery?.category,
          "filter[status]": animeQuery?.status,
          "filter[text]": animeQuery.searchText,
          sort: animeQuery?.order,
        },
      }),
    staleTime: 5 * 60 * 1000, //5minutes
    refetchOnWindowFocus: false,
  });
}

export { useAnime };
