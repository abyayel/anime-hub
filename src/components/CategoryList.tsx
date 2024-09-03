import { Button, HStack } from "@chakra-ui/react";
import { useCategories } from "../hooks/useCategories";

function CategoryList() {
  const { data: categories } = useCategories();

  return (
    <HStack flexWrap={"wrap"}>
      {categories.map((cat) => (
        <Button colorScheme="cyan" size={"sm"} key={cat.id}>
          {cat.attributes.title}
        </Button>
      ))}
    </HStack>
  );
}

export default CategoryList;
