import Head from "next/head";
import { Flex, Heading, Stack } from "@chakra-ui/react";
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
          The Event Loop
        </Heading>
        <Image
          src="/event-loop.png"
          alt="event-loop"
          width="1024"
          height="768"
        />
        <PrevPage to="/" />
        <NextPage to="/blocking" />
      </Stack>
    </Flex>
  );
}
