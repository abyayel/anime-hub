import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useAnime } from "../hooks/useAnimes";
import AnimeCard from "./AnimeCard";
import AnimeCardSkeleton from "./AnimeCardSkeleton";
import { AnimeQuery } from "../App";

interface Props {
  animeQuery: AnimeQuery;
}

function AnimeGrid({ animeQuery }: Props) {
  const { data: animes, error, isLoading } = useAnime(animeQuery);
  const skeleton = [1, 2, 3, 4, 5, 6];
  const cardBorderRadius = 10;

  if (error) <Text>{error.message}</Text>;

  if (!isLoading && animes?.length === 0)
    return (
      <Heading color="red" marginTop={10}>
        No animes found
      </Heading>
    );

  return (
    <>
      <SimpleGrid
        rowGap={"5"}
        columnGap={"3.5"}
        columns={{ base: 1, sm: 2, md: 3, "2xl": 4 }}
        justifyItems={"center"}
      >
        {isLoading &&
          skeleton.map((id) => (
            <AnimeCardSkeleton borderRadius={cardBorderRadius} key={id} />
          ))}
        {!isLoading &&
          animes?.map((anime) => (
            <AnimeCard
              anime={anime}
              borderRadius={cardBorderRadius}
              key={anime.id}
            />
          ))}
      </SimpleGrid>
    </>
  );
}

export default AnimeGrid;
