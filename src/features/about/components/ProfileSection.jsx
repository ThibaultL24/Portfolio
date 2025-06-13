import {
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";
import Card from "../../../shared/ui/Card";
import CardImage from "../../../shared/ui/CardImage";
import profileImg from "../../../assets/img/Thibault1.jpg";
import { useTranslation } from "../../../hooks/useTranslation";

const ProfileSection = () => {
  const { t } = useTranslation();

  return (
    <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} gap={10} py={8}>
      <GridItem>
        <Card showShadow={true} boxShadow="0 8px 16px rgba(0, 0, 0, 0.2)">
          <CardImage
            src={profileImg}
            alt="Photo de profil"
            w="full"
            zoomEffect={true}
            _hover={{
              transform: "scale(1.02)",
            }}
          />
        </Card>
      </GridItem>

      <GridItem>
        <VStack align="start" spacing={6}>
          <Text
            fontSize="lg"
            color="gray.300"
            lineHeight="1.8"
            letterSpacing="0.3px"
          >
            {t("about.profile.introduction")}
          </Text>

          <Text
            fontSize="lg"
            color="gray.300"
            lineHeight="1.8"
            letterSpacing="0.3px"
          >
            {t("about.profile.experience")}
          </Text>

          <Text
            fontSize="lg"
            color="gray.300"
            lineHeight="1.8"
            letterSpacing="0.3px"
          >
            {t("about.profile.transition")}
          </Text>

          <Text
            fontSize="lg"
            color="gray.300"
            lineHeight="1.8"
            letterSpacing="0.3px"
          >
            {t("about.profile.current")}
          </Text>

          <Text
            fontSize="lg"
            color="gray.300"
            lineHeight="1.8"
            letterSpacing="0.3px"
          >
            {t("about.profile.conclusion")}
          </Text>

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
            {t("about.profile.downloadCV")}
          </Button>
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default ProfileSection;
