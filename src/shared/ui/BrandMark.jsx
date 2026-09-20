// src/shared/ui/BrandMark.jsx
import { Box, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const BrandMark = () => (
  <Box
    as={RouterLink}
    to="/"
    display="flex"
    alignItems="baseline"
    gap={2}
    _hover={{ opacity: 0.86 }}
  >
    <Text
      as="span"
      fontFamily="'Syne', sans-serif"
      fontSize="2xl"
      lineHeight="1"
      color="brand.ink"
      fontWeight="700"
    >
      Thibault
    </Text>
    <Text
      as="span"
      display={{ base: "none", md: "inline" }}
      fontFamily="'Outfit', sans-serif"
      fontSize="sm"
      color="brand.cyan"
    >
      Lenormand
    </Text>
  </Box>
);

export default BrandMark;
