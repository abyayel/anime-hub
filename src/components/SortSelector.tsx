import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

function SortSelector() {
  return (
    <Menu>
      <MenuButton
        marginRight={120}
        size={"sm"}
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        Order By
      </MenuButton>
      <MenuList>
        <MenuItem>Name</MenuItem>
        <MenuItem>Latest Release</MenuItem>
        <MenuItem>Latest Updated</MenuItem>
        <MenuItem>Most Popular</MenuItem>
        <MenuItem>Highest Ranking</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
