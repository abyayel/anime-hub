import { SimpleGrid, Text } from "@chakra-ui/react";
import { useAnime } from "../hooks/useAnimes";
import AnimeCard from "./AnimeCard";

function AnimeGrid() {
  const { data: animes, error } = useAnime();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        rowGap={"5"}
        columnGap={"3.5"}
        columns={{ base: 1, sm: 2, md: 3, xl: 4, "2xl": 5 }}
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
