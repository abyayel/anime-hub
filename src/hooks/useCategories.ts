import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";

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
      apiClient
        .get<FetchResponse<Category>>("/categories", {
          params: { sort: "-totalMediaCount", "page[limit]": 20 },
        })
        .then((response) => response.data.data),
    staleTime: 24 * 60 * 60 * 1000,
  });
}

export { useCategories };
