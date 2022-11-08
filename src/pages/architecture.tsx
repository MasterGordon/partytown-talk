import Head from "next/head";
import { Flex, Heading, Stack } from "@chakra-ui/react";
import { NextPage, PrevPage } from "../PageButton";
import { PropsWithChildren } from "react";

interface ActorProps extends PropsWithChildren {
  name: string;
}

const Actor: React.FC<ActorProps> = ({ name, children }) => {
  return (
    <Stack fontSize="2xl" _hover={{ bg: "teal.800" }}>
      <Heading as="h2" fontSize="3xl">
        {name}
      </Heading>
      {children}
    </Stack>
  );
};

export default function Home() {
  return (
    <Flex height="100vh" width="100vw">
      <Head>
        <title>Cologne.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack width="100%" height="100%" padding="10">
        <Heading as="h1" fontSize="4xl">
          Architecture
        </Heading>
        <Actor name="Main Thread">
          <p>- DOM</p>
          <p>- BrowserAPI (e.g. cookie)</p>
          <p>- HTML</p>
          <p>- normal JavaScript</p>
          <p>- Partytown entry script</p>
        </Actor>
        <Actor name="Service Worker">
          <p>- intercepts http requests</p>
          <p>- calls Main Thread APIs</p>
        </Actor>
        <Actor name="Partytown Worker">
          <p>- document proxy</p>
          <p>- XHR-Requests</p>
          <p>- ThirdParty Scripts</p>
        </Actor>
      </Stack>
      <PrevPage to="/tracking-partytown" />
      <NextPage to="/thanks" />
    </Flex>
  );
}
