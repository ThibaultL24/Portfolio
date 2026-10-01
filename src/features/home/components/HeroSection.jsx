// src/features/home/components/HeroSection.jsx
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Link,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useTranslation } from "../../../hooks/useTranslation";

const HeroSection = () => {
  const { t } = useTranslation();
  const offers = t("home.offer.items");

  return (
    <Box as="section" aria-labelledby="hero-heading" overflow="hidden">
      <VStack align="flex-start" spacing={6} maxW="720px" py={{ base: 8, md: 12 }}>
        <HStack spacing={3} align="center">
          <Box w="28px" h="2px" bg="brand.ember" />
          <Text
            fontFamily="'IBM Plex Mono', monospace"
            fontSize="xs"
            letterSpacing="0.28em"
            textTransform="uppercase"
            color="brand.copper"
          >
            {t("home.kicker")}
          </Text>
        </HStack>
        <Heading
          as="h1"
          id="hero-heading"
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="500"
          lineHeight="1.08"
          letterSpacing="-0.03em"
          color="brand.parchment"
        >
          {t("home.title")}
          <Text
            as="span"
            display="block"
            mt={3}
            fontSize={{ base: "lg", md: "2xl" }}
            fontWeight="400"
            letterSpacing="-0.02em"
            color="brand.ember"
          >
            {t("home.titleRole")}
          </Text>
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} color="rgba(244,236,225,0.8)" lineHeight="1.75">
          {t("home.description")}
        </Text>
        <HStack spacing={4} pt={1} wrap="wrap">
          <Button as={RouterLink} to="/contact" variant="solid" size="lg">
            {t("home.ctaContact")}
          </Button>
          <Button as={RouterLink} to="/projects" variant="outline" size="lg">
            {t("home.ctaProjects")}
          </Button>
        </HStack>
        {Array.isArray(offers) && (
          <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={4} pt={4} w="100%">
            {offers.map((item) => (
              <Box key={item.title}>
                <Text
                  fontFamily="'IBM Plex Mono', monospace"
                  fontSize="xs"
                  letterSpacing="0.12em"
                  textTransform="uppercase"
                  color="brand.copper"
                  mb={1}
                >
                  {item.title}
                </Text>
                <Text fontSize="sm" color="rgba(244,236,225,0.68)">
                  {item.text}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        )}
        <HStack spacing={5} pt={1}>
          <Link href="https://github.com/ThibaultL24" isExternal aria-label="GitHub">
            <Icon as={FaGithub} w={5} h={5} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/thibault-lenormand-b38b96268/"
            isExternal
            aria-label="LinkedIn"
          >
            <Icon as={FaLinkedin} w={5} h={5} />
          </Link>
          <Link href="https://x.com/ThibaultLENORM2" isExternal aria-label="X">
            <Icon as={FaTwitter} w={5} h={5} />
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default HeroSection;
