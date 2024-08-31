import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Anime {
  id: string;
  attributes: {
    canonicalTitle: string;
  };
}

interface FetchAnimesResponse {
  data: Anime[];
}

function AnimeGrid() {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [error, setError] = useState(" ");
  useEffect(() => {
    apiClient
      .get<FetchAnimesResponse>("/anime")
      .then((response) => setAnimes(response.data.data))
      .catch((error) => {
        setError(error.message);
      });
  }, []);
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {animes.map((anime) => (
          <li>{anime.attributes.canonicalTitle}</li>
        ))}
      </ul>
    </>
  );
}

export default AnimeGrid;
