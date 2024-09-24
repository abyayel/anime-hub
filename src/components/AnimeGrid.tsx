import { Button, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useAnime } from "../hooks/useAnimes";
import AnimeCard from "./AnimeCard";
import AnimeCardSkeleton from "./AnimeCardSkeleton";
import { AnimeQuery } from "../hooks/useAnimes";
import React from "react";

interface Props {
  animeQuery: AnimeQuery;
}

function AnimeGrid({ animeQuery }: Props) {
  const {
    data: animes,
    error,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useAnime(animeQuery);
  const skeleton = [1, 2, 3, 4, 5, 6];
  const cardBorderRadius = 10;

  if (error) <Text>{error.message}</Text>;

  if (!isLoading && animes?.pages[0].meta.count === 0)
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
          animes?.pages.map((page, pageIndex) => {
            return (
              <React.Fragment key={pageIndex}>
                {page.data.map((anime) => (
                  <AnimeCard
                    anime={anime}
                    borderRadius={cardBorderRadius}
                    key={anime.id}
                  />
                ))}
              </React.Fragment>
            );
          })}
      </SimpleGrid>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} my={4}>
          {isFetchingNextPage ? "...Loading" : "Load More"}
        </Button>
      )}
    </>
  );
}

export default AnimeGrid;
