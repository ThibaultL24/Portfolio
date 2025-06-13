import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Link,
  VStack,
  HStack,
  Tag,
  Divider,
  AspectRatio,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useTranslation } from "../hooks/useTranslation";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import decentRepImg1 from "../assets/img/decentrep/decentrep1.png";
import decentRepImg2 from "../assets/img/decentrep/decentrep2.png";
import decentRepImg3 from "../assets/img/decentrep/decentrep3.png";
import graphImg2 from "../assets/img/graph/graph2.png";
import graphImg3 from "../assets/img/graph/graph3.png";
import graphImg4 from "../assets/img/graph/graph4.png";
import patteImg1 from "../assets/img/patte/patte1.png";
import patteImg2 from "../assets/img/patte/patte2.png";
import patteImg3 from "../assets/img/patte/patte3.png";
import patteImg4 from "../assets/img/patte/patte4.png";
import patteImg5 from "../assets/img/patte/patte5.png";
import patteImg6 from "../assets/img/patte/patte6.png";
import patteImg7 from "../assets/img/patte/patte7.png";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const { t } = useTranslation();

  const getProjectData = (id) => {
    const projectKey = `project${id}`;
    return {
      id: parseInt(id),
      title: t(`projects.list.${projectKey}.title`),
      description: t(`projects.list.${projectKey}.description`),
      longDescription: t(`projects.list.${projectKey}.longDescription`),
      images:
        id === "3"
          ? [decentRepImg1, decentRepImg2, decentRepImg3]
          : id === "2"
          ? [graphImg2, graphImg3, graphImg4]
          : id === "1"
          ? [
              patteImg1,
              patteImg2,
              patteImg3,
              patteImg4,
              patteImg5,
              patteImg6,
              patteImg7,
            ]
          : [],
      technologies: t(`projects.list.${projectKey}.technologies`),
      authors: t(`projects.list.${projectKey}.authors`),
      links: {
        github:
          id === "1"
            ? "https://github.com/Paupiety/patte-a-patte"
            : id === "3"
            ? "https://github.com/THP-Lab/intuition-recommendation-assistant"
            : id === "4"
            ? "https://github.com/Agent-BossFighters"
            : id === "5"
            ? "https://github.com/Agent-BossFighters/Player-map"
            : null,
        production:
          id === "2"
            ? "https://graph.i7n.thp-lab.org/"
            : id === "4"
            ? "https://agent-bossfighters.com/"
            : id === "5"
            ? "https://devfolio.co/projects/agent-player-map-759e"
            : null,
        claimify:
          id === "3" ? t(`projects.list.${projectKey}.links.claimify`) : null,
        youtube:
          id === "4" ? "https://www.youtube.com/embed/470PiwCqN7Y" : null,
        loom:
          id === "5"
            ? "https://www.loom.com/embed/075a0ec241ba41e3bafd02e9a0a663ed?sid=86524f64-f7bb-4079-bf23-bdff6cd30700"
            : null,
      },
    };
  };

  const project = getProjectData(projectId);

  const renderDescription = (description) => {
    if (projectId === "3" && project.links.claimify) {
      const parts = description.split("Claimify");
      return (
        <>
          {parts[0]}
          <Link
            href={project.links.claimify}
            isExternal
            color="brand.blueGreen"
            fontWeight="bold"
            _hover={{ color: "brand.primary" }}
          >
            Claimify
          </Link>
          {parts[1]}
        </>
      );
    }
    return description;
  };

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8} align="stretch">
        {/* En-tête du projet */}
        <Box>
          <Heading as="h1" size="2xl" mb={4}>
            {project.title}
          </Heading>
          <Text fontSize="lg" whiteSpace="pre-line">
            {renderDescription(project.longDescription)}
          </Text>
        </Box>

        {/* Carousel d'images ou Vidéo */}
        <Box borderRadius="lg" overflow="hidden">
          {projectId === "4" ? (
            <AspectRatio ratio={16 / 9}>
              <iframe
                src={project.links.youtube}
                title="Agent Project Demo"
                allowFullScreen
              />
            </AspectRatio>
          ) : projectId === "5" ? (
            <Box position="relative" paddingBottom="53.75%" height="0">
              <iframe
                src={project.links.loom}
                frameBorder="0"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
          ) : (
            <Carousel
              showThumbs={false}
              infiniteLoop
              autoPlay
              interval={5000}
              showStatus={false}
            >
              {project.images.map((image, index) => (
                <Box
                  key={index}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  bg="gray.100"
                >
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "600px",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              ))}
            </Carousel>
          )}
        </Box>

        {/* Technologies utilisées */}
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            {t("projects.details.technologies")}
          </Heading>
          <HStack spacing={4} wrap="wrap">
            {project.technologies.map((tech, index) => (
              <Tag
                key={index}
                size="lg"
                colorScheme={tech.color}
                borderRadius="full"
                px={4}
                py={2}
              >
                {tech.name}
              </Tag>
            ))}
          </HStack>
        </Box>

        {/* Auteurs */}
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            {t("projects.details.authors")}
          </Heading>
          <VStack align="start" spacing={2}>
            {project.authors.map((author, index) => (
              <Text key={index} fontSize="md">
                {author}
              </Text>
            ))}
          </VStack>
        </Box>

        {/* Liens du projet */}
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            {t("projects.details.links")}
          </Heading>
          <HStack spacing={6}>
            {project.links.github && (
              <Link
                href={project.links.github}
                isExternal
                color="brand.blueGreen"
                fontWeight="bold"
                _hover={{ color: "brand.primary" }}
              >
                GitHub
              </Link>
            )}
            {project.links.production && (
              <Link
                href={project.links.production}
                isExternal
                color="brand.blueGreen"
                fontWeight="bold"
                _hover={{ color: "brand.primary" }}
              >
                {projectId === "5"
                  ? t("projects.details.hackathon")
                  : t("projects.details.production")}
              </Link>
            )}
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default ProjectDetails;
