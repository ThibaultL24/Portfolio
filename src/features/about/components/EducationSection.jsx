// src/features/about/components/EducationSection.jsx
import { Box, Heading, Text, VStack, Flex } from "@chakra-ui/react";
import { useTranslation } from "../../../hooks/useTranslation";

const EducationSection = ({ education }) => {
  const { t } = useTranslation();

  return (
    <Box py={6}>
      <Heading as="h2" fontSize="3xl" mb={8}>
        {t("about.skills.educationTitle")}
      </Heading>
      <VStack spacing={0} align="stretch">
        {education.map((edu, index) => (
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
              {edu.period}
            </Text>
            <Box>
              <Heading as="h3" fontSize="xl" mb={1} color="brand.parchment">
                {edu.degree}
              </Heading>
              <Text color="rgba(244,236,225,0.7)">{edu.school}</Text>
            </Box>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};

export default EducationSection;
