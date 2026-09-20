// src/features/home/components/TrustSection.jsx
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

  return (
    <Box py={{ base: 8, md: 12 }} w="100%">
      <Flex direction={{ base: "column", md: "row" }} align="flex-start" gap={12}>
        <Box flex="1">
          <Text
            fontFamily="'Michroma', sans-serif"
            fontSize="9px"
            letterSpacing="0.3em"
            textTransform="uppercase"
            color="brand.cyan"
            mb={3}
          >
            Intuition
          </Text>
          <Heading as="h2" fontSize={{ base: "4xl", md: "5xl" }} mb={8} color="brand.ink">
            {t("home.trust.title")}
          </Heading>
          <VStack align="flex-start" spacing={6}>
            <Text className="intro" fontSize="lg">
              {t("home.trust.intro.part1")} <b>Intuition</b> {t("home.trust.intro.part2")}
              <Badge mx={1} bg="rgba(78,234,213,0.18)" color="brand.ink" borderRadius="0" px={2}>
                {t("home.trust.ambassador")}
              </Badge>{" "}
              {t("home.trust.intro.part3")}
            </Text>
            <Text fontSize="lg">{t("home.trust.projectsTitle")}</Text>
            <VStack align="flex-start" spacing={4}>
              <Box cursor="pointer" onClick={() => navigate("/projects/3")} _hover={{ color: "brand.cyan" }}>
                <Text fontWeight="600" fontSize="lg" mb={1} color="brand.ink">
                  {t("home.trust.projects.decentrep.title")}
                </Text>
                <Text fontSize="md" color="brand.ink" opacity={0.65}>
                  {t("home.trust.projects.decentrep.desc")}
                </Text>
              </Box>
              <Box cursor="pointer" onClick={() => navigate("/projects/2")} _hover={{ color: "brand.cyan" }}>
                <Text fontWeight="600" fontSize="lg" mb={1} color="brand.ink">
                  {t("home.trust.projects.i7n.title")}
                </Text>
                <Text fontSize="md" color="brand.ink" opacity={0.65}>
                  {t("home.trust.projects.i7n.desc")}
                </Text>
              </Box>
            </VStack>
            <Text fontSize="lg" mt={2}>
              {t("home.trust.outro")}
            </Text>
          </VStack>
        </Box>

        <Card w={{ base: "100%", md: "380px" }} p={8}>
          <Box mb={6}>
            <Image src={intuitionLogo} alt="Intuition" boxSize="56px" objectFit="cover" mb={4} />
            <Text fontWeight="600" fontSize="lg" mb={2} color="brand.ink">
              Intuition
            </Text>
            <HStack spacing={4}>
              <Link href="https://x.com/0xintuition" isExternal>
                <Icon as={FaTwitter} boxSize={4} />
              </Link>
              <Link href="https://github.com/0xIntuition" isExternal>
                <Icon as={FaGithub} boxSize={4} />
              </Link>
            </HStack>
          </Box>
          <Text fontSize="md" color="brand.ink" opacity={0.7} mb={8} fontStyle="italic">
            {t("home.trust.articleQuote")}
          </Text>
          <Button
            as={Link}
            href="https://x.com/0xIntuition/status/1923456151393533997"
            isExternal
            variant="outline"
            size="sm"
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
