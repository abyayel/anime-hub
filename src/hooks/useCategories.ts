import { useData } from "./useData";

export interface Category {
  id: string;
  attributes: {
    title: string;
    slug: string;
  };
}

function useCategories() {
  const {
    data: data1,
    error: error1,
    isLoading: isLoading1,
  } = useData<Category>("/categories", {
    params: { sort: "-totalMediaCount", "page[limit]": 20, "page[offset]": 0 },
  });
  const {
    data: data2,
    error: error2,
    isLoading: isLoading2,
  } = useData<Category>("/categories", {
    params: { sort: "-totalMediaCount", "page[limit]": 20, "page[offset]": 20 },
  });

  const data = data1.concat(data2);
  const error = error1 && error2;
  const isLoading = isLoading1 && isLoading2;

  return { data, isLoading, error };
}

export { useCategories };
