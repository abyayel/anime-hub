import { useData } from "./useData";

export interface Anime {
  id: string;
  attributes: {
    canonicalTitle: string;
    averageRating: string;
    posterImage: {
      tiny: string;
      small: string;
      medium: string;
      large: string;
      original: string;
    };
  };
}

function useAnime() {
  return useData<Anime>("/anime");
}

export { useAnime };
