// src/shared/ui/ProjectCover.jsx
import { Box, Text } from "@chakra-ui/react";

const ProjectCover = ({ title, accent = "#c9a36a", motif = "orb" }) => {
  const letter = title?.charAt(0) || "·";

  return (
    <Box
      position="relative"
      h="100%"
      minH="220px"
      overflow="hidden"
      bg="#120f0c"
    >
      <Box
        position="absolute"
        inset="0"
        background={`radial-gradient(circle at 30% 20%, ${accent}55, transparent 42%), radial-gradient(circle at 80% 80%, ${accent}22, transparent 50%)`}
      />
      {motif === "orb" && (
        <Box
          position="absolute"
          w="180px"
          h="180px"
          borderRadius="full"
          border="1px solid"
          borderColor={accent}
          opacity={0.45}
          top="18%"
          right="8%"
        />
      )}
      {motif === "grid" && (
        <Box
          position="absolute"
          inset="18% 12%"
          backgroundImage={`linear-gradient(${accent}33 1px, transparent 1px), linear-gradient(90deg, ${accent}33 1px, transparent 1px)`}
          backgroundSize="28px 28px"
          opacity={0.5}
        />
      )}
      {motif === "octagon" && (
        <Box
          position="absolute"
          w="160px"
          h="160px"
          top="22%"
          left="18%"
          border={`1px solid ${accent}`}
          transform="rotate(22deg)"
          opacity={0.5}
        />
      )}
      {motif === "constellation" && (
        <>
          <Box
            position="absolute"
            w="8px"
            h="8px"
            bg={accent}
            borderRadius="full"
            top="28%"
            left="24%"
          />
          <Box
            position="absolute"
            w="6px"
            h="6px"
            bg={accent}
            borderRadius="full"
            top="46%"
            left="58%"
          />
          <Box
            position="absolute"
            w="10px"
            h="10px"
            bg={accent}
            borderRadius="full"
            top="62%"
            left="36%"
          />
        </>
      )}
      <Text
        position="absolute"
        bottom={4}
        left={5}
        fontFamily="'Fraunces', serif"
        fontSize="6xl"
        color={accent}
        opacity={0.28}
        lineHeight="1"
      >
        {letter}
      </Text>
    </Box>
  );
};

export default ProjectCover;
