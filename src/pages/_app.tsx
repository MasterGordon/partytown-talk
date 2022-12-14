import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider
      theme={extendTheme({
        config: {
          initialColorMode: "dark",
        },
      })}
    >
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
