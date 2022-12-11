import { ChakraProvider } from "@chakra-ui/react";
import { Breakpoint } from "ui";
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
