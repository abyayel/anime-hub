import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

function Searchinput() {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        borderRadius={"20px"}
        placeholder="Search Anime"
        variant="filled"
      ></Input>
    </InputGroup>
  );
}

export default Searchinput;
