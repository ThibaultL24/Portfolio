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
import { FaDownload, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import profileImg from "../../../assets/img/accueil.jpg";
import { useTranslation } from "../../../hooks/useTranslation";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <Box position="relative" minH="80vh" bg="#0a0a0a" overflow="hidden">
      <VStack
        align="flex-start"
        spacing={8}
        maxW={{ base: "100%", md: "65%" }}
        p={{ base: 8, md: 20 }}
        position="relative"
        zIndex={2}
      >
        <Heading
          as="h1"
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="bold"
          lineHeight="1.2"
        >
          {t("home.title")}
          <Text
            as="span"
            display="block"
            color="gray.400"
            mt={2}
            fontSize={{ base: "2xl", md: "4xl" }}
            fontFamily="'Roboto Mono', monospace"
            letterSpacing="0.1em"
            textTransform="uppercase"
          >
            {t("home.subtitle")}
          </Text>
        </Heading>

        <Text
          fontSize="lg"
          color="gray.300"
          maxW="700px"
          lineHeight="1.8"
          letterSpacing="0.3px"
        >
          {t("home.description")}
        </Text>

        <HStack spacing={6} pt={4}>
          <Button
            as="a"
            href="/path-to-cv.pdf"
            download
            leftIcon={<FaDownload color="#00ff9d" />}
            variant="outline"
            color="brand.neon"
            borderColor="brand.neon"
            _hover={{
              bg: "transparent",
              color: "white",
              borderColor: "white",
              boxShadow: "0 0 10px rgba(0, 255, 157, 0.3)",
            }}
          >
            {t("home.downloadCV")}
          </Button>
        </HStack>

        <HStack spacing={6}>
          <Link
            href="https://github.com/ThibaultL24"
            isExternal
            _hover={{ color: "gray.300" }}
          >
            <Icon as={FaGithub} w={6} h={6} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/thibault-lenormand-b38b96268/"
            isExternal
            _hover={{ color: "gray.300" }}
          >
            <Icon as={FaLinkedin} w={6} h={6} />
          </Link>
          <Link
            href="https://x.com/ThibaultLENORM2"
            isExternal
            _hover={{ color: "gray.300" }}
          >
            <Icon as={FaTwitter} w={6} h={6} />
          </Link>
        </HStack>
      </VStack>

      {/* Image */}
      <Box
        position="absolute"
        top={0}
        right={0}
        width={{ base: "100%", md: "55%" }}
        height="100%"
        zIndex={1}
        overflow="hidden"
      >
        {/* Fond sombre dégradé */}
        <Box
          position="absolute"
          top={0}
          left={0}
          width="120%"
          height="100%"
          bgGradient="linear(to-r, #0a0a0a 0%, transparent 100%)"
          zIndex={2}
        />

        {/* Image */}
        <Box
          position="absolute"
          top={0}
          right={0}
          width="100%"
          height="100%"
          backgroundImage={`url(${profileImg})`}
          backgroundSize="cover"
          backgroundPosition="right center"
          backgroundRepeat="no-repeat"
          filter="brightness(75%)"
          opacity={0.85}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
