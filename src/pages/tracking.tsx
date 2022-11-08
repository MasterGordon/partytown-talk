import Head from "next/head";
import Script from "next/script";
import { Center, Flex, Heading } from "@chakra-ui/react";
import { NextPage, PrevPage } from "../PageButton";

export default function Home() {
  return (
    <Flex height="100vh" width="100vw">
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-0K7HBMCYYR"
      ></Script>
      <Script id="ga">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-0K7HBMCYYR');`}
      </Script>
      <Head>
        <title>Cologne.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Center width="100%" height="100%" flexDir="column">
        <Heading as="h1" fontSize="4xl">
          Google Analytics
        </Heading>
      </Center>
      <PrevPage to="/blocking-partytown" />
      <NextPage to="/tracking-partytown" />
    </Flex>
  );
}
