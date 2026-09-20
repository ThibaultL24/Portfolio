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
      bg="#050505"
      color="white"
      mx={{ base: -4, md: -8, lg: -16 }}
      px={{ base: 4, md: 8, lg: 16 }}
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        inset={0}
        background="radial-gradient(circle at 78% 22%, rgba(78,234,213,0.14), transparent 28%), radial-gradient(circle at 18% 80%, rgba(209,0,255,0.1), transparent 24%)"
      />
      <Flex
        direction={{ base: "column", lg: "row" }}
        align="stretch"
        minH={{ lg: "84vh" }}
        position="relative"
        zIndex={1}
      >
        <VStack
          align="flex-start"
          spacing={7}
          flex="1"
          py={{ base: 12, md: 20 }}
          maxW={{ lg: "58%" }}
        >
          <Text
            fontFamily="'Michroma', sans-serif"
            fontSize="9px"
            letterSpacing="0.32em"
            textTransform="uppercase"
            color="brand.cyan"
          >
            {t("home.kicker")}
          </Text>
          <Heading
            as="h1"
            fontSize={{ base: "6xl", md: "8xl", xl: "9xl" }}
            fontWeight="600"
            lineHeight="0.82"
            letterSpacing="0.02em"
            color="white"
            textTransform="uppercase"
          >
            Thibault
            <Text as="span" display="block" color="brand.cyan">
              Lenormand
            </Text>
          </Heading>
          <Text
            fontFamily="'Michroma', sans-serif"
            fontSize="10px"
            letterSpacing="0.22em"
            textTransform="uppercase"
            color="rgba(244,244,242,0.62)"
          >
            {t("home.subtitle")}
          </Text>
          <Text fontSize={{ base: "md", md: "lg" }} color="rgba(244,244,242,0.78)" maxW="540px" lineHeight="1.75">
            {t("home.description")}
          </Text>
          <HStack spacing={4} pt={2} wrap="wrap">
            <Button as={RouterLink} to="/projects" variant="solid" size="lg">
              {t("home.ctaProjects")}
            </Button>
            <Button
              as={RouterLink}
              to="/contact"
              variant="outline"
              size="lg"
              borderColor="white"
              color="white"
              _hover={{ bg: "white", color: "black" }}
            >
              {t("home.ctaContact")}
            </Button>
          </HStack>
          <HStack spacing={5} pt={2}>
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

        <Box position="relative" flex="1" minH={{ base: "380px", md: "520px", lg: "auto" }}>
          <Box
            className="sketch-frame is-light"
            position="absolute"
            inset={{ base: "8% 6% 8% 10%", lg: "12% 4% 12% 16%" }}
            overflow="hidden"
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
