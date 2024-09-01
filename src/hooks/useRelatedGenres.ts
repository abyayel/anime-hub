import { useData } from "./useData";

export interface Genre {
  id: string;
  attributes: {
    name: string;
  };
}

function useRelatedGeneres(animeId: string) {
  return useData<Genre>("/anime/" + animeId + "/genres");
}

export { useRelatedGeneres };
