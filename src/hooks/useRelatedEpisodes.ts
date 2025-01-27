import { useInfiniteQuery } from "@tanstack/react-query";
import { Episode } from "../entities/Episode";
import { APIClient } from "../services/api-client";
import ms from "ms";

const useRelatedEpisodes = (animeId: string) => {
  const apiClient = new APIClient<Episode>("/anime/" + animeId + "/episodes");
  return useInfiniteQuery({
    queryKey: ["relatedepisodes", animeId],
    queryFn: ({ pageParam = 0 }) =>
      apiClient.getAll({
        params: {
          "page[offset]": pageParam * 10,
          // "page[limit]":10
        },
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.links.next ? allPages.length + 1 : undefined,
    staleTime: ms("24h"),
    refetchOnWindowFocus: false,
  });
};

export { useRelatedEpisodes };
