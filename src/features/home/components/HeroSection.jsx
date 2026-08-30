// src/features/home/components/HeroSection.jsx
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Link,
  Button,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import profileImg from "../../../assets/img/accueil.jpg";
import { useTranslation } from "../../../hooks/useTranslation";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <Box position="relative" minH={{ base: "auto", md: "86vh" }} overflow="hidden">
      <Flex
        direction={{ base: "column", lg: "row" }}
        align="stretch"
        minH={{ lg: "86vh" }}
      >
        <VStack
          align="flex-start"
          spacing={8}
          flex="1"
          px={{ base: 2, md: 6, lg: 4 }}
          py={{ base: 12, md: 20 }}
          maxW={{ lg: "58%" }}
          zIndex={2}
        >
          <Text
            fontFamily="'IBM Plex Mono', monospace"
            fontSize="xs"
            letterSpacing="0.28em"
            textTransform="uppercase"
            color="brand.copper"
          >
            {t("home.kicker")}
          </Text>
          <Heading
            as="h1"
            fontSize={{ base: "4xl", md: "6xl", xl: "7xl" }}
            fontWeight="500"
            lineHeight="0.95"
            letterSpacing="-0.04em"
            color="brand.parchment"
          >
            Thibault
            <Text as="span" display="block" fontStyle="italic" color="brand.copper">
              Lenormand
            </Text>
          </Heading>
          <Text
            fontFamily="'IBM Plex Mono', monospace"
            fontSize="sm"
            letterSpacing="0.18em"
            textTransform="uppercase"
            color="rgba(244,236,225,0.55)"
          >
            {t("home.subtitle")}
          </Text>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="rgba(244,236,225,0.78)"
            maxW="560px"
            lineHeight="1.8"
          >
            {t("home.description")}
          </Text>
          <HStack spacing={4} pt={2} wrap="wrap">
            <Button as={RouterLink} to="/projects" variant="solid" size="lg">
              {t("home.ctaProjects")}
            </Button>
            <Button as={RouterLink} to="/contact" variant="outline" size="lg">
              {t("home.ctaContact")}
            </Button>
          </HStack>
          <HStack spacing={5} pt={2}>
            <Link href="https://github.com/ThibaultL24" isExternal>
              <Icon as={FaGithub} w={5} h={5} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/thibault-lenormand-b38b96268/"
              isExternal
            >
              <Icon as={FaLinkedin} w={5} h={5} />
            </Link>
            <Link href="https://x.com/ThibaultLENORM2" isExternal>
              <Icon as={FaTwitter} w={5} h={5} />
            </Link>
          </HStack>
        </VStack>

        <Box
          position="relative"
          flex="1"
          minH={{ base: "360px", md: "520px", lg: "auto" }}
          mx={{ base: 0, lg: 0 }}
        >
          <Box
            position="absolute"
            inset={{ base: "8% 6% 8% 12%", lg: "10% 8% 10% 18%" }}
            borderRadius="32px 8px 40px 12px"
            overflow="hidden"
            border="1px solid rgba(201,163,106,0.28)"
            boxShadow="0 30px 80px rgba(0,0,0,0.45)"
          >
            <Box
              w="100%"
              h="100%"
              backgroundImage={`url(${profileImg})`}
              backgroundSize="cover"
              backgroundPosition="center 20%"
              filter="saturate(0.75) contrast(1.05)"
            />
            <Box
              position="absolute"
              inset={0}
              bgGradient="linear(to-t, rgba(14,12,10,0.55), transparent 50%)"
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default HeroSection;
