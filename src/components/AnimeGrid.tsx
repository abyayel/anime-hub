import { Text } from "@chakra-ui/react";
import { useAnime } from "../hooks/useAnimes";

function AnimeGrid() {
  const { animes, error } = useAnime();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {animes.map((anime) => (
          <li key={anime.id}>{anime.attributes.canonicalTitle}</li>
        ))}
      </ul>
    </>
  );
}

export default AnimeGrid;
