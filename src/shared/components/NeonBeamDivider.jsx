import { Box } from "@chakra-ui/react";

const NeonBeamDivider = ({ height = "2px", color = "#00ff9d", ...props }) => (
  <Box position="relative" w="100%" h={height} overflow="hidden" {...props}>
    {/* Ligne de base néon */}
    <Box
      w="100%"
      h={height}
      bgGradient={`linear(to-r, transparent, ${color}, transparent)`}
      opacity={0.4}
      position="absolute"
      top={0}
      left={0}
      zIndex={1}
    />
    {/* Faisceau lumineux animé */}
    <Box
      as="span"
      position="absolute"
      top={0}
      left={0}
      h={height}
      w="30%"
      bgGradient={`linear(to-r, transparent, ${color}, transparent)`}
      filter="blur(2px)"
      opacity={0.8}
      zIndex={2}
      animation="moveNeonBeam 3s linear infinite"
    />
    <style>{`
      @keyframes moveNeonBeam {
        0% { left: -30%; }
        100% { left: 100%; }
      }
    `}</style>
  </Box>
);

export default NeonBeamDivider;
