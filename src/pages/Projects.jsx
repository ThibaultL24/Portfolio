import { Box } from "@chakra-ui/react";
import ProjectsContainer from "../features/projects/ProjectsContainer";
import PageLayout from "../shared/layout/PageLayout";
import { PageMeta } from "../shared/components/PageMeta";

export default function Projects() {
  return (
    <Box as="section" id="projects" minH="100vh" w="100%">
      <PageMeta titleKey="projects.metaTitle" descriptionKey="projects.metaDescription" />
      <PageLayout>
        <ProjectsContainer />
      </PageLayout>
    </Box>
  );
}
