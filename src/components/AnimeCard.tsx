import {
  Card,
  CardBody,
  Heading,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Anime } from "../hooks/useAnimes";

interface Props {
  anime: Anime;
}

function AnimeCard({ anime }: Props) {
  const imageSrc = useBreakpointValue({
    base: anime.attributes.posterImage.tiny, // For small screens
    "2xl": anime.attributes.posterImage.small, // For 2xl screens and above
  });

  return (
    <Card direction={"row"} borderRadius={10} overflow={"hidden"}>
      <Image src={imageSrc} />
      <CardBody key={anime.id}>
        <Heading size={{ base: "md", "2xl": "lg" }}>
          {anime.attributes.canonicalTitle}
        </Heading>
      </CardBody>
    </Card>
  );
}

export default AnimeCard;
