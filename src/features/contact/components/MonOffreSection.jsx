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
      <Heading as="h2" fontSize="3xl" mb={4} color="brand.ink">
        {t("contact.services.title")}
      </Heading>
      <Text fontSize="lg" color="brand.ink" opacity={0.72} mb={6}>
        {t("contact.services.description")}
      </Text>
      <VStack spacing={3} align="start" mb={6}>
        {items.map((key) => (
          <Text key={key} color="brand.ink" pl={3} borderLeft="2px solid" borderColor="brand.cyan">
            {t(`contact.services.${key}`)}
          </Text>
        ))}
      </VStack>
      <Text fontSize="sm" color="brand.cyan">
        {t("contact.services.pricing")}
      </Text>
    </Box>
  );
};

export default MonOffreSection;
