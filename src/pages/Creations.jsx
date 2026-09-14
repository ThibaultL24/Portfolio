import { Box } from "@chakra-ui/react";
import CreationsContainer from "../features/creations/CreationsContainer";
import PageLayout from "../shared/layout/PageLayout";
import { PageMeta } from "../shared/components/PageMeta";

const Creations = () => {
  return (
    <Box as="section" id="creations" minH="100vh" w="100%">
      <PageMeta titleKey="creations.metaTitle" descriptionKey="creations.metaDescription" />
      <PageLayout>
        <CreationsContainer />
      </PageLayout>
    </Box>
  );
};

export default Creations;
