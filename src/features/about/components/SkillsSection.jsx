// src/features/about/components/SkillsSection.jsx
import { Box, Heading, Text, Grid, Wrap, WrapItem, Tag } from "@chakra-ui/react";
import { useTranslation } from "../../../hooks/useTranslation";

const SkillsSection = ({ skills }) => {
  const { t } = useTranslation();

  return (
    <Box py={6}>
      <Heading as="h2" fontSize="4xl" mb={8} color="brand.ink">
        {t("about.skills.title")}
      </Heading>
      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
        {skills.map((skillGroup) => (
          <Box key={skillGroup.category} p={6} border="1px solid" borderColor="brand.line" bg="brand.cardBg" borderRadius="16px">
            <Text
              fontSize="sm"
              letterSpacing="0.06em"
              color="brand.muted"
              fontWeight="600"
              mb={4}
            >
              {t(`about.skills.categories.${skillGroup.category.toLowerCase()}`)}
            </Text>
            <Wrap spacing={2}>
              {skillGroup.items.map((skill) => (
                <WrapItem key={skill}>
                  <Tag
                    bg="transparent"
                    border="1px solid"
                    borderColor="brand.line"
                    color="brand.ink"
                    borderRadius="999px"
                    px={3}
                    py={1}
                  >
                    {t(`about.skills.items.${skill.trim().toLowerCase().replace(/\./g, "")}`, skill)}
                  </Tag>
                </WrapItem>
              ))}
            </Wrap>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default SkillsSection;
