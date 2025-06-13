import {
  Box,
  Heading,
  Text,
  Link,
  Image,
  Badge,
  Button,
  Flex,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import intuitionLogo from "../../../assets/img/intuition.jpg";
import Card from "../../../shared/ui/Card";
import { useTranslation } from "../../../hooks/useTranslation";

const TrustSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <Box my={16} w="100%">
      <Flex
        direction={{ base: "column", md: "row" }}
        align="flex-start"
        gap={12}
      >
        {/* Colonne gauche : titre + texte explicatif, aligné à gauche */}
        <Box flex="1">
          <Heading
            as="h2"
            size="2xl"
            mb={8}
            color="brand.neon"
            textAlign="left"
          >
            {t("home.trust.title")}
          </Heading>
          <VStack align="flex-start" spacing={6}>
            <Text className="intro" fontSize="lg" textAlign="left">
              {t("home.trust.intro.part1")} <b>Intuition</b>{" "}
              {t("home.trust.intro.part2")}
              <Badge colorScheme="green" mx={1}>
                {t("home.trust.ambassador")}
              </Badge>{" "}
              {t("home.trust.intro.part3")}
            </Text>

            <Text fontSize="lg" textAlign="left">
              {t("home.trust.projectsTitle")}
            </Text>

            <VStack align="flex-start" spacing={4} pl={4}>
              <Box>
                <Text
                  fontWeight="bold"
                  fontSize="lg"
                  mb={2}
                  cursor="pointer"
                  onClick={() => handleProjectClick(3)}
                  _hover={{ color: "brand.neon" }}
                  transition="color 0.3s ease"
                >
                  • {t("home.trust.projects.decentrep.title")}
                </Text>
                <Text fontSize="md" color="gray.300">
                  {t("home.trust.projects.decentrep.desc")}
                </Text>
              </Box>

              <Box>
                <Text
                  fontWeight="bold"
                  fontSize="lg"
                  mb={2}
                  cursor="pointer"
                  onClick={() => handleProjectClick(2)}
                  _hover={{ color: "brand.neon" }}
                  transition="color 0.3s ease"
                >
                  • {t("home.trust.projects.i7n.title")}
                </Text>
                <Text fontSize="md" color="gray.300">
                  {t("home.trust.projects.i7n.desc")}
                </Text>
              </Box>
            </VStack>

            <Text fontSize="lg" textAlign="left" mt={4}>
              {t("home.trust.outro")}
            </Text>
          </VStack>
        </Box>

        {/* Colonne droite : card article */}
        <Card
          w={{ base: "100%", md: "400px" }}
          p={10}
          textAlign="left"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          borderColor="brand.neon"
          borderWidth="1px"
          _hover={{
            borderColor: "brand.neon",
            transform: "translateY(-5px)",
            boxShadow: "0 0 30px rgba(0, 255, 157, 0.5)",
          }}
        >
          <Box mb={8}>
            <Image
              src={intuitionLogo}
              alt="Intuition"
              boxSize="64px"
              borderRadius="md"
              objectFit="cover"
              mb={4}
            />
            <Text fontWeight="bold" fontSize="lg" mb={2}>
              Intuition
            </Text>
            <HStack spacing={4}>
              <Link
                href="https://x.com/0xintuition"
                isExternal
                _hover={{ color: "brand.neon" }}
                transition="color 0.3s ease"
              >
                <Icon as={FaTwitter} boxSize={5} />
              </Link>
              <Link
                href="https://github.com/0xIntuition"
                isExternal
                _hover={{ color: "brand.neon" }}
                transition="color 0.3s ease"
              >
                <Icon as={FaGithub} boxSize={5} />
              </Link>
            </HStack>
          </Box>
          <Text fontSize="md" color="gray.300" mb={8} fontStyle="italic">
            {t("home.trust.articleQuote")}
          </Text>
          <Button
            as={Link}
            href="https://x.com/0xIntuition/status/1923456151393533997"
            isExternal
            colorScheme="teal"
            variant="outline"
            size="sm"
            fontWeight="bold"
            w="full"
          >
            {t("home.trust.readArticle")}
          </Button>
        </Card>
      </Flex>
    </Box>
  );
};

export default TrustSection;
