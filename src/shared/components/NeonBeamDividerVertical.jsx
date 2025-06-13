import { Box } from "@chakra-ui/react";

const NeonBeamDividerVertical = ({
  width = "2px",
  color = "#00ff9d",
  ...props
}) => (
  <Box position="relative" h="100%" w={width} overflow="hidden" {...props}>
    {/* Ligne de base néon */}
    <Box
      h="100%"
      w={width}
      bgGradient={`linear(to-b, transparent, ${color}, transparent)`}
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
      h="30%"
      w={width}
      bgGradient={`linear(to-b, transparent, ${color}, transparent)`}
      filter="blur(2px)"
      opacity={0.8}
      zIndex={2}
      animation="moveNeonBeamVertical 3s linear infinite"
    />
    <style>{`
      @keyframes moveNeonBeamVertical {
        0% { top: -30%; }
        100% { top: 100%; }
      }
    `}</style>
  </Box>
);

export default NeonBeamDividerVertical;
