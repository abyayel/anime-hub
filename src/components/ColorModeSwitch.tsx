import { Switch, useColorMode, Text, HStack } from "@chakra-ui/react";

function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="cyan"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
      <Text fontWeight={"bold"}>{colorMode === "dark" ? "Light" : "Dark"}</Text>
    </HStack>
  );
}

export default ColorModeSwitch;
