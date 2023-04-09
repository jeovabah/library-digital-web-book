import { Header } from "@/Components/Header";
import { Layout } from "@/Components/Layout";
import { Box, Flex, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Layout>
      <Flex w={"100%"}>
        <Flex w={"100%"} h={"100%"}>
          <Header />
        </Flex>
        {/* <Flex w={"35%"} backgroundColor={"#FDFBF7"} h={"100%"}>
          <Header header2 />
        </Flex> */}
      </Flex>
    </Layout>
  );
}
