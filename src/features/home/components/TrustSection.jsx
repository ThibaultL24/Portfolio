// src/features/home/components/TrustSection.jsx
import {
  Box,
  Heading,
  Text,
  Link,
  Badge,
  Button,
  SimpleGrid,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaTwitter, FaGithub } from "react-icons/fa";
import intuitionPortalCover from "../../../assets/img/covers/intuition-portal.jpg";
import Card from "../../../shared/ui/Card";
import CardImage from "../../../shared/ui/CardImage";
import ProjectCover from "../../../shared/ui/ProjectCover";
import { useTranslation } from "../../../hooks/useTranslation";
import { getProjectById } from "../../projects/data/projects";

const INTUITION_PORTAL = "https://portal.intuition.systems/";
const INTUITION_PORTAL_MEDIA = {
  imageSrc: intuitionPortalCover,
  imagePosition: "center",
};

const CLIENT_RECOS = [
  { id: 6, copyKey: "camille", projectKey: "project6" },
  { id: 7, copyKey: "corvus", projectKey: "project7" },
];

const INTUITION_PROJECTS = [
  { id: 12, key: "ideation" },
  { id: 3, key: "decentrep" },
  { id: 2, key: "i7n" },
];

function SectionKicker({ children }) {
  return (
    <Text
      fontFamily="'IBM Plex Mono', monospace"
      fontSize="xs"
      letterSpacing="0.28em"
      textTransform="uppercase"
      color="brand.copper"
      mb={3}
    >
      {children}
    </Text>
  );
}

function RecoQuote({ paragraphs, attribution, sourceHref, sourceLabel }) {
  if (!paragraphs?.length) return null;

  return (
    <Box as="blockquote" borderLeft="2px solid" borderColor="brand.copper" pl={5} my={5}>
      {paragraphs.map((paragraph, index) => (
        <Text
          key={index}
          fontSize="sm"
          fontStyle="italic"
          color="rgba(244,236,225,0.78)"
          mb={3}
          _last={{ mb: 0 }}
          lineHeight="1.8"
        >
          {paragraph}
        </Text>
      ))}
      <Text
        mt={4}
        fontFamily="'IBM Plex Mono', monospace"
        fontSize="xs"
        letterSpacing="0.08em"
        color="brand.copper"
      >
        — {attribution}
        {sourceLabel && (
          <>
            {" · "}
            {sourceHref ? (
              <Link href={sourceHref} isExternal>
                {sourceLabel}
              </Link>
            ) : (
              sourceLabel
            )}
          </>
        )}
      </Text>
    </Box>
  );
}

function RecoMedia({ project, title }) {
  if (!project) return null;
  if (project.imageSrc) {
    return (
      <CardImage
        src={project.imageSrc}
        alt={title}
        h="100%"
        w="100%"
        objectPosition={project.imagePosition || "top"}
        borderTopRadius="inherit"
      />
    );
  }

  return (
    <ProjectCover title={title} accent={project.accent} motif={project.motif} />
  );
}

function RecoSection({ children, media, mediaHref }) {
  const MediaWrap = mediaHref ? Link : Box;

  return (
    <Card hoverEffect={false} mb={8}>
      <Box
        as={MediaWrap}
        href={mediaHref}
        isExternal={Boolean(mediaHref)}
        display="block"
        h={{ base: "180px", md: "260px" }}
        overflow="hidden"
        _hover={mediaHref ? { opacity: 0.92 } : undefined}
      >
        {media}
      </Box>
      <Box p={{ base: 6, md: 8 }}>{children}</Box>
    </Card>
  );
}

function quoteParagraphs(t, copyKey) {
  const quote = t(`home.trust.recos.${copyKey}.quote`);
  return Array.isArray(quote) ? quote : [];
}

