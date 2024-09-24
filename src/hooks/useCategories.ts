import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../services/api-client";

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
    staleTime: 24 * 60 * 60 * 1000,
  });
}

export { useCategories };
