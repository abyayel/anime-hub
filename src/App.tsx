import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import AnimeGrid from "./components/AnimeGrid";
import CategoryList from "./components/CategoryList";
import { useState } from "react";
import SortSelector from "./components/SortSelector";

export interface AnimeQuery {
  category: string;
  order: string;
}

function App() {
  const [query, setAnimeQuery] = useState<AnimeQuery>({} as AnimeQuery);

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
            onSelectOrder={(order) => setAnimeQuery({ ...query, order })}
            selectedOrder={query.order}
          ></SortSelector>
        </HStack>
        <AnimeGrid animeQuery={query} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingTop={3} paddingRight={3}>
          <CategoryList
            onSelectCategory={(category) =>
              setAnimeQuery({ ...query, category })
            }
            selectedCategory={query.category}
          />
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
