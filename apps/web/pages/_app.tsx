import { ChakraProvider } from "@chakra-ui/react";
import { CurrentBreakpoint } from "@brahman-ui/react";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      <CurrentBreakpoint />
    </ChakraProvider>
  );
}

export default MyApp;
