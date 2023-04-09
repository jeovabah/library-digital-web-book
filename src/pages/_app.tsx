import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { Providers } from "@/Providers";
import { useAuth } from "@/Providers/AuthProvider";
import Login from ".";
import { useEffect, useState } from "react";
import { checkIsPublicRoute } from "@/Routes";
import { PrivateRoute } from "@/Components/PrivateRoute";
export default function App({ Component, pageProps }: AppProps) {
  const [isAuth, setIsAuth] = useState(false);

  const pathname = usePathname();

  const isPublicRoute = checkIsPublicRoute(pathname);

  return (
    <ChakraProvider>
      <Providers>
        {isPublicRoute && <Component {...pageProps} />}

        {!isPublicRoute && (
          <PrivateRoute>
            <Component {...pageProps} />
          </PrivateRoute>
        )}
      </Providers>
    </ChakraProvider>
  );
}
