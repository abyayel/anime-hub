import { Box, Heading, Text } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={3}>
        <Heading size={"2xl"}>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist"
            : "An unexpected error occurred."}
        </Text>
      </Box>
    </>
  );
}
export default ErrorPage;
