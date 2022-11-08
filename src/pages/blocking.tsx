import Head from "next/head";
import { Box, Button, Flex, Heading, keyframes, Stack } from "@chakra-ui/react";
import { NextPage, PrevPage } from "../PageButton";
import { useEffect, useState } from "react";
import Wobble from "../Wobble";

function generatePi(count: number) {
  var inside = 0;

  for (var i = 0; i < count; i++) {
    var x = Math.random() * 2 - 1;
    var y = Math.random() * 2 - 1;
    if (x * x + y * y < 1) {
      inside++;
    }
  }

  return (4.0 * inside) / count;
}

export default function Home() {
  const [counter, setCounter] = useState(0);
  const [pi, setPi] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setCounter((c) => c + 1), 50);
    return () => clearInterval(interval);
  }, []);
  return (
    <Flex height="100vh" width="100vw">
      <Head>
        <title>Cologne.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Stack width="100%" height="100%" padding="10" spacing="4">
        <Heading as="h1" fontSize="7xl">
          Blocking the Event Loop
        </Heading>
        <Heading>Counter {counter}</Heading>
        <Heading>
          Pi {pi || "🥧"}{" "}
          <Button onClick={() => setPi(generatePi(200_000_000))}>
            Calculate Pi
          </Button>
        </Heading>
        <Heading
          _hover={{
            color: "hotpink",
            fontStyle: "italic",
          }}
        >
          Hover Me
        </Heading>
        <Wobble />
        <PrevPage to="/event-loop" />
        <NextPage to="/intro-partytown" />
      </Stack>
    </Flex>
  );
}
