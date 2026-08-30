// src/shared/ui/BrandMark.jsx
import { Box, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const BrandMark = () => (
  <Box
    as={RouterLink}
    to="/"
    display="flex"
    alignItems="baseline"
    gap={3}
    _hover={{ opacity: 0.86 }}
  >
    <Text
      as="span"
      fontFamily="'Fraunces', serif"
      fontStyle="italic"
      fontSize="xl"
      color="brand.copper"
      letterSpacing="-0.04em"
    >
      TL
    </Text>
    <Text
      as="span"
      display={{ base: "none", md: "inline" }}
      fontFamily="'IBM Plex Mono', monospace"
      fontSize="11px"
      letterSpacing="0.22em"
      textTransform="uppercase"
      color="brand.parchment"
      opacity={0.55}
    >
      Atelier
    </Text>
  </Box>
);

export default BrandMark;
