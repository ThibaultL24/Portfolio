// src/features/home/components/FeaturedWork.jsx
import { Box, Flex, Heading, Text, Button, SimpleGrid } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "../../../hooks/useTranslation";
import { PROJECT_CATALOG } from "../../projects/data/projects";
import ProjectCard from "../../../shared/ui/ProjectCard";

const FeaturedWork = () => {
  const { t } = useTranslation();
  const featured = PROJECT_CATALOG.filter((project) => project.featured);

  return (
    <Box py={{ base: 10, md: 16 }}>
      <Flex
        justify="space-between"
        align={{ base: "flex-start", md: "end" }}
        mb={10}
        gap={4}
        wrap="wrap"
      >
        <Box>
          <Text
            fontFamily="'IBM Plex Mono', monospace"
            fontSize="xs"
            letterSpacing="0.28em"
            textTransform="uppercase"
            color="brand.copper"
            mb={2}
          >
            {t("home.selected.kicker")}
          </Text>
          <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }} fontWeight="500">
            {t("home.selected.title")}
          </Heading>
        </Box>
        <Button as={RouterLink} to="/projects" variant="outline">
          {t("home.selected.more")}
        </Button>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        {featured.map((project) => (
          <ProjectCard
            key={project.id}
            featured
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
      </SimpleGrid>
    </Box>
  );
};

export default FeaturedWork;
