import { Icon, IconButton, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export const NextPage: React.FC<{ to: string }> = ({ to }) => {
  return (
    <NextLink href={to} legacyBehavior passHref>
      <IconButton
        position="fixed"
        bottom="0.2em"
        right="0.5em"
        as={Link}
        aria-label="Next"
        fontSize="5em"
        size="5em"
        variant="unstyled"
        icon={<Icon as={FaArrowAltCircleRight} />}
      />
    </NextLink>
  );
};
export const PrevPage: React.FC<{ to: string }> = ({ to }) => {
  return (
    <NextLink href={to} legacyBehavior passHref>
      <IconButton
        position="fixed"
        bottom="0.2em"
        left="0.5em"
        as={Link}
        aria-label="Next"
        fontSize="5em"
        size="5em"
        variant="unstyled"
        icon={<Icon as={FaArrowAltCircleLeft} />}
      />
    </NextLink>
  );
};
