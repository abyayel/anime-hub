import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      gap={1}
      templateColumns={{ base: "auto", lg: "auto 100px" }}
      templateRows={{ base: "50px 50px", lg: "50px 200px" }}
      templateAreas={{
        base: `"nav"
    "main"`,
        lg: `"nav nav"
    "main aside"`,
      }}
    >
      <GridItem area="nav" bg="red">
        Nav
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
