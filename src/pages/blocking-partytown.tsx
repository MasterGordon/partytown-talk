import Head from "next/head";
import { Button, Flex, Heading, Stack } from "@chakra-ui/react";
import { NextPage, PrevPage } from "../PageButton";
import { useEffect, useState } from "react";
import { Partytown } from "@builder.io/partytown/react";
import Wobble from "../Wobble";

const ourThirdPartyScript = `
function generatePi(count) {
  var inside = 0;

  for (var i = 0; i < count; i++) {
    var x = Math.random() * 2 - 1;
    var y = Math.random() * 2 - 1;
    if (x * x + y * y < 1) {
      inside++;
    }
  }

  return (4.0 * inside) / count;
};
document.addEventListener("click", (e) => {
  if (e.target.id === "calc-pi") {
    console.log("starting blocking script");
    debugger;
    document.getElementById("pi").innerText = "Calculating...";
    document.getElementById('pi').innerText = generatePi(20_000_000);
    console.log("done blocking script");
  }
});
`;

export default function Home() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setCounter((c) => c + 1), 50);
    return () => clearInterval(interval);
  }, []);
  return (
    <Flex height="100vh" width="100vw">
      <Head>
        <title>Cologne.js</title>
        <link rel="icon" href="/favicon.ico" />
        <Partytown debug={true} />
        <script
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: ourThirdPartyScript,
          }}
        />
      </Head>

      <Stack width="100%" height="100%" padding="10" spacing="4">
        <Heading as="h1" fontSize="7xl">
          Lets get Partytown started 🎉
        </Heading>
        <Heading>Counter {counter}</Heading>
        <Heading>
          Pi <span id="pi"></span> <Button id="calc-pi">Calculate Pi</Button>
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
        <PrevPage to="/intro-partytown" />
        <NextPage to="/tracking" />
      </Stack>
    </Flex>
  );
}
