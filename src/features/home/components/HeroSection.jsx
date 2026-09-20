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
import profileImg from "../../../assets/img/Thibault1.jpg";
import { useTranslation } from "../../../hooks/useTranslation";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <Box
      bg="white"
      color="brand.ink"
      mx={{ base: -4, md: -8, lg: -16 }}
      px={{ base: 4, md: 8, lg: 16 }}
      position="relative"
    >
      <Flex
        direction={{ base: "column", lg: "row" }}
        align="center"
        minH={{ lg: "78vh" }}
        gap={{ base: 10, lg: 16 }}
        py={{ base: 10, md: 16 }}
      >
        <VStack align="flex-start" spacing={6} flex="1" maxW={{ lg: "56%" }}>
          <Text
            className="font-subtitle"
            fontFamily="'Outfit', sans-serif"
            fontSize="sm"
            letterSpacing="0.08em"
            color="brand.cyan"
            fontWeight="600"
          >
            {t("home.kicker")}
          </Text>
          <Heading
            as="h1"
            fontFamily="'Syne', sans-serif"
            fontSize={{ base: "5xl", md: "7xl", xl: "8xl" }}
            fontWeight="600"
            lineHeight="0.95"
            letterSpacing="-0.03em"
            color="brand.ink"
          >
            Thibault
            <Text as="span" display="block" color="brand.cyan">
              Lenormand
            </Text>
          </Heading>
          <Text
            className="font-subtitle"
            fontFamily="'Outfit', sans-serif"
            fontSize={{ base: "xl", md: "2xl" }}
            color="brand.ink"
            opacity={0.72}
            fontWeight="500"
          >
            {t("home.subtitle")}
          </Text>
          <Text fontSize={{ base: "md", md: "lg" }} color="brand.ink" opacity={0.7} maxW="540px" lineHeight="1.8">
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
          <HStack spacing={5} pt={1}>
            <Link href="https://github.com/ThibaultL24" isExternal>
              <Icon as={FaGithub} w={5} h={5} />
            </Link>
            <Link href="https://www.linkedin.com/in/thibault-lenormand-b38b96268/" isExternal>
              <Icon as={FaLinkedin} w={5} h={5} />
            </Link>
            <Link href="https://x.com/ThibaultLENORM2" isExternal>
              <Icon as={FaTwitter} w={5} h={5} />
            </Link>
          </HStack>
        </VStack>

        <Box
          flex="1"
          w="100%"
          maxW={{ base: "420px", lg: "none" }}
          alignSelf={{ base: "center", lg: "stretch" }}
        >
          <Box
            h={{ base: "420px", md: "520px", lg: "100%" }}
            minH={{ lg: "560px" }}
            overflow="hidden"
            borderRadius="24px"
            bg="brand.paper"
          >
            <Box
              w="100%"
              h="100%"
              backgroundImage={`url(${profileImg})`}
              backgroundSize="cover"
              backgroundPosition="50% 12%"
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default HeroSection;
