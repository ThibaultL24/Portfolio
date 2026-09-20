// src/features/about/components/EducationSection.jsx
import { Box, Heading, Text, VStack, Flex } from "@chakra-ui/react";
import { useTranslation } from "../../../hooks/useTranslation";

const EducationSection = ({ education }) => {
  const { t } = useTranslation();

  return (
    <Box py={6}>
      <Heading as="h2" fontSize="4xl" mb={8} color="brand.ink">
        {t("about.skills.educationTitle")}
      </Heading>
      <VStack spacing={0} align="stretch">
        {education.map((edu, index) => (
          <Flex
            key={index}
            direction={{ base: "column", md: "row" }}
            gap={6}
            py={6}
            borderTop="1px solid rgba(17,19,24,0.12)"
          >
            <Text minW="140px" fontFamily="'Michroma', sans-serif" fontSize="10px" color="brand.cyan">
              {edu.period}
            </Text>
            <Box>
              <Heading as="h3" fontSize="2xl" mb={1} color="brand.ink">
                {edu.degree}
              </Heading>
              <Text color="brand.ink" opacity={0.7}>
                {edu.school}
              </Text>
            </Box>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};

export default EducationSection;
