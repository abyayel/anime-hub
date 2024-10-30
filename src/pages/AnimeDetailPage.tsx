import { useParams } from "react-router-dom";
import { useAnime } from "../hooks/useAnime";
import { Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandabaleText";

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
      <ExpandableText>{description}</ExpandableText>
    </div>
  );
}

export default AnimeDetailsPage;
