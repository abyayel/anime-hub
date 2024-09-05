import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Anime } from "../hooks/useAnimes";
import RelatedGenresList from "./RelatedGenreList";

interface Props {
  anime: Anime;
}

function AnimeCard({ anime }: Props) {
  return (
    <Card>
      <Image src={anime.attributes.posterImage?.large} />
      <CardBody key={anime.id}>
        <Heading isTruncated size={{ base: "sm", sm: "md", "2xl": "lg" }}>
          {anime.attributes.canonicalTitle}
        </Heading>
        <RelatedGenresList animeId={anime.id} />
      </CardBody>
    </Card>
  );
}

export default AnimeCard;
