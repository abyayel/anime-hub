import { useInfiniteQuery } from "@tanstack/react-query";
import { APIClient } from "../services/api-client";
import ms from "ms";
import useAnimeQueryStore from "../store";
import { Anime } from "../entities/Anime";

const apiClient = new APIClient<Anime>("anime");

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
