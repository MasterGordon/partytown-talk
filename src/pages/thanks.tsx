import Head from "next/head";
import { Center, Flex, Heading } from "@chakra-ui/react";
import { NextPage, PrevPage } from "../PageButton";
import dynamic from "next/dynamic";
import { ConfettiCanvas } from "react-raining-confetti";
import { useEffect, useState } from "react";

export default function Home() {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <Flex height="100vh" width="100vw">
      <Head>
        <title>Cologne.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Center width="100%" height="100%" flexDir="column">
        <Heading as="h1" fontSize="7xl">
          Thanks for your attention 🙏
        </Heading>
        <Heading fontSize="3xl">
          Github: https://github.com/MasterGordon/partytown-talk
        </Heading>
        <Heading fontSize="3xl">
          Slides: https://partytown-talk.vercel.app/
        </Heading>
      </Center>
      {client && <ConfettiCanvas fadingMode="DARK" active={true} />}
      <PrevPage to="/architecture" />
    </Flex>
  );
}
