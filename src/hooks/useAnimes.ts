import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Anime {
  id: string;
  attributes: {
    canonicalTitle: string;
  };
}

interface FetchAnimesResponse {
  data: Anime[];
}

function useAnime() {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [error, setError] = useState(" ");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchAnimesResponse>("/anime", { signal: controller.signal })
      .then((response) => {
        setAnimes(response.data.data);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });

    return () => controller.abort();
  }, []);

  return { animes, error };
}

export { useAnime };
