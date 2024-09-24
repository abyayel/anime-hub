import { Badge, HStack } from "@chakra-ui/react";
import { useRelatedCategories } from "../hooks/useRelatedCategories";

interface Props {
  animeId: string;
}

function RelatedCategoryList({ animeId }: Props) {
  const { data: categoryList } = useRelatedCategories(animeId);
  const limitedData = categoryList?.data.slice(0, 3);

  return (
    <HStack wrap={"wrap"} paddingTop={1}>
      {limitedData?.map((category) => (
        <Badge
          colorScheme="blue"
          key={category.id}
          fontSize={{ base: "10px", "2xl": "15px" }}
          padding={1.5}
        >
          {category.attributes.title}
        </Badge>
      ))}
    </HStack>
  );
}

export default RelatedCategoryList;
