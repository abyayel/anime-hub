import { SimpleGrid, Text } from "@chakra-ui/react";
import { useAnime } from "../hooks/useAnimes";
import AnimeCard from "./AnimeCard";
import AnimeCardSkeleton from "./AnimeCardSkeleton";
import AnimeCardContainer from "./AnimeCardContainer";

function AnimeGrid() {
  const { data: animes, error, isLoading } = useAnime();
  const skeleton = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        rowGap={"5"}
        columnGap={"3.5"}
        columns={{ base: 1, sm: 2, md: 3, "2xl": 5 }}
      >
        {isLoading &&
          skeleton.map((id) => (
            <AnimeCardContainer key={id}>
              <AnimeCardSkeleton />
            </AnimeCardContainer>
          ))}
        {animes.map((anime) => (
          <AnimeCardContainer key={anime.id}>
            <AnimeCard anime={anime} />
          </AnimeCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default AnimeGrid;
