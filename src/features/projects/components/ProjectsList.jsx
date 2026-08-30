// src/features/projects/components/ProjectsList.jsx
import { useState } from "react";
import { Grid, VStack, HStack, Button, Text } from "@chakra-ui/react";
import ProjectCard from "../../../shared/ui/ProjectCard";
import { useTranslation } from "../../../hooks/useTranslation";
import { PROJECT_CATALOG, PROJECT_FILTERS } from "../data/projects";

const ProjectsList = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all");

  const visible = PROJECT_CATALOG.filter(
    (project) => filter === "all" || project.category === filter
  );

  return (
    <VStack spacing={10} w="100%" align="stretch">
      <HStack spacing={3} wrap="wrap">
        {PROJECT_FILTERS.map((key) => (
          <Button
            key={key}
            size="sm"
            variant={filter === key ? "solid" : "outline"}
            onClick={() => setFilter(key)}
          >
            {t(`projects.filters.${key}`)}
          </Button>
        ))}
      </HStack>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={8}
        w="100%"
      >
        {visible.map((project) => (
          <ProjectCard
            key={project.id}
            featured={project.featured}
            title={t(`projects.list.${project.key}.title`)}
            description={t(`projects.list.${project.key}.description`)}
            imageSrc={project.imageSrc}
            projectId={project.id}
            year={project.year}
            category={project.category}
            accent={project.accent}
            motif={project.motif}
          />
        ))}
      </Grid>
      {visible.length === 0 && (
        <Text color="rgba(244,236,225,0.55)">—</Text>
      )}
    </VStack>
  );
};

export default ProjectsList;
