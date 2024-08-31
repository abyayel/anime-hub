import { SimpleGrid, Text } from "@chakra-ui/react";
import { useAnime } from "../hooks/useAnimes";
import AnimeCard from "./AnimeCard";

function AnimeGrid() {
  const { animes, error } = useAnime();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        rowGap={"5"}
        columnGap={"3.5"}
        columns={{ sm: 1, md: 2, lg: 3 }}
        padding={4}
      >
        {animes.map((anime) => (
          <AnimeCard key={anime.id} anime={anime}></AnimeCard>
        ))}
      </SimpleGrid>
    </>
  );
}

export default AnimeGrid;
