import { Button, HStack, Skeleton, useBreakpointValue } from "@chakra-ui/react";
import { useCategories } from "../hooks/useCategories";
import React from "react";
import useAnimeQueryStore from "../store";

function CategoryList() {
  const selectedCategory = useAnimeQueryStore(
    (store) => store.animeQuery.category
  );
  const onSelectCategory = useAnimeQueryStore((store) => store.setCategory);
  const {
    data: categories,
    isLoading,
    error,
    isFetching,
    hasNextPage,
    fetchNextPage,
  } = useCategories();
  const skeleton = Array.from({ length: 30 });
  const narrowButtonWidth = useBreakpointValue({
    lg: "60px",
    xl: "80px",
    "2xl": "60px",
  });
  const wideButtonWidth = useBreakpointValue({
    lg: "80px",
    xl: "110px",
    "2xl": "105px",
  });

  if (error) return null;

  return (
    <>
      <HStack paddingTop={2} gap={{ base: 1.5, xl: 2 }} flexWrap={"wrap"}>
        {isLoading &&
          skeleton.map((_, id) => (
            <Skeleton
              key={id}
              height={{ base: "24px", xl: "32px", "2xl": "40px" }}
              width={id % 2 === 0 ? narrowButtonWidth : wideButtonWidth}
              borderRadius={5}
            ></Skeleton>
          ))}
        {!isLoading && (
          <Button
            onClick={() => onSelectCategory()}
            colorScheme={selectedCategory ? "purple" : "red"}
            size={{ base: "xs", xl: "sm", "2xl": "md" }}
          >
            All
          </Button>
        )}
        {categories?.pages.map((page, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {page.data.map((cat) => (
              <Button
                onClick={() => onSelectCategory(cat.attributes.slug)}
                colorScheme={
                  selectedCategory === cat.attributes.slug ? "blue" : "cyan"
                }
                size={{ base: "xs", xl: "sm", "2xl": "md" }}
                key={cat.id}
              >
                {cat.attributes.title}
              </Button>
            ))}
          </React.Fragment>
        ))}
      </HStack>
      {hasNextPage && (
        <Button
          colorScheme="green"
          onClick={() => fetchNextPage()}
          size={{ base: "xs", "2xl": "sm" }}
          mt={2}
        >
          {isFetching ? "Loading..." : "More Categories"}
        </Button>
      )}
    </>
  );
}

export default CategoryList;
