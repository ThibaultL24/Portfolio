// src/features/about/components/ExperienceSection.jsx
import { Box, Heading, Text, VStack, Flex } from "@chakra-ui/react";
import { useTranslation } from "../../../hooks/useTranslation";

const ExperienceSection = ({ experiences }) => {
  const { t } = useTranslation();

  return (
    <Box py={6}>
      <Heading as="h2" fontSize="3xl" mb={8}>
        {t("about.skills.experienceTitle")}
      </Heading>
      <VStack spacing={0} align="stretch">
        {experiences.map((exp, index) => (
          <Flex
            key={index}
            direction={{ base: "column", md: "row" }}
            gap={6}
            py={6}
            borderTop="1px solid rgba(201,163,106,0.14)"
          >
            <Text
              minW="140px"
              fontFamily="'IBM Plex Mono', monospace"
              fontSize="sm"
              color="brand.copper"
            >
              {exp.period}
            </Text>
            <Box>
              <Heading as="h3" fontSize="xl" mb={1} color="brand.parchment">
                {exp.title}
              </Heading>
              <Text color="brand.copper" mb={2}>
                {exp.company}
              </Text>
              <Text color="rgba(244,236,225,0.7)">{exp.description}</Text>
            </Box>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};

export default ExperienceSection;
