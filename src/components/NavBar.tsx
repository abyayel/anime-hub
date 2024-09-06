import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import Searchinput from "./Searchinput";

interface Props {
  onSearch: (searchText: string) => void;
}

function NavBar({ onSearch }: Props) {
  return (
    <HStack>
      <Image boxSize="60px" src={logo}></Image>
      <Searchinput onSearch={onSearch}></Searchinput>
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
