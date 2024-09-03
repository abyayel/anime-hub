import { useData } from "./useData";

interface Categories {
  id: string;
  attributes: {
    title: string;
    image: {
      tiny: string;
      small: string;
      medium: string;
      large: string;
      original: string;
    };
  };
}

function useCategories() {
  return useData<Categories>("/categories");
}

export { useCategories };
