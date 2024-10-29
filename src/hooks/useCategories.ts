import { useInfiniteQuery } from "@tanstack/react-query";
import { APIClient } from "../services/api-client";
import ms from "ms";
import { Category } from "../entities/Category";

const apiClient = new APIClient<Category>("/categories");

function useCategories() {
  return useInfiniteQuery({
    queryKey: ["category"],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          sort: "-totalMediaCount",
          "page[limit]": 20,
          "page[offset]": pageParam * 20,
        },
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.links.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"),
  });
}

export { useCategories };
