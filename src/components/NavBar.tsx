import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";

function NavBar() {
  return (
    <HStack>
      <Image m="2" boxSize="60px" src={logo}></Image>
      <Text>Nav Bar</Text>
    </HStack>
  );
}

export default NavBar;
