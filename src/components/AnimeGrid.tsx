import { SimpleGrid, Text } from "@chakra-ui/react";
import { useAnime } from "../hooks/useAnimes";
import AnimeCard from "./AnimeCard";
import AnimeCardSkeleton from "./AnimeCardSkeleton";
import AnimeCardContainer from "./AnimeCardContainer";

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
            <AnimeCardContainer>
              <AnimeCardSkeleton key={id} />
            </AnimeCardContainer>
          ))}
        {animes.map((anime) => (
          <AnimeCardContainer>
            <AnimeCard key={anime.id} anime={anime} />
          </AnimeCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default AnimeGrid;
