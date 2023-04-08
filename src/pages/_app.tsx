import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Providers } from "@/Providers";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </ChakraProvider>
  );
}
