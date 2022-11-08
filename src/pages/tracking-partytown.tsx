/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import { Center, Flex, Heading } from "@chakra-ui/react";
import { NextPage, PrevPage } from "../PageButton";
import { Partytown } from "@builder.io/partytown/react";

export default function Home() {
  return (
    <Flex height="100vh" width="100vw">
      <Head>
        <title>Cologne.js</title>
        <link rel="icon" href="/favicon.ico" />
        <Partytown debug={true} forward={["dataLayer.push"]} />
        <script
          type="text/partytown"
          src="https://www.googletagmanager.com/gtag/js?id=G-0K7HBMCYYR"
        />
        <script
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-0K7HBMCYYR');`,
          }}
        />
      </Head>

      <Center width="100%" height="100%" flexDir="column">
        <Heading as="h1" fontSize="4xl">
          Google Analytics with Partytown 🎉
        </Heading>
      </Center>
      <PrevPage to="/tracking" />
      <NextPage to="/architecture" />
    </Flex>
  );
}
