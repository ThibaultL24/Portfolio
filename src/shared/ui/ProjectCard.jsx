import { Box, Text, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import CardImage from "./CardImage";
import { useTranslation } from "../../hooks/useTranslation";

const ProjectCard = ({
  title,
  description,
  imageSrc,
  projectId,
  github,
  production,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <Card>
      <Box pt={4}>
        <CardImage src={imageSrc} alt={title} h="200px" w="100%" />
      </Box>
      <Box p={6}>
        <Text as="h3" fontWeight="bold" fontSize="lg" mb={3}>
          {title}
        </Text>
        <Text fontSize="sm" mb={5}>
          {description}
        </Text>
        <Link
          onClick={handleClick}
          fontWeight="medium"
          fontSize="sm"
          display="inline-block"
          position="relative"
          cursor="pointer"
          _after={{
            content: '""',
            position: "absolute",
            width: "0%",
            height: "1px",
            bottom: "-2px",
            left: "0",
            transition: "width 0.3s ease",
          }}
          _hover={{
            _after: {
              width: "100%",
            },
          }}
        >
          {t("projects.viewDetails")}
        </Link>
      </Box>
    </Card>
  );
};

export default ProjectCard;
