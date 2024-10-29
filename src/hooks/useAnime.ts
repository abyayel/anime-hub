import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../services/api-client";
import { Anime } from "../entities/Anime";
const apiClient = new APIClient<Anime>("anime");

const useAnime = (id: string) => {
  return useQuery({
    queryKey: ["anime", id],
    queryFn: () => apiClient.get(id),
  });
};

export { useAnime };
