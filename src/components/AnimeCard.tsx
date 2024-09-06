import { Card, CardBody, CardFooter, Heading, Image } from "@chakra-ui/react";
import { Anime } from "../hooks/useAnimes";
import RelatedGenresList from "./RelatedGenreList";
import ExtraInfo from "./ExtraInfo";

interface Props {
  anime: Anime;
  borderRadius: string | number;
}

function AnimeCard({ anime, borderRadius }: Props) {
  return (
    <Card borderRadius={borderRadius} overflow="hidden">
      <Image src={anime.attributes.posterImage?.large} />
      <CardBody key={anime.id}>
        <Heading isTruncated size={{ base: "sm", sm: "md", "2xl": "lg" }}>
          {anime.attributes.canonicalTitle}
        </Heading>
        <RelatedGenresList animeId={anime.id} />
      </CardBody>
      <CardFooter height="10">
        <ExtraInfo
          averageRating={anime.attributes.averageRating}
          ageRating={anime.attributes.ageRating}
        ></ExtraInfo>
      </CardFooter>
    </Card>
  );
}

export default AnimeCard;
