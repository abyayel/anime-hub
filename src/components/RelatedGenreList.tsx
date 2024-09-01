import { Button, HStack } from "@chakra-ui/react";
import { useRelatedGeneres } from "../hooks/useRelatedGenres";

interface Props {
  animeId: string;
}

function RelatedGenresList({ animeId }: Props) {
  const { genreList } = useRelatedGeneres(animeId);

  return (
    <HStack wrap={"wrap"}>
      {genreList.map((genre) => (
        <Button size="sm" fontSize="sm">
          {genre.attributes.name}
        </Button>
      ))}
    </HStack>
  );
}

export default RelatedGenresList;
