// src/shared/ui/SectionHeader.jsx
import { Box, Heading, Text } from "@chakra-ui/react";
import NeonBeamDivider from "../components/NeonBeamDivider";

const SectionHeader = ({ kicker, title, description }) => (
  <Box mb={{ base: 10, md: 14 }}>
    {kicker && (
      <Text
        fontFamily="'IBM Plex Mono', monospace"
        fontSize="xs"
        letterSpacing="0.28em"
        textTransform="uppercase"
        color="brand.copper"
        mb={3}
      >
        {kicker}
      </Text>
    )}
    <Heading
      as="h1"
      fontSize={{ base: "4xl", md: "6xl" }}
      fontWeight="500"
      letterSpacing="-0.04em"
      mb={4}
    >
      {title}
    </Heading>
    {description && (
      <Text className="intro" maxW="640px">
        {description}
      </Text>
    )}
    <NeonBeamDivider mt={8} />
  </Box>
);

export default SectionHeader;
