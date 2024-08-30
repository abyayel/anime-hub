import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

function NavBar() {
  return (
    <HStack justifyContent={"space-between"} p="2">
      <Image m="2" boxSize="60px" src={logo}></Image>
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
