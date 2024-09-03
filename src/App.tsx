import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import AnimeGrid from "./components/AnimeGrid";
import CategoryList from "./components/CategoryList";

function App() {
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
        <AnimeGrid />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingTop={3} paddingRight={3}>
          <CategoryList />
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
