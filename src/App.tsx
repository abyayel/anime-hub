import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import AnimeGrid from "./components/AnimeGrid";
import CategoryList from "./components/CategoryList";
import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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
        <AnimeGrid selectedCategory={selectedCategory} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingTop={3} paddingRight={3}>
          <CategoryList
            selectCategory={(categorySlug) => setSelectedCategory(categorySlug)}
            selectedCategory={selectedCategory}
          />
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
