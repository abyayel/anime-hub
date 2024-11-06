import { Badge, HStack } from "@chakra-ui/react";
import { useRelatedCategories } from "../hooks/useRelatedCategories";

interface Props {
  animeId: string;
  baseFontSize?: string;
  LargeFontSize?: string;
  categoryNumber: number;
  colorScheme: string;
}

function RelatedCategoryList({
  animeId,
  baseFontSize,
  LargeFontSize,
  categoryNumber,
  colorScheme,
}: Props) {
  const { data: categoryList } = useRelatedCategories(animeId);
  const limitedData = categoryList?.data.slice(0, categoryNumber);

  return (
    <HStack wrap={"wrap"} paddingTop={1}>
      {limitedData?.map((category) => (
        <Badge
          colorScheme={colorScheme}
          key={category.id}
          fontSize={{ base: baseFontSize, "2xl": LargeFontSize }}
          padding={1.5}
          borderRadius={"5px"}
        >
          {category.attributes.title}
        </Badge>
      ))}
    </HStack>
  );
}

export default RelatedCategoryList;
