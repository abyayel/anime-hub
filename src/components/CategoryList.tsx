import { Button, HStack, Skeleton, useBreakpointValue } from "@chakra-ui/react";
import { useCategories } from "../hooks/useCategories";

interface Props {
  onSelectCategory: (slug: string | null) => void;
  selectedCategory: string | null;
}

function CategoryList({ onSelectCategory, selectedCategory }: Props) {
  const { data: categories, isLoading, error } = useCategories();
  const skeleton = Array.from({ length: 30 });
  const narrowButtonWidth = useBreakpointValue({ lg: "70px", xl: "80px" });
  const wideButtonWidth = useBreakpointValue({ lg: "86px", xl: "110px" });

  if (error) return null;

  return (
    <HStack flexWrap={"wrap"}>
      {isLoading &&
        skeleton.map((_, id) => (
          <Skeleton
            height={"32px"}
            width={id % 2 === 0 ? narrowButtonWidth : wideButtonWidth}
            borderRadius={5}
          ></Skeleton>
        ))}
      {!isLoading && (
        <Button
          onClick={() => onSelectCategory(null)}
          colorScheme={selectedCategory ? "purple" : "red"}
          size={"sm"}
        >
          All
        </Button>
      )}
      {categories.map((cat) => (
        <Button
          onClick={() => onSelectCategory(cat.attributes.slug)}
          colorScheme={
            selectedCategory === cat.attributes.slug ? "blue" : "cyan"
          }
          size={"sm"}
          key={cat.id}
        >
          {cat.attributes.title}
        </Button>
      ))}
    </HStack>
  );
}

export default CategoryList;
