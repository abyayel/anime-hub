import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useAnimeQueryStore from "../store";

function Searchinput() {
  const onSearch = useAnimeQueryStore((store) => store.setSearchText);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          onSearch(ref.current.value);
        }
        if (ref.current?.value == "") {
          onSearch();
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={"20px"}
          placeholder="Search Anime"
          variant="filled"
        ></Input>
      </InputGroup>
    </form>
  );
}

export default Searchinput;
