import {
  Card,
  CardBody,
  Heading,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Anime } from "../hooks/useAnimes";
import RelatedGenresList from "./RelatedGenreList";

interface Props {
  anime: Anime;
}

function AnimeCard({ anime }: Props) {
  const imageSrc = useBreakpointValue({
    base: anime.attributes.posterImage.tiny,
    sm: anime.attributes.posterImage.large,
  });

  return (
    <Card
      direction={{ base: "row", sm: "column" }}
      borderRadius={10}
      overflow={"hidden"}
    >
      <Image src={imageSrc} />
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
