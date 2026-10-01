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

function TrustBlock({ kicker, title, children, card, isFirst }) {
  return (
    <Box
      as="section"
      pt={{ base: isFirst ? 10 : 14, md: isFirst ? 12 : 16 }}
      mt={isFirst ? 0 : 2}
      borderTop={isFirst ? "none" : "1px solid"}
      borderColor="brand.line"
      w="100%"
    >
      <Flex direction={{ base: "column", lg: "row" }} align="flex-start" gap={{ base: 8, lg: 12 }}>
        <Box flex="1" minW={0}>
          <Text
            className="font-subtitle"
            fontFamily="'Outfit', sans-serif"
            fontSize="sm"
            letterSpacing="0.08em"
            color="brand.cyan"
            fontWeight="600"
            mb={3}
          >
            {kicker}
          </Text>
          <Heading
            as="h3"
            fontFamily="'Outfit', sans-serif"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="500"
            mb={6}
            color="brand.ink"
          >
            {title}
          </Heading>
          {children}
        </Box>
        <Box w={{ base: "100%", lg: "380px" }} flexShrink={0}>{card}</Box>
      </Flex>
    </Box>
  );
}

function RecoCard({ quotes, source, ctaLabel, onCta }) {
  return (
    <Card p={8} hoverEffect={false} h="100%">
      <VStack align="flex-start" spacing={4} mb={8}>
        {Array.isArray(quotes) &&
          quotes.map((line) => (
            <Text
              key={line}
              fontSize="md"
              color="brand.ink"
              opacity={0.78}
              lineHeight="1.75"
              fontStyle="italic"
            >
              {line}
            </Text>
          ))}
      </VStack>
      <Text fontSize="sm" color="brand.ink" opacity={0.55} mb={6}>
        — {source}
      </Text>
      <Button variant="outline" size="sm" w="full" onClick={onCta}>
        {ctaLabel}
      </Button>
    </Card>
  );
}

const TrustSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const readProject = t("home.trust.readProject");

  return (
    <Box py={{ base: 8, md: 12 }} w="100%">
      <Text
        className="font-subtitle"
        fontFamily="'Outfit', sans-serif"
        fontSize="sm"
        letterSpacing="0.08em"
        color="brand.cyan"
        fontWeight="600"
        mb={3}
      >
        {t("home.trust.kicker")}
      </Text>
      <Heading
        as="h2"
        fontFamily="'Outfit', sans-serif"
        fontSize={{ base: "4xl", md: "5xl" }}
        fontWeight="500"
        mb={2}
        color="brand.ink"
      >
        {t("home.trust.title")}
      </Heading>

      <TrustBlock
        isFirst
        kicker="Intuition"
        title={t("home.trust.intuition.heading")}
        card={
          <Card p={8} hoverEffect={false} h="100%">
            <Box mb={6}>
              <Image src={intuitionLogo} alt="Intuition" boxSize="56px" objectFit="cover" mb={4} borderRadius="8px" />
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
            <Text fontSize="md" color="brand.ink" opacity={0.7} mb={8} fontStyle="italic" lineHeight="1.75">
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
        }
      >
        <VStack align="flex-start" spacing={6} maxW="640px">
          <Text className="intro" fontSize="lg">
            {t("home.trust.intro.part1")} <b>Intuition</b> {t("home.trust.intro.part2")}
            <Badge mx={1} bg="blackAlpha.100" color="brand.ink" borderRadius="999px" px={2}>
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
          <Text fontSize="lg">{t("home.trust.outro")}</Text>
        </VStack>
      </TrustBlock>

      <TrustBlock
        kicker={t("home.trust.recos.camille.kicker")}
        title={t("home.trust.recos.camille.person")}
        card={
          <RecoCard
            quotes={t("home.trust.recos.camille.quote")}
            source={t("home.trust.recos.camille.source")}
            ctaLabel={readProject}
            onCta={() => navigate("/projects/6")}
          />
        }
      >
        <Text className="intro" fontSize="lg" maxW="640px">
          {t("home.trust.recos.camille.blurb")}
        </Text>
      </TrustBlock>

      <TrustBlock
        kicker={t("home.trust.recos.corvus.kicker")}
        title={t("home.trust.recos.corvus.person")}
        card={
          <RecoCard
            quotes={t("home.trust.recos.corvus.quote")}
            source={t("home.trust.recos.corvus.source")}
            ctaLabel={readProject}
            onCta={() => navigate("/projects/7")}
          />
        }
      >
        <Text className="intro" fontSize="lg" maxW="640px">
          {t("home.trust.recos.corvus.blurb")}
        </Text>
      </TrustBlock>
    </Box>
  );
};

export default TrustSection;
