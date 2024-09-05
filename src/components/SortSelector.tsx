import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectOrder: (attributeName: string) => void;
  selectedOrder: string;
}

function SortSelector({ selectedOrder, onSelectOrder }: Props) {
  const orders = [
    // { value: "-titles", label: "Name" },

    { value: "-startDate", label: "Newest Release" },
    { value: "popularityRank", label: "Most Popular" },
    { value: "-averageRating", label: "Average Rating" },
    { value: "-createdAt", label: "Date Added" },
    { value: "", label: "No Order" },
  ];

  const currentOrder = orders.find((order) => selectedOrder === order.value);

  return (
    <Menu>
      <MenuButton size={"sm"} as={Button} rightIcon={<BsChevronDown />}>
        Order By : {currentOrder?.label || "No order"}
      </MenuButton>
      <MenuList>
        {orders.map((order) => (
          <MenuItem
            key={order.value}
            value={order.value}
            onClick={() => onSelectOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
