import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "../components/ColorModeSwitch";
import Searchinput from "../components/Searchinput";

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
