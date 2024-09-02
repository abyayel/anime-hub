import { SimpleGrid, Text } from "@chakra-ui/react";
import { useAnime } from "../hooks/useAnimes";
import AnimeCard from "./AnimeCard";
import AnimeCardSkeleton from "./AnimeCardSkeleton";

function AnimeGrid() {
  const { data: animes, error, isLoading } = useAnime();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        rowGap={"5"}
        columnGap={"3.5"}
        columns={{ base: 1, sm: 2, md: 3, xl: 4, "2xl": 5 }}
        padding={4}
      >
        {isLoading &&
          skeleton.map((id) => (
            <AnimeCardSkeleton key={id}></AnimeCardSkeleton>
          ))}
        {animes.map((anime) => (
          <AnimeCard key={anime.id} anime={anime}></AnimeCard>
        ))}
      </SimpleGrid>
    </>
  );
}

export default AnimeGrid;
