import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Episode } from "../entities/Episode";

interface Props {
  episodeData: Episode | null;
}

function EpisodeDetails({ episodeData }: Props) {
  const headingBg = useColorModeValue("gray.100", "gray.800");

  if (!episodeData) return <Box></Box>;
  return (
    <Box
      borderRadius={"5"}
      padding={"5"}
      marginRight={{ md: "5" }}
      backgroundColor={headingBg}
    >
      <Grid
        templateAreas={
          episodeData.attributes.thumbnail
            ? {
                lg: `"image details" "synopsis synopsis"`,
                md: `"image" "details" "synopsis"`,
                sm: `"image details" "synopsis synopsis"`,
                base: `"image" "details" "synopsis"`,
              }
            : {
                base: `"details" "synopsis"`,
              }
        }
        templateColumns={
          episodeData.attributes.thumbnail
            ? { lg: "auto 1fr", md: "auto", sm: "auto 1fr" }
            : { base: "auto" }
        }
        gap={"4"}
      >
        <GridItem area="image">
          {episodeData.attributes.thumbnail && (
            <Image
              maxWidth={{ base: "150px", md: "200px" }}
              borderRadius={"5"}
              src={episodeData.attributes.thumbnail.original}
            />
          )}
        </GridItem>
        <GridItem area="details">
          <Box>
            <Heading size={"sm"}>
              Episode {episodeData.attributes.number}
            </Heading>
            <Text fontSize={{ base: "sm", sm: "md" }}>
              {episodeData.attributes.canonicalTitle ||
                episodeData.attributes.titles.en_jp}
            </Text>
            <Text fontSize={{ base: "xs", sm: "sm" }}>
              {episodeData.attributes.length &&
                episodeData.attributes.length + " minutes"}
            </Text>
            <Text color="gray" fontSize={{ base: "xs", sm: "sm" }}>
              Aired: {episodeData.attributes.airdate}
            </Text>
          </Box>
        </GridItem>
        <GridItem fontSize={"sm"} area="synopsis">
          <Text>{episodeData.attributes.synopsis}</Text>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default EpisodeDetails;
