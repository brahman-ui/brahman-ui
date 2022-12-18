import { ChakraProvider } from "@chakra-ui/react";
import { Breakpoint } from "@brahman-ui/react";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      <Breakpoint />
    </ChakraProvider>
  );
}

export default MyApp;
