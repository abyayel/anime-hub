import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useAnime } from "../hooks/useAnimes";
import AnimeCard from "./AnimeCard";
import AnimeCardSkeleton from "./AnimeCardSkeleton";
import AnimeCardContainer from "./AnimeCardContainer";
import { AnimeQuery } from "../App";

interface Props {
  animeQuery: AnimeQuery;
}

function AnimeGrid({ animeQuery }: Props) {
  const { data: animes, error, isLoading } = useAnime(animeQuery);
  const skeleton = [1, 2, 3, 4, 5, 6];

if (!isLoading && animes.length === 0)
    return (
      <Heading color="red" marginTop={10}>
        No animes found
      </Heading>
    );

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
        {!isLoading &&
          animes.map((anime) => (
            <AnimeCardContainer key={anime.id}>
              <AnimeCard anime={anime} />
            </AnimeCardContainer>
          ))}
      </SimpleGrid>
    </>
  );
}

export default AnimeGrid;
