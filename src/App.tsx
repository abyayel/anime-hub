import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import AnimeGrid from "./components/AnimeGrid";
import CategoryList from "./components/CategoryList";
import { useState } from "react";
import SortSelector from "./components/SortSelector";

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<string>("");

  return (
    <Grid
      templateAreas={{
        base: `"nav"
    "main"`,
        lg: `"nav nav"
    "main aside"`,
      }}
      templateColumns={{ lg: "auto 220px", xl: "auto 280px" }}
    >
      <GridItem area="nav" padding={3}>
        <NavBar></NavBar>
      </GridItem>
      <GridItem area="main" padding={3}>
        <HStack marginBottom={2} justifyContent={"flex-end"}>
          <SortSelector
            onSelectOrder={(attributeName) => setSelectedOrder(attributeName)}
            selectedOrder={selectedOrder}
          ></SortSelector>
        </HStack>
        <AnimeGrid
          selectedOrder={selectedOrder}
          selectedCategory={selectedCategory}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingTop={3} paddingRight={3}>
          <CategoryList
            onSelectCategory={(categorySlug) =>
              setSelectedCategory(categorySlug)
            }
            selectedCategory={selectedCategory}
          />
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
