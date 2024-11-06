import { useParams } from "react-router-dom";
import { useAnime } from "../hooks/useAnime";
import {
  Image,
  Grid,
  GridItem,
  Heading,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandabaleText";
import RelatedCategoryList from "../components/RelatedCategoryList";
import AnimeInfo from "../components/AnimeInfo";

function AnimeDetailsPage() {
  const { id } = useParams();
  const { data: anime, isLoading, error } = useAnime(id!);
  const description = anime?.data.attributes.synopsis;
  const title = anime?.data.attributes.canonicalTitle;
  const posterImg = anime?.data.attributes.posterImage.large;
  if (isLoading) return <Spinner />;
  if (error) throw error;

  return (
    <div>
      <Grid
        paddingTop={"20px"}
        templateAreas={{
          base: `"poster"  "title" "genres" "description" "info" `,
          md: `"poster title" "poster genres" "poster description" "poster info"`,
          xl: `"poster title info" "poster genres info" "poster description info"`,
        }}
        templateColumns={{ xl: "auto auto 30%" }}
        gap={5}
        columnGap={10}
        justifyItems={{ base: "center", md: "initial" }}
        paddingBottom={5}
        // paddingY={10}
      >
        <GridItem area="poster">
          <Image
            maxW={{ base: "200px", md: "220px" }}
            border={"solid"}
            borderRadius={15}
            src={posterImg}
          />
        </GridItem>
        <GridItem area="title">
          <VStack gap={"2"} alignItems={"flex-start"}>
            <Heading size={{ base: "md", md: "lg" }}>{title}</Heading>
            <Heading
              size={{ base: "xsm", md: "sm" }}
              alignSelf={{ base: "center", md: "inherit" }}
            >
              {anime?.data.attributes.titles.ja_jp}
            </Heading>
          </VStack>
        </GridItem>
        <GridItem area="genres" alignSelf={"flex-end"}>
          <RelatedCategoryList
            animeId={anime?.data.id!}
            colorScheme="blue"
            baseFontSize="x-small"
            categoryNumber={5}
          />
        </GridItem>
        <GridItem area="description" height={"100px"}>
          <ExpandableText>{description}</ExpandableText>
        </GridItem>
        <GridItem area="info" justifySelf={"flex-start"}>
          <AnimeInfo anime={anime?.data!} />
        </GridItem>
      </Grid>

      <Grid
        templateAreas={{
          base: `"episodes" "details"`,
          md: `"episodes details"`,
        }}
      >
        <GridItem area="episodes" backgroundColor="orange">
          Episodes
        </GridItem>
        <GridItem area="details" backgroundColor="gold">
          Episode details
        </GridItem>
      </Grid>
    </div>
  );
}

export default AnimeDetailsPage;
