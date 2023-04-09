import { Box } from "@chakra-ui/react";
import { MenuSide } from "../MenuSide";

export const Layout = ({ children }: PropsChildren) => {
  return (
    <>
      <Box w={"100%"} display={"flex"} h={"100%"} py={"0.5rem"}>
        <MenuSide />
        <Box w={"100%"} display={"flex"} h={"100%"}>
          {children}
        </Box>
      </Box>
    </>
  );
};
