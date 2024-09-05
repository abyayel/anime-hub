import { Button, HStack, useBreakpointValue } from "@chakra-ui/react";
import { useCategories } from "../hooks/useCategories";
import CategoryButtonSkeleton from "./CateogryButton";

interface Props {
  onSelectCategory: (slug: string | null) => void;
  selectedCategory: string | null;
}

function CategoryList({ onSelectCategory, selectedCategory }: Props) {
  const { data: categories, isLoading, error } = useCategories();
  const skeleton = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const narrowButtonWidth = useBreakpointValue({ lg: 45, xl: 50 });
  const wideButtonWidth = useBreakpointValue({ lg: 70, xl: 100 });

  if (error) return null;

  return (
    <HStack flexWrap={"wrap"}>
      {isLoading &&
        skeleton.map((id) =>
          id % 2 === 0 ? (
            <CategoryButtonSkeleton width={narrowButtonWidth} key={id} />
          ) : (
            <CategoryButtonSkeleton width={wideButtonWidth} key={id} />
          )
        )}
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
