// src/shared/components/NeonBeamDivider.jsx
import { Box } from "@chakra-ui/react";

const NeonBeamDivider = ({ height = "1px", color = "#c9a36a", ...props }) => (
  <Box position="relative" w="100%" h={height} overflow="hidden" {...props}>
    <Box
      w="100%"
      h={height}
      bgGradient={`linear(to-r, transparent, ${color}, transparent)`}
      opacity={0.55}
    />
  </Box>
);

export default NeonBeamDivider;
