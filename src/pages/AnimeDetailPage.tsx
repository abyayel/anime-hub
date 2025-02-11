import { useParams } from "react-router-dom";
import { useAnime } from "../hooks/useAnime";
import {
  Image,
  Grid,
  GridItem,
  Heading,
  Spinner,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import AnimeSynopsis from "../components/AnimeSynopsis";
import RelatedCategoryList from "../components/RelatedCategoryList";
import AnimeInfo from "../components/AnimeInfo";
import EpisodeList from "../components/EpisodeList";
import EpisodeDetails from "../components/EpisodeDetails";
import { useState } from "react";
import { Episode } from "../entities/Episode";

function AnimeDetailsPage() {
  const [currentEpisode, setCurrentEpisode] = useState<Episode | null>(null);
  // console.log(currentEpisode);
  const animeDetailBgColor = useColorModeValue("blue.700", "gray.800");
  const episodeDetailBgColor = useColorModeValue("white", "gray.900");
  const { id } = useParams();
  const { data: anime, isLoading, error } = useAnime(id!);
  const description = anime?.data.attributes.synopsis;
  const canonicalTitle = anime?.data.attributes.canonicalTitle;
  const japaneseTitle = anime?.data.attributes.titles.ja_jp;
  const posterImg = anime?.data.attributes.posterImage.large;
  const showType = anime?.data.attributes.showType;

  if (isLoading) return <Spinner />;
  if (error) throw error;

  return (
    <>
      <Grid
        color={"white"}
        padding={5}
        backgroundColor={animeDetailBgColor}
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
            <Heading size={{ base: "md", md: "lg" }}>{canonicalTitle}</Heading>
            <Heading
              size={{ base: "xsm", md: "sm" }}
              alignSelf={{ base: "center", md: "inherit" }}
            >
              {japaneseTitle}
            </Heading>
          </VStack>
        </GridItem>
        <GridItem area="genres" alignSelf={"flex-end"}>
          <RelatedCategoryList
            animeId={anime?.data.id!}
            backgroundColor="blue.600"
            textColor="white"
            baseFontSize="x-small"
            categoryNumber={5}
          />
        </GridItem>
        <GridItem area="description">
          <AnimeSynopsis title={canonicalTitle}>{description}</AnimeSynopsis>
        </GridItem>
        <GridItem area="info" justifySelf={"flex-start"}>
          <AnimeInfo anime={anime?.data!} />
        </GridItem>
      </Grid>

      {!(showType === "movie") && (
        <Grid
          templateAreas={{
            base: `"details" "episodes"`,
            md: `"episodes details"`,
          }}
          templateColumns={{ md: "40% 60%", base: "100%" }}
          paddingY={"8"}
          paddingX={"5"}
          gap={5}
          backgroundColor={episodeDetailBgColor}
        >
          <GridItem area="episodes">
            <EpisodeList
              animeId={id!}
              currentEpisodeNumber={currentEpisode?.attributes.number}
              onClick={(episode) => setCurrentEpisode(episode)}
            ></EpisodeList>
          </GridItem>
          <GridItem area="details">
            <EpisodeDetails episodeData={currentEpisode}></EpisodeDetails>
          </GridItem>
        </Grid>
      )}
    </>
  );
}

export default AnimeDetailsPage;
