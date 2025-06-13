import { Box, Heading, Text } from "@chakra-ui/react";
import { useTranslation } from "../../../hooks/useTranslation";
import NeonBeamDivider from "../../../shared/components/NeonBeamDivider";

const CreationsHeader = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Heading as="h1" size="2xl" mb={4}>
        {t("creations.title")}
      </Heading>
      <Text className="intro" fontSize="lg" maxW="container.md">
        {t("creations.description")}
      </Text>
      <NeonBeamDivider mt={6} mb={2} />
    </Box>
  );
};

export default CreationsHeader;
