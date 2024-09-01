import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Genre {
  id: string;
  attributes: {
    name: string;
  };
}

interface FetchGenresResponse {
  data: Genre[];
}

function useRelatedGeneres(animeId: string) {
  const [genreList, setGenreList] = useState<Genre[]>([]);

  useEffect(() => {
    apiClient
      .get<FetchGenresResponse>("/anime/" + animeId + "/genres")
      .then((response) => {
        setGenreList(response.data.data);
      });
  }, []);
  return { genreList };
}

export { useRelatedGeneres };
