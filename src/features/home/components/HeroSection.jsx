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
import { useRef } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import profileImg from "../../../assets/img/Thibault1.jpg";
import { useTranslation } from "../../../hooks/useTranslation";

const HeroSection = () => {
  const { t } = useTranslation();
  const heroRef = useRef(null);
  const handlePointerMove = (event) => {
    if (event.pointerType !== "mouse" || !window.matchMedia("(prefers-reduced-motion: no-preference) and (pointer: fine)").matches) return;
    const el = heroRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    el.style.setProperty("--hero-x", (x * 13).toFixed(2) + "px");
    el.style.setProperty("--hero-y", (y * 10).toFixed(2) + "px");
  };
  const resetParallax = () => {
    if (!heroRef.current) return;
    heroRef.current.style.setProperty("--hero-x", "0px");
    heroRef.current.style.setProperty("--hero-y", "0px");
  };
  const title = t("home.title");
  const [titleLead, titlePunch] = String(title).split("\n");
  const offers = t("home.offers");

  return (
    <Box
      ref={heroRef}
      className="tl-hero"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetParallax}
      bg="transparent"
      color="brand.ink"
      mx={{ base: -4, md: -8, lg: -16 }}
      px={{ base: 4, md: 8, lg: 16 }}
      position="relative"
      overflow="hidden"
    >
      <Box className="tl-hero__ambient" aria-hidden="true" />
      <Box className="tl-hero__light" aria-hidden="true" />
      <Flex
        direction={{ base: "column", lg: "row" }}
        align="center"
        minH={{ lg: "78vh" }}
        gap={{ base: 10, lg: 16 }}
        py={{ base: 10, md: 16 }}
        position="relative"
        zIndex={1}
      >
        <VStack align="flex-start" spacing={6} flex="1" maxW={{ lg: "58%" }}>
          <Text
            className="font-subtitle tl-hero__eyebrow"
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
            lineHeight="0.98"
            letterSpacing="-0.065em"
            color="brand.ink"
          >
            {titleLead}
            {titlePunch && (
              <Text
                as="span"
                className="tl-hero__metal-text"
                display="block"
                color="brand.cyan"
                fontSize={{ base: "3xl", md: "5xl", xl: "6xl" }}
                letterSpacing="-0.02em"
                mt={2}
              >
                {titlePunch}
              </Text>
            )}
          </Heading>
          <Text
            className="font-subtitle"
            fontFamily="'Outfit', sans-serif"
            fontSize={{ base: "xl", md: "2xl" }}
            color="brand.ink"
            fontWeight="500"
          >
            {t("home.subtitle")}
          </Text>
          <Text fontSize={{ base: "md", md: "lg" }} color="brand.ink" opacity={0.7} maxW="540px" lineHeight="1.8">
            {t("home.description")}
          </Text>
          {Array.isArray(offers) && (
            <HStack spacing={2} wrap="wrap">
              {offers.map((offer) => (
                <Text
                  key={offer}
                  className="glass"
                  px={3}
                  py={1}
                  borderRadius="999px"
                  fontSize="sm"
                  fontWeight="600"
                >
                  {offer}
                </Text>
              ))}
            </HStack>
          )}
          <HStack spacing={4} pt={1} wrap="wrap">
            <Button as={RouterLink} to="/contact" variant="solid" size="lg">
              {t("home.ctaContact")}
            </Button>
            <Button as={RouterLink} to="/projects" variant="outline" size="lg">
              {t("home.ctaProjects")}
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
          <Box position="relative" h={{ base: "420px", md: "520px", lg: "100%" }} minH={{ lg: "560px" }}>
            <Box
              position="absolute"
              inset="22px -18px -18px 22px"
              borderRadius="24px"
              bg="brand.cyan"
              opacity={0.22}
              filter="blur(18px)"
            />
            <Box
              className="glass neon-edge tl-hero__portrait"
              position="relative"
              h="100%"
              overflow="hidden"
              borderRadius="24px"
            >
              <Box
                w="100%"
                h="100%"
                backgroundImage={`url(${profileImg})`}
                backgroundSize="cover"
                backgroundPosition="center"
              />
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default HeroSection;
