import {
  Box,
  Text,
  Heading,
  useColorModeValue,
  Spinner,
} from "@chakra-ui/react";
import { useRelatedEpisodes } from "../hooks/useRelatedEpisodes";

import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  animeId: string;
}

function EpisodeList({ animeId }: Props) {
  const {
    data: episodes,
    isLoading,
    error,
    hasNextPage,
    fetchNextPage,
  } = useRelatedEpisodes(animeId);
  const headingBg = useColorModeValue("blue.600", "gray.800");
  const episodeTextBg = useColorModeValue("gray.100", "gray.700");
  const hoverTextColor = useColorModeValue("blue.500", "blue.200");
  const hoverTextBg = useColorModeValue("white", "gray.700");
  const fetchedDataCount = episodes?.pages.reduce(
    (acc, page) => acc + page.data.length,
    0
  );

  if (error) return <Text>{error.message}</Text>;

  if (!isLoading && episodes?.pages[0].meta.count === 0)
    return (
      <Heading color="red" marginTop={10}>
        No episodes yet
      </Heading>
    );

  return (
    <Box>
      <Box>
        <Heading
          color={"white"}
          size={"lg"}
          backgroundColor={headingBg}
          paddingX={"3"}
          paddingY={"5"}
        >
          Episodes
        </Heading>
      </Box>
      <InfiniteScroll
        dataLength={fetchedDataCount || 0}
        hasMore={hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
        {/* InfiniteScroll allows us to get rid of overflow attributes */}
        <Box maxHeight={"500px"} display={"grid"} gap={"0.5"}>
          {episodes?.pages.map((page, pageIndex) => (
            <Box key={pageIndex} display={"grid"} gap={"0.5"}>
              {page.data.map((episode) => (
                <Box
                  borderLeft={"solid"}
                  borderLeftColor={episodeTextBg}
                  key={episode.id}
                  display={"flex"}
                  justifyContent={"space-between"}
                  backgroundColor={episodeTextBg}
                  padding={"3"}
                  cursor={"pointer"}
                  _hover={{
                    color: hoverTextColor,
                    backgroundColor: hoverTextBg,
                    borderLeftColor: hoverTextColor,
                    transition: "color borderLeft 0.2s ease-in-out",
                  }}
                >
                  <Text fontWeight={"500"}>
                    Episode {episode.attributes.number}:{" "}
                    {episode.attributes.canonicalTitle ||
                      episode.attributes.titles.en_jp}
                  </Text>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </InfiniteScroll>
    </Box>
  );
}

export default EpisodeList;
