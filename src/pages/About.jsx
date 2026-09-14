import { Box } from "@chakra-ui/react";
import AboutContainer from "../features/about/AboutContainer";
import PageLayout from "../shared/layout/PageLayout";
import { PageMeta } from "../shared/components/PageMeta";

export default function About() {
  return (
    <Box as="section" id="about" minH="100vh" w="100%">
      <PageMeta titleKey="about.metaTitle" descriptionKey="about.metaDescription" />
      <PageLayout>
        <AboutContainer />
      </PageLayout>
    </Box>
  );
}
