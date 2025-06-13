import { Box } from "@chakra-ui/react";
import AboutContainer from "../features/about/AboutContainer";
import PageLayout from "../shared/layout/PageLayout";

export default function About() {
  return (
    <Box as="section" id="about" minH="100vh" w="100%">
      <PageLayout>
        <AboutContainer />
      </PageLayout>
    </Box>
  );
}
