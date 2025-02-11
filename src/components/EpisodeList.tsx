import {
  Box,
  Text,
  Heading,
  useColorModeValue,
  Spinner,
} from "@chakra-ui/react";
import { useRelatedEpisodes } from "../hooks/useRelatedEpisodes";

import InfiniteScroll from "react-infinite-scroll-component";
import { Episode } from "../entities/Episode";

interface Props {
  animeId: string;
  currentEpisodeNumber: string | undefined;
  onClick: (episode: Episode) => void;
}

function EpisodeList({ currentEpisodeNumber, animeId, onClick }: Props) {
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
  const textColor = useColorModeValue("black", "white");
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

      <Box
        maxHeight={{ base: "230px", md: "400px", lg: "450px" }}
        overflowY={"scroll"}
      >
        <InfiniteScroll
          dataLength={fetchedDataCount || 0}
          hasMore={hasNextPage}
          next={() => fetchNextPage()}
          loader={<Spinner />}
        >
          {episodes?.pages.map((page, pageIndex) => (
            <Box
              key={pageIndex}
              display={"grid"}
              gap={"0.5"}
              marginBottom={"0.5"} //since infite scroll is one object making the parent box grid will not divide the epsode boxes
            >
              {page.data.map((episode) => (
                <Box
                  onClick={() => onClick(episode)}
                  borderLeft={"solid"}
                  borderLeftColor={
                    episode.attributes.number === currentEpisodeNumber
                      ? hoverTextColor
                      : episodeTextBg
                  }
                  color={
                    episode.attributes.number === currentEpisodeNumber
                      ? hoverTextColor
                      : textColor
                  }
                  key={episode.id}
                  display={"flex"}
                  justifyContent={"space-between"}
                  backgroundColor={
                    episode.attributes.number === currentEpisodeNumber
                      ? hoverTextBg
                      : episodeTextBg
                  }
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
                    Episode {episode.attributes.number}
                    {(episode.attributes.canonicalTitle ||
                      episode.attributes.titles.en_jp ||
                      episode.attributes.titles.en_us) &&
                      " : "}
                    {episode.attributes.canonicalTitle ||
                      episode.attributes.titles.en_jp ||
                      episode.attributes.titles.en_us}
                  </Text>
                </Box>
              ))}
            </Box>
          ))}
        </InfiniteScroll>
      </Box>
    </Box>
  );
}

export default EpisodeList;
