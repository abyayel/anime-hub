// import { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
// import AnimeInfoModal from "./AnimeInfoModal";

interface Props {
  children?: string;
  title?: string;
}

const AnimeSynopsis = ({ children, title }: Props) => {
  // const [isOpen, setOpen] = useState(false);
  // const [expanded, setExpanded] = useState(false);
  const limit = 300;
  if (!children) return null;

  if (children.length <= limit) return <Text fontSize={"sm"}>{children}</Text>;

  const updatedText = children.substring(0, limit) + "...";
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Text fontSize={"sm"}>{updatedText}</Text>
      <Text
        onClick={onOpen}
        cursor={"pointer"}
        fontWeight={"bold"}
        marginTop={2}
        fontSize={"sm"}
        display={"inline"}
      >
        + Read Full
      </Text>

      <Modal
        size={{ base: "xs", md: "md", lg: "lg" }}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay bg="blackAlpha.900" />
        <ModalContent borderRadius={20}>
          <ModalHeader paddingTop={10} alignSelf={"center"}>
            {title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody paddingX={8} paddingBottom={8}>
            {children}
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* <AnimeInfoModal open={isOpen} setOpen={() => setOpen(false)}>
        {children}
      </AnimeInfoModal> */}
    </>
  );
};

export default AnimeSynopsis;
