import { useParams } from "react-router-dom";
import { useAnime } from "../hooks/useAnime";
import { Heading, Spinner, Text } from "@chakra-ui/react";

function AnimeDetailsPage() {
  const { id } = useParams();
  const { data: anime, isLoading, error } = useAnime(id!);
  const description = anime?.data.attributes.synopsis;
  const title = anime?.data.attributes.canonicalTitle;
  if (isLoading) return <Spinner />;
  if (error) throw error;

  return (
    <div>
      <Heading>{title}</Heading>
      <Text>{description}</Text>
    </div>
  );
}

export default AnimeDetailsPage;
