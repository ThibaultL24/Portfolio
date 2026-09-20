// src/shared/ui/SectionHeader.jsx
import { Box, Heading, Text } from "@chakra-ui/react";

const SectionHeader = ({ kicker, title, description }) => (
  <Box mb={{ base: 10, md: 14 }}>
    {kicker && (
      <Text
        fontFamily="'Michroma', sans-serif"
        fontSize="9px"
        letterSpacing="0.3em"
        textTransform="uppercase"
        color="brand.cyan"
        mb={3}
      >
        {kicker}
      </Text>
    )}
    <Heading
      as="h1"
      fontSize={{ base: "5xl", md: "7xl" }}
      fontWeight="500"
      letterSpacing="0.02em"
      mb={4}
      color="brand.ink"
      textTransform="uppercase"
    >
      {title}
    </Heading>
    {description && (
      <Text className="intro" maxW="640px">
        {description}
      </Text>
    )}
    <Box mt={8} h="2px" w="72px" bg="brand.cyan" />
  </Box>
);

export default SectionHeader;
