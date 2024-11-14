import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import Searchinput from "./Searchinput";

function NavBar() {
  return (
    <HStack paddingX={5} paddingY={3} backgroundColor="blue.500">
      <Image boxSize="60px" src={logo}></Image>
      <Searchinput></Searchinput>
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
