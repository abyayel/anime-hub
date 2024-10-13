import { Grid, GridItem, Heading, HStack, Show } from "@chakra-ui/react";
import AnimeGrid from "../components/AnimeGrid";
import CategoryList from "../components/CategoryList";
import SortSelector from "../components/SortSelector";
import StatusSelector from "../components/StatusSelector";

function App() {
  const headingBottomGap = 3;

  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"main aside"`,
      }}
      templateColumns={{
        lg: "auto 245px",
        xl: "auto 400px",
        "2xl": "auto 480px",
      }}
    >
      <GridItem area="main" padding={3}>
        <HStack
          marginBottom={headingBottomGap}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          width="auto"
        >
          <Heading as={"h1"}>Animes</Heading>
          <HStack flexWrap={"wrap"} gap={5}>
            <StatusSelector></StatusSelector>
            <SortSelector></SortSelector>
          </HStack>
        </HStack>
        <AnimeGrid />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingTop={3} paddingRight={3}>
          <Heading marginBottom={headingBottomGap}>Categories</Heading>
          <CategoryList />
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
