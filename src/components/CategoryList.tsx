import { Button, HStack } from "@chakra-ui/react";
import { useCategories } from "../hooks/useCategories";
import CategoryButtonSkeleton from "./CateogryButton";

function CategoryList() {
  const { data: categories, isLoading, error } = useCategories();
  const skeleton = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return null;

  return (
    <HStack flexWrap={"wrap"}>
      {isLoading &&
        skeleton.map((id) =>
          id % 2 === 0 ? (
            <CategoryButtonSkeleton width={50} key={id} />
          ) : (
            <CategoryButtonSkeleton width={100} key={id} />
          )
        )}
      {categories.map((cat) => (
        <Button colorScheme="cyan" size={"sm"} key={cat.id}>
          {cat.attributes.title}
        </Button>
      ))}
    </HStack>
  );
}

export default CategoryList;
