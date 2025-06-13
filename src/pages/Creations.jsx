import { Box } from "@chakra-ui/react";
import CreationsContainer from "../features/creations/CreationsContainer";
import PageLayout from "../shared/layout/PageLayout";

const Creations = () => {
  return (
    <Box as="section" id="creations" minH="100vh" w="100%">
      <PageLayout>
        <CreationsContainer />
      </PageLayout>
    </Box>
  );
};

export default Creations;
