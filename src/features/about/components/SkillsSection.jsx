// src/features/about/components/SkillsSection.jsx
import { Box, Heading, Text, Grid, Wrap, WrapItem, Tag } from "@chakra-ui/react";
import { useTranslation } from "../../../hooks/useTranslation";

const SkillsSection = ({ skills }) => {
  const { t } = useTranslation();

  return (
    <Box py={6}>
      <Heading as="h2" fontSize="3xl" mb={8}>
        {t("about.skills.title")}
      </Heading>
      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
        {skills.map((skillGroup) => (
          <Box
            key={skillGroup.category}
            p={6}
            border="1px solid rgba(201,163,106,0.16)"
            borderRadius="20px"
            bg="rgba(20,17,14,0.6)"
          >
            <Text
              fontFamily="'IBM Plex Mono', monospace"
              fontSize="xs"
              letterSpacing="0.2em"
              textTransform="uppercase"
              color="brand.copper"
              mb={4}
            >
              {t(`about.skills.categories.${skillGroup.category.toLowerCase()}`)}
            </Text>
            <Wrap spacing={2}>
              {skillGroup.items.map((skill) => (
                <WrapItem key={skill}>
                  <Tag
                    bg="transparent"
                    border="1px solid rgba(201,163,106,0.25)"
                    color="brand.parchment"
                    borderRadius="full"
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
