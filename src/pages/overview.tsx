import Head from "next/head";
import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import { NextPage, PrevPage } from "../PageButton";
import Image from "next/image";

export default function Home() {
  return (
    <Flex height="100vh" width="100vw">
      <Head>
        <title>Cologne.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Stack width="100%" height="100%" padding="10">
        <Heading as="h1" fontSize="7xl">
          Overview
        </Heading>
        <Stack fontSize="5xl">
          <p>- How does the JavaScript event loop work?</p>
          <p>
            - What issues bring the Event Loop and Third-Party Scripts together?
          </p>
          <p>- How does Partytown help dealing with the issues?</p>
          <p>- How does Partytown work?</p>
        </Stack>
        <PrevPage to="/" />
        <NextPage to="/event-loop" />
      </Stack>
    </Flex>
  );
}
