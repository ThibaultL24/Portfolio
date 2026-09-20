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
    <Box py={{ base: 12, md: 20 }} bg="white" mx={{ base: -4, md: -8, lg: -16 }} px={{ base: 4, md: 8, lg: 16 }}>
      <Flex
        justify="space-between"
        align={{ base: "flex-start", md: "end" }}
        mb={10}
        gap={4}
        wrap="wrap"
      >
        <Box>
          <Text fontSize="sm" letterSpacing="0.08em" color="brand.cyan" fontWeight="600" mb={2}>
            {t("home.selected.kicker")}
          </Text>
          <Heading as="h2" fontSize={{ base: "4xl", md: "5xl" }} fontWeight="400" color="brand.ink">
            {t("home.selected.title")}
          </Heading>
        </Box>
        <Button as={RouterLink} to="/projects" variant="outline">
          {t("home.selected.more")}
        </Button>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
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