const TrustSection = () => {
  const { t } = useTranslation();

  return (
    <Box as="section" id="recommandations" py={{ base: 8, md: 12 }} w="100%">
      <SectionKicker>{t("home.trust.kicker")}</SectionKicker>
      <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} mb={4}>
        {t("home.trust.title")}
      </Heading>
      <Text className="intro" fontSize="lg" maxW="720px" mb={10}>
        {t("home.trust.intro")}
      </Text>

      {CLIENT_RECOS.map(({ id, copyKey, projectKey }) => {
        const project = getProjectById(id);
        if (!project) return null;
        const title = t(`projects.list.${projectKey}.title`);

        return (
          <RecoSection
            key={copyKey}
            mediaHref={project.production}
            media={<RecoMedia project={project} title={title} />}
          >
            <Text
              fontFamily="'IBM Plex Mono', monospace"
              fontSize="xs"
              letterSpacing="0.18em"
              textTransform="uppercase"
              color="brand.copper"
              mb={2}
            >
              {t(`home.trust.recos.${copyKey}.role`)}
            </Text>
            <Text
              as="h3"
              fontFamily="'Fraunces', serif"
              fontSize="2xl"
              mb={3}
              color="brand.parchment"
            >
              {t(`home.trust.recos.${copyKey}.person`)}
            </Text>
            <Text fontSize="sm" color="rgba(244,236,225,0.68)" mb={2}>
              {t(`home.trust.recos.${copyKey}.blurb`)}
            </Text>
            <RecoQuote
              paragraphs={quoteParagraphs(t, copyKey)}
              attribution={t(`home.trust.recos.${copyKey}.person`)}
              sourceLabel={t(`home.trust.recos.${copyKey}.source`)}
            />
            <HStack spacing={3} wrap="wrap">
              {project.production && (
                <Button as={Link} href={project.production} isExternal variant="solid" size="sm">
                  {t("home.trust.visitSite")}
                </Button>
              )}
              <Button as={RouterLink} to={`/projects/${id}`} variant="outline" size="sm">
                {t("home.trust.readProject")}
              </Button>
            </HStack>
          </RecoSection>
        );
      })}

      <RecoSection
        mediaHref={INTUITION_PORTAL}
        media={
          <RecoMedia
            project={INTUITION_PORTAL_MEDIA}
            title="Intuition Portal"
          />
        }
      >
        <HStack spacing={3} mb={2} align="center">
          <Text
            as="h3"
            fontFamily="'Fraunces', serif"
            fontSize="2xl"
            color="brand.parchment"
          >
            Intuition
          </Text>
          <Badge
            bg="rgba(201,163,106,0.15)"
            color="brand.copper"
            borderRadius="full"
            px={2}
          >
            {t("home.trust.ambassador")}
          </Badge>
        </HStack>
        <HStack spacing={4} mb={4}>
          <Link href="https://x.com/0xintuition" isExternal aria-label="Intuition on X">
            <Icon as={FaTwitter} boxSize={4} />
          </Link>
          <Link
            href="https://github.com/0xIntuition"
            isExternal
            aria-label="Intuition on GitHub"
          >
            <Icon as={FaGithub} boxSize={4} />
          </Link>
        </HStack>
        <Text fontSize="sm" color="rgba(244,236,225,0.7)" mb={4}>
          {t("home.trust.recos.intuition.blurb")}
        </Text>
        <RecoQuote
          paragraphs={[t("home.trust.recos.intuition.articleQuote")]}
          attribution="Intuition"
          sourceHref="https://x.com/0xIntuition/status/1923456151393533997"
          sourceLabel={t("home.trust.readArticle")}
        />
        <HStack spacing={3} wrap="wrap" mb={8}>
          <Button
            as={Link}
            href={INTUITION_PORTAL}
            isExternal
            variant="solid"
            size="sm"
          >
            {t("home.trust.visitPortal")}
          </Button>
        </HStack>
        <SectionKicker>{t("home.trust.projectsTitle")}</SectionKicker>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
          {INTUITION_PROJECTS.map((item) => (
            <Box
              key={item.id}
              as={RouterLink}
              to={`/projects/${item.id}`}
              p={4}
              border="1px solid rgba(201,163,106,0.16)"
              borderRadius="18px"
              _hover={{
                borderColor: "rgba(201,163,106,0.45)",
                color: "brand.copper",
              }}
            >
              <Text fontWeight="500" fontSize="md" mb={1} color="brand.parchment">
                {t(`home.trust.projects.${item.key}.title`)}
              </Text>
              <Text fontSize="sm" color="rgba(244,236,225,0.65)">
                {t(`home.trust.projects.${item.key}.desc`)}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </RecoSection>
    </Box>
  );
};

export default TrustSection;
