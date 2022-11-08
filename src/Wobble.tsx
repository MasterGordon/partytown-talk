import { Box, keyframes } from "@chakra-ui/react";

const wobble = keyframes(`
  30% { transform: scale(1.2); }
  40%, 60% { transform: rotate(-20deg) scale(1.2); }
  50% { transform: rotate(20deg) scale(1.2); }
  70% { transform: rotate(0deg) scale(1.2); }
  100% { transform: scale(1); }
`);

const Wobble = () => {
  return (
    <Box
      animation={wobble + " 1s ease infinite"}
      boxSize="20"
      background="hotpink"
    />
  );
};

export default Wobble;
