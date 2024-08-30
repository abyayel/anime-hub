import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

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
      <GridItem area="main" bg="blue">
        Main
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="green">
          Aside
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
