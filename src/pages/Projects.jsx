import { Box } from "@chakra-ui/react";
import ProjectsContainer from "../features/projects/ProjectsContainer";
import PageLayout from "../shared/layout/PageLayout";

export default function Projects() {
  return (
    <Box as="section" id="projects" minH="100vh" w="100%">
      <PageLayout>
        <ProjectsContainer />
      </PageLayout>
    </Box>
  );
}
