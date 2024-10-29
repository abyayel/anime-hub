import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../services/api-client";
import { Category } from "../entities/Category";
import ms from "ms";

function useRelatedCategories(animeId: string) {
  const apiClient = new APIClient<Category>(
    "/anime/" + animeId + "/categories"
  );

  return useQuery({
    queryKey: [animeId],
    queryFn: () =>
      apiClient.getAll({
        params: { sort: "-totalMediaCount" },
      }),
    staleTime: ms("24h"),
  });
}

export { useRelatedCategories };
