import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import Searchinput from "./Searchinput";

function NavBar() {
  return (
    <HStack>
      <Image boxSize="60px" src={logo}></Image>
      <Searchinput></Searchinput>
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
