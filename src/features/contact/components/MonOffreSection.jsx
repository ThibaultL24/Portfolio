// src/features/contact/components/MonOffreSection.jsx
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { useTranslation } from "../../../hooks/useTranslation";

const MonOffreSection = () => {
  const { t } = useTranslation();
  const items = [
    "webDevelopment",
    "portfolioCreation",
    "uiuxDesign",
    "technicalConsulting",
    "writing",
  ];

  return (
    <Box>
      <Heading as="h2" fontSize="2xl" mb={4}>
        {t("contact.services.title")}
      </Heading>
      <Text fontSize="lg" color="rgba(244,236,225,0.72)" mb={6}>
        {t("contact.services.description")}
      </Text>
      <VStack spacing={3} align="start" mb={6}>
        {items.map((key) => (
          <Text key={key} color="rgba(244,236,225,0.8)" pl={3} borderLeft="2px solid" borderColor="brand.copper">
            {t(`contact.services.${key}`)}
          </Text>
        ))}
      </VStack>
      <Text fontSize="sm" color="brand.copper">
        {t("contact.services.pricing")}
      </Text>
    </Box>
  );
};

export default MonOffreSection;
