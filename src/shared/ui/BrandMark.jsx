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
    _hover={{ opacity: 0.82 }}
  >
    <Text
      as="span"
      fontFamily="'Teko', sans-serif"
      fontSize="3xl"
      lineHeight="1"
      color="brand.cyan"
      letterSpacing="0.04em"
      textTransform="uppercase"
    >
      TL
    </Text>
    <Text
      as="span"
      display={{ base: "none", md: "inline" }}
      fontFamily="'Michroma', sans-serif"
      fontSize="9px"
      letterSpacing="0.28em"
      textTransform="uppercase"
      color="white"
    >
      Studio
    </Text>
  </Box>
);

export default BrandMark;
