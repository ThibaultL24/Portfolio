// src/shared/ui/ProjectCard.jsx
import { Box, Text, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import CardImage from "./CardImage";
import ProjectCover from "./ProjectCover";
import { useTranslation } from "../../hooks/useTranslation";

const ProjectCard = ({
  title,
  description,
  imageSrc,
  projectId,
  year,
  category,
  accent,
  motif,
  featured = false,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Card as="article" cursor="pointer" onClick={() => navigate(`/projects/${projectId}`)} h="100%">
      <Box h={featured ? "260px" : "200px"} overflow="hidden">
        {imageSrc ? (
          <CardImage src={imageSrc} alt={title} h="100%" w="100%" />
        ) : (
          <ProjectCover title={title} accent={accent} motif={motif} />
        )}
      </Box>
      <Box p={{ base: 5, md: 6 }}>
        <Flex
          justify="space-between"
          align="center"
          mb={3}
          fontFamily="'Michroma', sans-serif"
          fontSize="9px"
          letterSpacing="0.18em"
          textTransform="uppercase"
          color="brand.cyan"
        >
          <Text as="span">{year}</Text>
          <Text as="span">{t(`projects.filters.${category}`, category)}</Text>
        </Flex>
        <Text
          as="h3"
          fontFamily="'Teko', sans-serif"
          fontWeight="500"
          fontSize={featured ? "3xl" : "2xl"}
          mb={2}
          color="brand.ink"
          textTransform="uppercase"
        >
          {title}
        </Text>
        <Text fontSize="sm" mb={5} color="brand.ink" opacity={0.68} noOfLines={3} textTransform="none">
          {description}
        </Text>
        <Text
          fontFamily="'Michroma', sans-serif"
          fontSize="9px"
          letterSpacing="0.16em"
          textTransform="uppercase"
          color="brand.ink"
        >
          {t("projects.viewDetails")} →
        </Text>
      </Box>
    </Card>
  );
};

export default ProjectCard;
