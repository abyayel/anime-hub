import { useParams } from "react-router-dom";
import { useAnime } from "../hooks/useAnime";
import { Image, Grid, GridItem, Heading, Spinner } from "@chakra-ui/react";
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
        templateAreas={{
          base: `"poster"  "title" "genres" "description" "info" `,
          md: `"poster title" "poster genres" "poster description" "poster info"`,
          xl: `"poster title info" "poster genres info" "poster description info"`,
        }}
        templateColumns={{ xl: "auto auto 30%" }}
        gap={5}
        justifyItems={{ base: "center", md: "initial" }}
        paddingBottom={5}
        // paddingY={10}
      >
        <GridItem area="poster">
          <Image
            maxW={{ base: "200px", md: "250px" }}
            border={"solid"}
            borderRadius={15}
            src={posterImg}
          />
        </GridItem>
        <GridItem area="title" backgroundColor="blue">
          <Heading>{title}</Heading>
        </GridItem>
        <GridItem area="genres" alignSelf={"flex-end"}>
          <RelatedCategoryList
            animeId={anime?.data.id!}
            colorScheme="blue"
            baseFontSize="x-small"
            categoryNumber={5}
          />
        </GridItem>
        <GridItem area="description" backgroundColor="green">
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
