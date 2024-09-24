import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";
import { Category } from "./useCategories";

function useRelatedCategories(animeId: string) {
  return useQuery({
    queryKey: [animeId],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Category>>("/anime/" + animeId + "/categories", {
          params: { sort: "-totalMediaCount" },
        })
        .then((response) => response.data.data),
  });
}

export { useRelatedCategories };
