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
      <Text whiteSpace={"nowrap"} fontWeight={"bold"} textColor={"white"}>
        {colorMode === "dark" ? "Light" : "Dark"} Mode
      </Text>
    </HStack>
  );
}

export default ColorModeSwitch;
