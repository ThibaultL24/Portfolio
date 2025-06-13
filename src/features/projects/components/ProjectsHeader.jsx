import { Box, Heading, Text } from "@chakra-ui/react";
import { useTranslation } from "../../../hooks/useTranslation";
import NeonBeamDivider from "../../../shared/components/NeonBeamDivider";

const ProjectsHeader = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Heading as="h1" size="2xl" mb={4}>
        {t("projects.title")}
      </Heading>
      <Text className="intro" fontSize="lg" maxW="container.md">
        {t("projects.description")}
      </Text>
      <NeonBeamDivider mt={6} mb={2} />
    </Box>
  );
};

export default ProjectsHeader;
