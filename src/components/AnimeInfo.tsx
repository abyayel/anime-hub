interface Props {
  anime: Anime;
}
import { Text } from "@chakra-ui/react";
import { Anime } from "../entities/Anime";

function capitilize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1, word.length);
}

function AnimeInfo({ anime }: Props) {
  const status = anime.attributes.status;
  const showType = anime.attributes.showType;
  return (
    <>
      <Text>
        <Text as="span" fontWeight="bold">
          Show type:{" "}
        </Text>
        <Text as="span">{capitilize(showType)}</Text>
      </Text>
      <Text>
        <Text as="span" fontWeight="bold">
          Status:{" "}
        </Text>
        <Text as="span">{capitilize(status)}</Text>
      </Text>
      <Text>
        <Text as="span" fontWeight="bold">
          Run time:{" "}
        </Text>
        <Text as="span">{anime.attributes.startDate} to </Text>
        <Text as="span">{anime.attributes.endDate || "?"}</Text>
      </Text>
      <Text>
        <Text as="span" fontWeight="bold">
          Rating:{" "}
        </Text>
        <Text as="span">{anime.attributes.averageRating}</Text>
      </Text>
      <Text>
        <Text as="span" fontWeight="bold">
          Popularity Rank:{" "}
        </Text>
        <Text as="span">{anime.attributes.popularityRank}</Text>
      </Text>
      <Text>
        <Text as="span" fontWeight="bold">
          Rating Rank:{" "}
        </Text>
        <Text as="span">{anime.attributes.ratingRank}</Text>
      </Text>
      <Text>
        <Text as="span" fontWeight="bold">
          Age Rating:{" "}
        </Text>
        <Text as="span">{anime.attributes.ageRating}</Text>
      </Text>
    </>
  );
}

export default AnimeInfo;
