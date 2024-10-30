import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  children?: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(true);
  const limit = 300;
  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const updatedText = expanded
    ? children
    : children.substring(0, limit) + "...";
  return (
    <Text>
      {updatedText}
      <Button
        colorScheme="red"
        ml={2}
        onClick={() => setExpanded(!expanded)}
        size={"sm"}
      >
        {expanded ? "Read Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
