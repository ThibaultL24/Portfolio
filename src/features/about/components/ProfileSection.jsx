// src/features/about/components/ProfileSection.jsx
import { Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import Card from "../../../shared/ui/Card";
import CardImage from "../../../shared/ui/CardImage";
import profileImg from "../../../assets/img/Thibault1.jpg";
import { useTranslation } from "../../../hooks/useTranslation";

const ProfileSection = () => {
  const { t } = useTranslation();
  const paragraphs = [
    "introduction",
    "experience",
    "transition",
    "current",
    "conclusion",
  ];

  return (
    <Grid templateColumns={{ base: "1fr", md: "1fr 1.6fr" }} gap={10} py={4}>
      <GridItem>
        <Card hoverEffect={false}>
          <CardImage src={profileImg} alt="Thibault Lenormand" w="full" />
        </Card>
      </GridItem>
      <GridItem>
        <VStack align="start" spacing={5}>
          {paragraphs.map((key) => (
            <Text
              key={key}
              fontSize="md"
              color="rgba(244,236,225,0.78)"
              lineHeight="1.85"
            >
              {t(`about.profile.${key}`)}
            </Text>
          ))}
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default ProfileSection;
