import { Card, CardBody, CardFooter, Heading, Image } from "@chakra-ui/react";
import { Anime } from "../entities/Anime";
import RelatedCategoryList from "./RelatedCategoryList";
import ExtraInfo from "./ExtraInfo";
import { Link } from "react-router-dom";

interface Props {
  anime: Anime;
  borderRadius: string | number;
}

function AnimeCard({ anime, borderRadius }: Props) {
  return (
    <Card
      _hover={{
        transform: "scale(1.02)",
        transition: "transform 0.1s ease-in-out",
      }}
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
          <Link to={`anime/${anime.id}/${anime.attributes.slug}`}>
            {anime.attributes.canonicalTitle}
          </Link>
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
