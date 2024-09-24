import { useQuery } from "@tanstack/react-query";
import { AnimeQuery } from "../App";
import apiClient, { FetchResponse } from "../services/api-client";

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
  return useQuery({
    queryKey: ["animes", animeQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Anime>>("/anime", {
          params: {
            "filter[categories]": animeQuery?.category,
            "filter[status]": animeQuery?.status,
            "filter[text]": animeQuery.searchText,
            sort: animeQuery?.order,
          },
        })
        .then((response) => response.data.data),
    gcTime: 5 * 60 * 1000,
    staleTime: 2 * 60 * 1000, //5minutes
    refetchOnWindowFocus: false,
  });
}

export { useAnime };
