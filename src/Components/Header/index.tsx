import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";

export const Header = () => {
  return (
    <Flex as="header" w="100%" h="4rem" alignItems="center">
      <InputGroup w={"100%"}>
        <InputLeftElement
          pointerEvents="none"
          children={<BsSearch color="gray.300" />}
        />
        <Input type="text" placeholder="Procure Livros" />
      </InputGroup>

      <Flex w={"50%"} justifyContent="flex-end" alignItems="center">
        <Stack direction="row" spacing={4} alignItems="center">
          <Image
            alt={"minha foto"}
            src={require("../../assets/logo-canaa.png")}
            style={{
              width: "2.5rem",
              height: "2.5rem",
              maxWidth: "100%",
              objectFit: "contain",
              cursor: "pointer",
            }}
          />
          <Text className="max-sm:hidden" mr="1rem">
            Olá, Fulano
          </Text>
        </Stack>
      </Flex>
    </Flex>
  );
};
