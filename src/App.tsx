import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import AnimeGrid from "./components/AnimeGrid";
import { useCategories } from "./hooks/useCategories";

function App() {
  const { data } = useCategories();
  return (
    <Grid
      templateColumns={{ lg: "auto 150px" }}
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
        <GridItem area="aside">
          {data.map((cat) => (
            <li>{cat.attributes.title}</li>
          ))}
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
