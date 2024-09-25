import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../services/api-client";
import ms from "ms";

const apiClient = new APIClient<Category>("/categories");

export interface Category {
  id: string;
  attributes: {
    title: string;
    slug: string;
  };
}

function useCategories() {
  return useQuery({
    queryKey: ["category"],
    queryFn: () =>
      apiClient.getAll({
        params: { sort: "-totalMediaCount", "page[limit]": 20 },
      }),
    staleTime: ms("24h"),
  });
}

export { useCategories };
