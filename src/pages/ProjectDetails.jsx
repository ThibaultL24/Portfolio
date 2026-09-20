// src/pages/ProjectDetails.jsx
import {
  Box,
  Container,
  Heading,
  Text,
  Link,
  VStack,
  HStack,
  Tag,
  AspectRatio,
  Button,
} from "@chakra-ui/react";
import { useParams, Link as RouterLink } from "react-router-dom";
import { useTranslation } from "../hooks/useTranslation";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getProjectById } from "../features/projects/data/projects";
import ProjectCover from "../shared/ui/ProjectCover";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const { t } = useTranslation();
  const meta = getProjectById(projectId);

  if (!meta) {
    return (
      <Container maxW="container.lg" py={20}>
        <Text>Projet introuvable.</Text>
        <Button as={RouterLink} to="/projects" mt={6} variant="outline">
          {t("nav.projects")}
        </Button>
      </Container>
    );
  }

  const title = t(`projects.list.${meta.key}.title`);
  const longDescription = t(`projects.list.${meta.key}.longDescription`);
  const technologies = t(`projects.list.${meta.key}.technologies`);
  const authors = t(`projects.list.${meta.key}.authors`);

  const renderDescription = (description) => {
    if (meta.claimify && typeof description === "string") {
      const parts = description.split("Claimify");
      if (parts.length > 1) {
        return (
          <>
            {parts[0]}
            <Link href={meta.claimify} isExternal color="brand.copper" fontWeight="600">
              Claimify
            </Link>
            {parts[1]}
          </>
        );
      }
    }
    return description;
  };

  return (
    <Container maxW="container.lg" py={{ base: 10, md: 16 }}>
      <VStack spacing={10} align="stretch">
        <Box>
          <HStack
            spacing={4}
            mb={4}
            fontSize="sm"
            letterSpacing="0.06em"
            color="brand.cyan"
            fontWeight="600"
          >
            <Text as="span">{meta.year}</Text>
            <Text as="span">{t(`projects.filters.${meta.category}`)}</Text>
          </HStack>
          <Heading as="h1" fontSize={{ base: "4xl", md: "5xl" }} mb={6}>
            {title}
          </Heading>
          <Text fontSize="lg" whiteSpace="pre-line" color="brand.ink" lineHeight="1.85">
            {renderDescription(longDescription)}
          </Text>
        </Box>

        <Box overflow="hidden" border="1px solid rgba(26,24,22,0.08)" bg="white" borderRadius="16px">
          {meta.youtube ? (
            <AspectRatio ratio={16 / 9}>
              <iframe src={meta.youtube} title={`${title} demo`} allowFullScreen />
            </AspectRatio>
          ) : meta.loom ? (
            <Box position="relative" paddingBottom="53.75%" height="0">
              <iframe
                src={meta.loom}
                title={`${title} demo`}
                frameBorder="0"
                allowFullScreen
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
              />
            </Box>
          ) : meta.images?.length > 0 ? (
            <Carousel
              showThumbs={false}
              infiniteLoop
              autoPlay
              interval={5000}
              showStatus={false}
            >
              {meta.images.map((image, index) => (
                <Box key={index} bg="#050505">
                  <img
                    src={image}
                    alt={`${title} - ${index + 1}`}
                    style={{ maxHeight: "560px", objectFit: "contain" }}
                  />
                </Box>
              ))}
            </Carousel>
          ) : meta.imageSrc ? (
            <img src={meta.imageSrc} alt={title} style={{ width: "100%", display: "block" }} />
          ) : (
            <Box h="320px">
              <ProjectCover title={title} accent={meta.accent} motif={meta.motif} />
            </Box>
          )}
        </Box>

        <Box>
          <Heading as="h2" fontSize="2xl" mb={4}>
            {t("projects.details.technologies")}
          </Heading>
          <HStack spacing={3} wrap="wrap">
            {Array.isArray(technologies) &&
              technologies.map((tech, index) => (
                <Tag
                  key={index}
                  size="lg"
                  borderRadius="999px"
                  px={4}
                  py={2}
                  bg="white"
                  color="brand.ink"
                  border="1px solid rgba(26,24,22,0.14)"
                >
                  {tech.name}
                </Tag>
              ))}
          </HStack>
        </Box>

        <Box>
          <Heading as="h2" fontSize="2xl" mb={4}>
            {t("projects.details.authors")}
          </Heading>
          <VStack align="start" spacing={1}>
            {Array.isArray(authors) &&
              authors.map((author, index) => (
                <Text key={index} color="brand.ink" opacity={0.7}>
                  {author}
                </Text>
              ))}
          </VStack>
        </Box>

        <HStack spacing={4} wrap="wrap">
          {meta.github && (
            <Button as={Link} href={meta.github} isExternal variant="outline">
              GitHub
            </Button>
          )}
          {meta.production && (
            <Button as={Link} href={meta.production} isExternal variant="solid">
              {meta.productionLabel === "hackathon"
                ? t("projects.details.hackathon")
                : t("projects.details.production")}
            </Button>
          )}
          <Button as={RouterLink} to="/projects" variant="ghost">
            ← {t("nav.projects")}
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default ProjectDetails;
