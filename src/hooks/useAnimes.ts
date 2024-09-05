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

function useAnime(selectedCategory: string | null, selectedOrder: string) {
  return useData<Anime>(
    "/anime",
    { params: { "filter[categories]": selectedCategory, sort: selectedOrder } },
    [selectedCategory, selectedOrder]
  );
}

export { useAnime };
