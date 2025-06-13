import {
  Box,
  Heading,
  Text,
  Icon,
  Grid,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { FaCheckCircle, FaCode } from "react-icons/fa";
import { useTranslation } from "../../../hooks/useTranslation";
import NeonBeamDivider from "../../../shared/components/NeonBeamDivider";
import NeonBeamDividerVertical from "../../../shared/components/NeonBeamDividerVertical";

const SkillsSection = ({ skills }) => {
  const { t } = useTranslation();

  return (
    <Box>
      <Heading as="h2" size="lg" mb={8} display="flex" alignItems="center">
        <Icon as={FaCode} mr={3} color="white" />
        {t("about.skills.title")}
      </Heading>

      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={8}
      >
        {skills.map((skillGroup, index) => (
          <Box
            key={index}
            p={6}
            position="relative"
            borderRadius="lg"
            overflow="hidden"
          >
            {/* Neon en haut */}
            <NeonBeamDivider
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                zIndex: 2,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
              }}
              height="2px"
            />
            {/* Neon en bas */}
            <NeonBeamDivider
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                zIndex: 2,
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12,
              }}
              height="2px"
            />
            {/* Neon à gauche (vertical, vrai effet) */}
            <NeonBeamDividerVertical
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                zIndex: 2,
                borderTopLeftRadius: 12,
                borderBottomLeftRadius: 12,
              }}
              width="2px"
            />
            {/* Neon à droite (vertical, vrai effet) */}
            <NeonBeamDividerVertical
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                height: "100%",
                zIndex: 2,
                borderTopRightRadius: 12,
                borderBottomRightRadius: 12,
              }}
              width="2px"
            />
            <Heading as="h3" size="md" mb={4}>
              {t(
                `about.skills.categories.${skillGroup.category.toLowerCase()}`
              )}
            </Heading>
            <List spacing={3}>
              {skillGroup.items.map((skill, idx) => (
                <ListItem key={idx} display="flex" alignItems="center">
                  <ListIcon as={FaCheckCircle} color="gray.500" />
                  <Text>
                    {t(
                      `about.skills.items.${skill.trim().toLowerCase()}`,
                      skill
                    )}
                  </Text>
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default SkillsSection;
