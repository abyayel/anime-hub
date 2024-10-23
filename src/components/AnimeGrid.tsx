import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useAnimes } from "../hooks/useAnimes";
import AnimeCard from "./AnimeCard";
import AnimeCardSkeleton from "./AnimeCardSkeleton";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function AnimeGrid() {
  const {
    data: animes,
    error,
    isLoading,
    hasNextPage,
    fetchNextPage,
  } = useAnimes();
  const skeleton = [1, 2, 3, 4, 5, 6];
  const cardBorderRadius = 10;
  const fetchedDataCount = animes?.pages.reduce(
    (acc, page) => acc + page.data.length,
    0
  );

  if (error) <Text>{error.message}</Text>;

  if (!isLoading && animes?.pages[0].meta.count === 0)
    return (
      <Heading color="red" marginTop={10}>
        No animes found
      </Heading>
    );

  return (
    <>
      <InfiniteScroll
        dataLength={fetchedDataCount || 0}
        hasMore={hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
        <SimpleGrid
          rowGap={"5"}
          columnGap={"3.5"}
          columns={{ base: 1, sm: 2, md: 3, "2xl": 4 }}
          justifyItems={"center"}
          paddingTop={2}
          paddingRight={2}
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
      </InfiniteScroll>
    </>
  );
}

export default AnimeGrid;
