import { Card, CardBody, CardFooter, Heading, Image } from "@chakra-ui/react";
import { Anime } from "../hooks/useAnimes";
import RelatedCategoryList from "./RelatedCategoryList";
import ExtraInfo from "./ExtraInfo";

interface Props {
  anime: Anime;
  borderRadius: string | number;
}

function AnimeCard({ anime, borderRadius }: Props) {
  return (
    <Card
      maxW={{ base: " 317px", md: "352", xl: "303px", "2xl": "507px" }}
      borderRadius={borderRadius}
      overflow="hidden"
      width="100%"
    >
      <Image
        // maxH={{ base: "450px", md: "500", xl: "430px", "2xl": "720px" }}
        maxW={{ base: " 317px", md: "352", xl: "303px", "2xl": "507px" }}
        src={anime.attributes.posterImage?.large}
      />
      <CardBody paddingTop={3} key={anime.id}>
        <Heading isTruncated size={{ base: "sm", sm: "md", "2xl": "lg" }}>
          {anime.attributes.canonicalTitle}
        </Heading>
        <RelatedCategoryList animeId={anime.id} />
      </CardBody>
      <CardFooter paddingTop={0} paddingBottom={2}>
        <ExtraInfo
          averageRating={anime.attributes.averageRating}
          ageRating={anime.attributes.ageRating}
        ></ExtraInfo>
      </CardFooter>
    </Card>
  );
}

export default AnimeCard;
