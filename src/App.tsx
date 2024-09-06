import { Grid, GridItem, Heading, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import AnimeGrid from "./components/AnimeGrid";
import CategoryList from "./components/CategoryList";
import { useState } from "react";
import SortSelector from "./components/SortSelector";
import StatusSelector from "./components/StatusSelector";

export interface AnimeQuery {
  category: string | null;
  status: string | null;
  order: string;
  searchText: string;
}

function App() {
  const [query, setAnimeQuery] = useState<AnimeQuery>({} as AnimeQuery);
  const headingBottomGap = 2;

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
        <NavBar
          onSearch={(searchText) => setAnimeQuery({ ...query, searchText })}
        ></NavBar>
      </GridItem>
      <GridItem area="main" padding={3}>
        <HStack justifyContent={"space-between"}>
          <Heading marginBottom={headingBottomGap} as={"h1"}>
            Animes
          </Heading>
          <HStack flexWrap={"nowrap"} mr={"150px"} gap={5}>
            <StatusSelector
              onSelectStatus={(status) => setAnimeQuery({ ...query, status })}
              selectedStatus={query.status}
            ></StatusSelector>
            <SortSelector
              onSelectOrder={(order) => setAnimeQuery({ ...query, order })}
              selectedOrder={query.order}
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
