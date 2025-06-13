import { Box, Heading, Text, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { useTranslation } from "../../../hooks/useTranslation";

const MonOffreSection = () => {
  const { t } = useTranslation();

  return (
    <Box py={0} px={2}>
      <Heading as="h2" size="lg" mb={4} color="brand.neon">
        {t("contact.services.title")}
      </Heading>
      <Text fontSize="lg" color="gray.300" mb={6}>
        {t("contact.services.description")}
      </Text>
      <VStack spacing={4} align="start" mb={4}>
        <HStack>
          <Icon as={FaCheckCircle} color="brand.neon" />
          <Text fontSize="md" color="gray.300">
            {t("contact.services.webDevelopment")}
          </Text>
        </HStack>
        <HStack>
          <Icon as={FaCheckCircle} color="brand.neon" />
          <Text fontSize="md" color="gray.300">
            {t("contact.services.portfolioCreation")}
          </Text>
        </HStack>
        <HStack>
          <Icon as={FaCheckCircle} color="brand.neon" />
          <Text fontSize="md" color="gray.300">
            {t("contact.services.uiuxDesign")}
          </Text>
        </HStack>
        <HStack>
          <Icon as={FaCheckCircle} color="brand.neon" />
          <Text fontSize="md" color="gray.300">
            {t("contact.services.technicalConsulting")}
          </Text>
        </HStack>
        <HStack>
          <Icon as={FaCheckCircle} color="brand.neon" />
          <Text fontSize="md" color="gray.300">
            {t("contact.services.writing")}
          </Text>
        </HStack>
      </VStack>
      <Text fontSize="md" color="gray.400">
        {t("contact.services.pricing")}
      </Text>
    </Box>
  );
};

export default MonOffreSection;
