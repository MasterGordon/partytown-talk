import Head from "next/head";
import { Center, Flex, Heading } from "@chakra-ui/react";
import { NextPage } from "../PageButton";

export default function Home() {
  return (
    <Flex height="100vh" width="100vw">
      <Head>
        <title>Cologne.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Center width="100%" height="100%" flexDir="column">
        <Heading as="h1" fontSize="7xl">
          Welcome to the Partytown 🎉 Talk
        </Heading>
        <Heading fontSize="3xl">Speaker: Gordon Goldbach</Heading>
        <Heading fontSize="2xl">
          Github: https://github.com/MasterGordon/partytown-talk
        </Heading>
        <Heading fontSize="2xl">
          Slides: https://partytown-talk.vercel.app/
        </Heading>
      </Center>
      <NextPage to="/overview" />
    </Flex>
  );
}
