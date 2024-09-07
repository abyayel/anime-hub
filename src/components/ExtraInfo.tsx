import { Badge, HStack } from "@chakra-ui/react";

interface Props {
  averageRating: string;
  ageRating: string;
}
function ExtraInfo({ averageRating, ageRating }: Props) {
  const rating = Math.round(parseFloat(averageRating));
  const colorScheme = rating > 80 ? "green" : rating > 50 ? "yellow" : "red";
  return (
    <HStack width={"100%"} justifyContent={"space-between"}>
      <Badge
        paddingX={1.5}
        fontSize={{ base: "12px", "2xl": "20px" }}
        variant={"solid"}
        borderRadius={"4px"}
      >
        {ageRating || "N/A"}
      </Badge>
      <Badge
        paddingX={1.5}
        fontSize={{ base: "12px", "2xl": "20px" }}
        borderRadius={"4px"}
        colorScheme={colorScheme}
      >
        {rating || " "}
      </Badge>
    </HStack>
  );
}

export default ExtraInfo;
