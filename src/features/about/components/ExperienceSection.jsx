// src/features/about/components/ExperienceSection.jsx
import { Box, Heading, Text, VStack, Flex } from "@chakra-ui/react";
import { useTranslation } from "../../../hooks/useTranslation";

const ExperienceSection = ({ experiences }) => {
  const { t } = useTranslation();

  return (
    <Box py={6}>
      <Heading as="h2" fontSize="4xl" mb={8} color="brand.ink">
        {t("about.skills.experienceTitle")}
      </Heading>
      <VStack spacing={0} align="stretch">
        {experiences.map((exp, index) => (
          <Flex
            key={index}
            direction={{ base: "column", md: "row" }}
            gap={6}
            py={6}
            borderTop="1px solid rgba(17,19,24,0.12)"
          >
            <Text minW="140px" fontSize="sm" color="brand.muted" fontWeight="600">
              {exp.period}
            </Text>
            <Box>
              <Heading as="h3" fontSize="2xl" mb={1} color="brand.ink">
                {exp.title}
              </Heading>
              <Text color="brand.muted" mb={2}>
                {exp.company}
              </Text>
              <Text color="brand.ink" opacity={0.7}>
                {exp.description}
              </Text>
            </Box>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};

export default ExperienceSection;
