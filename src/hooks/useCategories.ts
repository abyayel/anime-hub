import { useData } from "./useData";

interface Categories {
  id: string;
  attributes: {
    title: string;
    slug: string;
  };
}

function useCategories() {
  return useData<Categories>("/categories");
}

export { useCategories };