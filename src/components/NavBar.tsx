import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import Searchinput from "./Searchinput";
import useAnimeQueryStore from "../store";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const onSearch = useAnimeQueryStore((store) => store.setSearchText);
  const navigate = useNavigate();
  return (
    <HStack paddingX={5} paddingY={3} backgroundColor="blue.500">
      <Image
        onClick={() => {
          onSearch(undefined);
          navigate("/");
        }}
        boxSize="60px"
        src={logo}
        cursor={"pointer"}
      ></Image>
      <Searchinput></Searchinput>
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
