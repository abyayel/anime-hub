import { Grid, GridItem, Heading, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import AnimeGrid from "./components/AnimeGrid";
import CategoryList from "./components/CategoryList";
import { useState } from "react";
import SortSelector from "./components/SortSelector";
import StatusSelector from "./components/StatusSelector";
import { AnimeQuery } from "./hooks/useAnimes";

function App() {
  const [query, setAnimeQuery] = useState<AnimeQuery>({
    category: null,
  } as AnimeQuery);
  const headingBottomGap = 3;

  return (
    <Grid
      templateAreas={{
        base: `"nav"
    "main"`,
        lg: `"nav nav"
    "main aside"`,
      }}
      templateColumns={{
        lg: "auto 245px",
        xl: "auto 400px",
        "2xl": "auto 480px",
      }}
    >
      <GridItem area="nav" padding={3}>
        <NavBar
          onSearch={(searchText) => setAnimeQuery({ ...query, searchText })}
        ></NavBar>
      </GridItem>
      <GridItem area="main" padding={3}>
        <HStack
          marginBottom={headingBottomGap}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          width="auto"
        >
          <Heading as={"h1"}>Animes</Heading>
          <HStack flexWrap={"wrap"} gap={5}>
            <StatusSelector
              onSelectStatus={(status) => setAnimeQuery({ ...query, status })}
              selectedStatus={query.status}
            ></StatusSelector>
            <SortSelector
              onSelectOrder={(order) => setAnimeQuery({ ...query, order })}
              selectedOrder={query.order}
              selectedCategory={query.category}
            ></SortSelector>
          </HStack>
        </HStack>
        <AnimeGrid animeQuery={query} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingTop={3} paddingRight={3}>
          <Heading marginBottom={headingBottomGap}>Categories</Heading>
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
