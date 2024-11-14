import { Badge, HStack, useColorModeValue } from "@chakra-ui/react";
import { useRelatedCategories } from "../hooks/useRelatedCategories";

interface Props {
  animeId: string;
  baseFontSize?: string;
  LargeFontSize?: string;
  categoryNumber: number;
  color?: string;
  colorScheme?: string;
  backgroundColor?: string;
  textColor?: string;
  darkModeColor?: string;
}

function RelatedCategoryList({
  animeId,
  baseFontSize,
  LargeFontSize,
  categoryNumber,
  colorScheme,
  backgroundColor,
  textColor,
}: Props) {
  let bg = undefined;
  if (colorScheme) {
    bg = null;
  } else bg = useColorModeValue(backgroundColor, "gray.700");
  const { data: categoryList } = useRelatedCategories(animeId);
  const limitedData = categoryList?.data.slice(0, categoryNumber);

  return (
    <HStack wrap={"wrap"} paddingTop={1}>
      {limitedData?.map((category) => (
        <Badge
          //
          backgroundColor={bg!}
          colorScheme={colorScheme}
          textColor={textColor}
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
