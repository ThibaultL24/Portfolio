import { Grid, VStack, Text } from "@chakra-ui/react";
import ProjectCard from "../../../shared/ui/ProjectCard";
import { useTranslation } from "../../../hooks/useTranslation";
import patteAPatteImg from "../../../assets/img/patte_a_patte.svg";
import decentRepImg from "../../../assets/img/decentrep/img_decentrep.webp";
import graphImg from "../../../assets/img/graph/graph1.png";
import agentImg from "../../../assets/img/agent.gif";
import playerMapImg from "../../../assets/img/agentplayermap.png";

const ProjectsList = () => {
  const { t } = useTranslation();

  const PROJECTS = [
    {
      id: 4,
      title: t("projects.list.project4.title"),
      description: t("projects.list.project4.description"),
      imageSrc: agentImg,
      github: "https://github.com/Agent-BossFighters",
    },
    {
      id: 5,
      title: t("projects.list.project5.title"),
      description: t("projects.list.project5.description"),
      imageSrc: playerMapImg,
      github: "https://github.com/Agent-BossFighters/Player-map",
      production: "https://devfolio.co/projects/agent-player-map-759e",
    },
    {
      id: 2,
      title: t("projects.list.project2.title"),
      description: t("projects.list.project2.description"),
      imageSrc: graphImg,
      production: "https://graph.i7n.thp-lab.org/",
    },
    {
      id: 3,
      title: t("projects.list.project3.title"),
      description: t("projects.list.project3.description"),
      imageSrc: decentRepImg,
      github: "https://github.com/THP-Lab/intuition-recommendation-assistant",
    },
    {
      id: 1,
      title: t("projects.list.project1.title"),
      description: t("projects.list.project1.description"),
      imageSrc: patteAPatteImg,
      github: "https://github.com/Paupiety/patte-a-patte",
    },
  ];

  return (
    <VStack spacing={12} w="100%" py={8}>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={8}
        w="100%"
      >
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            projectId={project.id}
            github={project.github}
            production={project.production}
          />
        ))}
      </Grid>
    </VStack>
  );
};

export default ProjectsList;
