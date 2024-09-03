import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function AnimeCardContainer({ children }: Props) {
  return (
    <Box borderRadius={10} overflow={"hidden"}>
      {children}
    </Box>
  );
}

export default AnimeCardContainer;
