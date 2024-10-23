import { useInfiniteQuery } from "@tanstack/react-query";
import { APIClient } from "../services/api-client";
import ms from "ms";
import useAnimeQueryStore from "../store";

const apiClient = new APIClient<Anime>("anime");

export interface Anime {
  id: string;
  attributes: {
    canonicalTitle: string;
    slug: string;
    synopsis: string;
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

function useAnimes() {
  const animeQuery = useAnimeQueryStore((store) => store.animeQuery);
  return useInfiniteQuery({
    queryKey: [animeQuery],
    queryFn: ({ pageParam = 0 }) =>
      apiClient.getAll({
        params: {
          "filter[categories]": animeQuery?.category,
          "filter[status]": animeQuery?.status,
          "filter[text]": animeQuery.searchText,
          sort: animeQuery?.order,
          "page[offset]": pageParam * 10,
          // "page[limit]":10
        },
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.links.next ? allPages.length + 1 : undefined,
    staleTime: ms("5m"),
    refetchOnWindowFocus: false,
  });
}

export { useAnimes };
