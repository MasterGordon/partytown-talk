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
          Introducing Partytown 🎉
        </Heading>
        <Stack>
          <p>
            - Free up main thread resources to be used only for the primary web
            app execution.
          </p>
          <p>
            - Sandbox third-party scripts and allow or deny their access to main
            thread APIs.
          </p>
          <p>- Isolate long-running tasks within the web worker thread.</p>
          <p>
            - Reduce layout thrashing coming from third-party scripts by
            batching DOM setters/getter into group updates.
          </p>
          <p>- Throttle third-party scripts’ access to the main thread.</p>
          <p>
            - Allow third-party scripts to run exactly how they’re coded and
            without any alterations.
          </p>
          <p>
            - Read and write main thread DOM operations synchronously from
            within a web worker, allowing scripts running from the web worker to
            execute as expected.
          </p>
          <Box bg="white">
            <Image src="/arch.png" alt="event-loop" width="800" height="450" />
          </Box>
        </Stack>
        <PrevPage to="/" />
        <NextPage to="/blocking" />
        <NextPage to="/blocking-partytown" />
      </Stack>
    </Flex>
  );
}
