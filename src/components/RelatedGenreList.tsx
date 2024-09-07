import { Badge, HStack } from "@chakra-ui/react";
import { useRelatedGeneres } from "../hooks/useRelatedGenres";

interface Props {
  animeId: string;
}

function RelatedGenresList({ animeId }: Props) {
  const { data: genreList } = useRelatedGeneres(animeId);
  const limitedData = genreList.slice(0, 3);

  return (
    <HStack wrap={"wrap"} paddingTop={1}>
      {limitedData.map((genre) => (
        <Badge
          colorScheme="blue"
          key={genre.id}
          fontSize={{ base: "10px", "2xl": "15px" }}
          padding={1.5}
        >
          {genre.attributes.name}
        </Badge>
      ))}
    </HStack>
  );
}

export default RelatedGenresList;
