import { Box, Text, Flex, Button } from "@chakra-ui/react";
import bookCopy from "../../assets/book.jpg";
import Image from "next/image";
import { ButtonComponent } from "../ButtonComponent";
import { FiArrowUpRight } from "react-icons/fi";
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
      <Flex justifyContent={"center"} w={"100%"} mt={"0.5rem"}>
        <Image
          src={bookCopy}
          alt="book copy"
          style={{
            borderRadius: "10px",
            width: "100%",
            height: "100%",
            maxWidth: "190px",
            maxHeight: "275px",
            objectFit: "cover",
            objectPosition: "center",
            mixBlendMode: "multiply",
          }}
        />
      </Flex>

      <Box mt="1.5rem">
        <ButtonComponent
          onClick={(event) => {
            console.log(event);
          }}
          color="#fff"
          icon={
            <>
              <FiArrowUpRight color="#fff" size={"1rem"} />
            </>
          }
          title={"Iniciar leitura"}
        />
      </Box>
    </Flex>
  );
};
