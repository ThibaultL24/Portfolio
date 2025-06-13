import { Box, Heading, Text, Icon, Grid, VStack } from "@chakra-ui/react";
import { FaBriefcase } from "react-icons/fa";
import NeonBeamDivider from "../../../shared/components/NeonBeamDivider";
import NeonBeamDividerVertical from "../../../shared/components/NeonBeamDividerVertical";

const ExperienceSection = ({ experiences }) => {
  return (
    <Box>
      <Heading as="h2" size="lg" mb={8} display="flex" alignItems="center">
        <Icon as={FaBriefcase} mr={3} color="white" />
        EXPÉRIENCE
      </Heading>

      <VStack spacing={6} align="stretch">
        {experiences.map((exp, index) => (
          <Grid
            key={index}
            templateColumns={{ base: "1fr", md: "1fr 3fr" }}
            gap={6}
            p={6}
            position="relative"
            borderRadius="lg"
            overflow="hidden"
          >
            {/* Neon en haut */}
            <NeonBeamDivider
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                zIndex: 2,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
              }}
              height="2px"
            />
            {/* Neon en bas */}
            <NeonBeamDivider
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                zIndex: 2,
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12,
              }}
              height="2px"
            />
            {/* Neon à gauche (vertical, vrai effet) */}
            <NeonBeamDividerVertical
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                zIndex: 2,
                borderTopLeftRadius: 12,
                borderBottomLeftRadius: 12,
              }}
              width="2px"
            />
            {/* Neon à droite (vertical, vrai effet) */}
            <NeonBeamDividerVertical
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                height: "100%",
                zIndex: 2,
                borderTopRightRadius: 12,
                borderBottomRightRadius: 12,
              }}
              width="2px"
            />
            <Box>
              <Text fontWeight="bold" color="white">
                {exp.period}
              </Text>
            </Box>

            <Box>
              <Heading as="h3" size="md" mb={2}>
                {exp.title}
              </Heading>
              <Text color="white" mb={3}>
                {exp.company}
              </Text>
              <Text>{exp.description}</Text>
            </Box>
          </Grid>
        ))}
      </VStack>
    </Box>
  );
};

export default ExperienceSection;
