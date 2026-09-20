// src/shared/ui/SectionHeader.jsx
import { Box, Heading, Text } from "@chakra-ui/react";

const SectionHeader = ({ kicker, title, description }) => (
  <Box mb={{ base: 10, md: 14 }}>
    {kicker && (
      <Text
        fontSize="sm"
        letterSpacing="0.08em"
        color="brand.cyan"
        fontWeight="600"
        mb={3}
      >
        {kicker}
      </Text>
    )}
    <Heading
      as="h1"
      fontSize={{ base: "4xl", md: "6xl" }}
      fontWeight="400"
      letterSpacing="-0.03em"
      mb={4}
      color="brand.ink"
    >
      {title}
    </Heading>
    {description && (
      <Text className="intro" maxW="640px">
        {description}
      </Text>
    )}
    <Box mt={8} h="1px" w="56px" bg="brand.cyan" />
  </Box>
);

export default SectionHeader;
