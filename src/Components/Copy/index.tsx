import { Box, Text, Flex } from "@chakra-ui/react";
import bookCopy from "../../assets/book-copy.png";
import Image from "next/image";
export const Copy = () => {
  return (
    <Flex
      w={"100%"}
      className="max-sm:flex-col lg:flex-row"
      alignItems={"center"}
    >
      <Box w={"100%"} textAlign={"center"}>
        <Text fontWeight={400} fontSize={"1.5rem"}>
          Seja feliz lendo e aprendendo
        </Text>
        <Box mt="1rem">
          <Text fontWeight={400} fontSize={"1rem"}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            beatae earum nemo cupiditate, similique doloremque illum fuga. Id
            excepturi deserunt iste. Quos non, iste veritatis alias libero dicta
            architecto vero.
          </Text>
        </Box>
      </Box>
      <Box w={"100%"} mx={"1rem"} mt="1.5rem">
        <Image
          src={bookCopy}
          alt="book copy"
          style={{
            borderRadius: "10px",
            width: "100%",
            height: "100%",
            maxWidth: "400px",
            maxHeight: "400px",
            objectFit: "cover",
            objectPosition: "center",
            mixBlendMode: "multiply",
          }}
        />
      </Box>
    </Flex>
  );
};
