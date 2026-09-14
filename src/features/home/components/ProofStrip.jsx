// src/features/home/components/ProofStrip.jsx
import { Box, SimpleGrid, Text, Link, Heading } from "@chakra-ui/react";
import { useTranslation } from "../../../hooks/useTranslation";

const ProofStrip = () => {
  const { t } = useTranslation();
  const items = t("home.proof.items");

  if (!Array.isArray(items)) return null;

  return (
    <Box as="section" aria-labelledby="proof-heading" pb={{ base: 6, md: 8 }}>
      <Text
        fontFamily="'IBM Plex Mono', monospace"
        fontSize="xs"
        letterSpacing="0.28em"
        textTransform="uppercase"
        color="brand.copper"
        mb={3}
      >
        {t("home.proof.kicker")}
      </Text>
      <Heading as="h2" id="proof-heading" fontSize={{ base: "2xl", md: "3xl" }} mb={6}>
        {t("home.proof.title")}
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        {items.map((item) => (
          <Box
            key={item.name}
            p={5}
            border="1px solid rgba(201,163,106,0.2)"
            borderRadius="16px"
            bg="rgba(20,17,14,0.55)"
          >
            <Text fontSize="sm" color="rgba(244,236,225,0.78)" lineHeight="1.7" mb={3}>
              “{item.quote}”
            </Text>
            <Text
              fontFamily="'IBM Plex Mono', monospace"
              fontSize="xs"
              letterSpacing="0.08em"
              color="brand.copper"
            >
              {item.name}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
      <Link href="#recommandations" color="brand.copper" fontSize="sm" mt={4} display="inline-block">
        {t("home.proof.more")}
      </Link>
    </Box>
  );
};

export default ProofStrip;
