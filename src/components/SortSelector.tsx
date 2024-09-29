import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useAnimeQueryStore from "../store";

function SortSelector() {
  const selectedOrder = useAnimeQueryStore((store) => store.animeQuery.order);
  const selectedCategory = useAnimeQueryStore(
    (store) => store.animeQuery.category
  );
  const onSelectOrder = useAnimeQueryStore((store) => store.setOrder);
  const orders = [
    { value: "popularityRank", label: "Most Popular" },
    { value: "-averageRating", label: "Average Rating" },
    { value: "-startDate", label: "Newest Release" },
    { value: "-createdAt", label: "Date Added" },
  ];

  const currentOrder = orders.find((order) => selectedOrder === order.value);

  return (
    <Menu>
      <MenuButton size={"sm"} as={Button} rightIcon={<BsChevronDown />}>
        {!selectedCategory
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
        {!selectedCategory && (
          <MenuItem value="no order" onClick={() => onSelectOrder()}>
            No order
          </MenuItem>
        )}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
