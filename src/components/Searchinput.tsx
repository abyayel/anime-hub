import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (value: string | null) => void;
}

function Searchinput({ onSearch }: Props) {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          onSearch(ref.current.value);
        }
        if (ref.current?.value == "") {
          onSearch(null);
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
