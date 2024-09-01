import { Button, HStack } from "@chakra-ui/react";
import { useRelatedGeneres } from "../hooks/useRelatedGenres";

interface Props {
  animeId: string;
}

function RelatedGenresList({ animeId }: Props) {
  const { data: genreList } = useRelatedGeneres(animeId);

  return (
    <HStack wrap={"wrap"}>
      {genreList.map((genre) => (
        <Button key={genre.id} size="sm" fontSize="sm">
          {genre.attributes.name}
        </Button>
      ))}
    </HStack>
  );
}

export default RelatedGenresList;
