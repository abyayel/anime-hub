import { create } from "zustand";

interface AnimeQuery {
  category?: string;
  status?: string;
  order?: string;
  searchText?: string;
}

interface AnimeQueryStore {
  animeQuery: AnimeQuery;
  setCategory: (category?: string) => void;
  setStatus: (status?: string) => void;
  setOrder: (order?: string) => void;
  setSearchText: (text?: string) => void;
}

const useAnimeQueryStore = create<AnimeQueryStore>((set) => ({
  animeQuery: {} as AnimeQuery,
  setCategory: (category) =>
    set((store) => ({ animeQuery: { ...store.animeQuery, category } })),
  setStatus: (status) =>
    set((store) => ({ animeQuery: { ...store.animeQuery, status } })),
  setOrder: (order) =>
    set((store) => ({ animeQuery: { ...store.animeQuery, order } })),
  setSearchText: (searchText) => set(() => ({ animeQuery: { searchText } })),
}));

export default useAnimeQueryStore;
