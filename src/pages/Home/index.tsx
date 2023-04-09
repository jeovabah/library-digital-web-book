import { Copy } from "@/Components/Copy";
import { Header } from "@/Components/Header";
import { Layout } from "@/Components/Layout";
import { Box, Flex, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Layout>
      <Box w={"100%"} h={"100%"}>
        <Flex w={"100%"}>
          <Header />
        </Flex>
        <Copy />
      </Box>
    </Layout>
  );
}
