import {
  LightMode,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useAnimeQueryStore from "../store";
import { useNavigate } from "react-router-dom";

function Searchinput() {
  const onSearch = useAnimeQueryStore((store) => store.setSearchText);
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

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
        navigate("/");
      }}
    >
      <LightMode>
        <InputGroup>
          <InputLeftElement textColor={"black"} children={<BsSearch />} />
          <Input
            ref={ref}
            borderRadius={"20px"}
            placeholder="Search Anime"
            variant="filled"
            textColor={"black"}
            _focusVisible={"white"}
          ></Input>
        </InputGroup>
      </LightMode>
    </form>
  );
}

export default Searchinput;
