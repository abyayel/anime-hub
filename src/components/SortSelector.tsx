import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectOrder: (attributeName: string | null) => void;
  selectedOrder: string | null;
  selectedCategory: string | null;
}

function SortSelector({
  selectedOrder,
  selectedCategory,
  onSelectOrder,
}: Props) {
  const orders = [
    { value: "-startDate", label: "Newest Release" },
    { value: "popularityRank", label: "Most Popular" },
    { value: "-averageRating", label: "Average Rating" },
    { value: "-createdAt", label: "Date Added" },
  ];

  const currentOrder = orders.find((order) => selectedOrder === order.value);

  return (
    <Menu>
      <MenuButton size={"sm"} as={Button} rightIcon={<BsChevronDown />}>
        {selectedCategory == null
          ? currentOrder?.label || "Order"
          : currentOrder?.label || "Most Popular"}
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
        {selectedCategory == null && (
          <MenuItem value="no order" onClick={() => onSelectOrder(null)}>
            No order
          </MenuItem>
        )}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
