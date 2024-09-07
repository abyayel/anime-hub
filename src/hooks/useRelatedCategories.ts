import { useData } from "./useData";
import { Category } from "./useCategories";

function useRelatedCategories(animeId: string) {
  return useData<Category>("/anime/" + animeId + "/categories", {
    params: { sort: "-totalMediaCount" },
  });
}

export { useRelatedCategories };
