import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useAnimeQueryStore from "../store";

function Status() {
  const selectedStatus = useAnimeQueryStore((store) => store.animeQuery.status);
  const onSelectStatus = useAnimeQueryStore((store) => store.setStatus);

  const status = [
    { value: "current", label: "Current" },
    { value: "finished", label: "Finished" },
    { value: "tba", label: "To be announced" },
    { value: "unreleased", label: "Unreleased" },
    { value: "upcoming", label: "Up Coming" },
  ];

  const currentStatus = status.find(
    (status) => selectedStatus === status.value
  );

  return (
    <Menu>
      <MenuButton size={"sm"} as={Button} rightIcon={<BsChevronDown />}>
        {currentStatus?.label || "Status"}
      </MenuButton>
      <MenuList>
        {status.map((status) => (
          <MenuItem
            key={status.value}
            value={status.value}
            onClick={() => onSelectStatus(status.value)}
          >
            {status.label}
          </MenuItem>
        ))}
        <MenuItem value="no status" onClick={() => onSelectStatus()}>
          All
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default Status;
