import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { APP_ROUTES } from "@/Routes";
import { usePathname } from "next/navigation";
export const MenuSide = () => {
  const { push } = useRouter();
  const pathname = usePathname();
  return (
    <Flex
      flexDir={"column"}
      borderRight={"2px solid #DEDBD1"}
      h={"100%"}
      alignItems={"center"}
      w={"7rem"}
      mr={"1rem"}
    >
      <Image
        alt={"logo-canaa"}
        src={require("../../assets/logo-canaa.png")}
        style={{
          width: "5rem",
          height: "5rem",
          maxWidth: "100%",
          objectFit: "contain",
          cursor: "pointer",
        }}
        onClick={() => {
          push("/");
        }}
      />

      <Flex flexDir={"column"} mt={"2rem"}>
        {Object?.values(APP_ROUTES.private)
          ?.filter((route) => route.icon !== "unauthorized")
          ?.map((route) => {
            return (
              <Box
                key={route?.path}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                mb={"0.8rem"}
              >
                <Link
                  variant={"ghost"}
                  colorScheme={"gray"}
                  _hover={
                    pathname === route?.path
                      ? { background: "#E36165" }
                      : { background: "#DEDBD1" }
                  }
                  cursor={"pointer"}
                  onClick={() => {
                    push(route?.path);
                  }}
                  color={
                    pathname === route?.path ? "whiteAlpha.900" : "gray.500"
                  }
                  background={pathname === route?.path ? "#E36165" : "none"}
                  borderRadius={"50%"}
                  p={"0.5rem"}
                >
                  {route?.icon}
                </Link>
              </Box>
            );
          })}
      </Flex>
    </Flex>
  );
};
