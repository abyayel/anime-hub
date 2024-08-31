import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import AnimeGrid from "./components/AnimeGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav"
    "main"`,
        lg: `"nav nav"
    "main aside"`,
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <GridItem area="main">
        <AnimeGrid />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>
    </Grid>
  );
}

export default App;
