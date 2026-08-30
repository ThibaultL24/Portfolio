// src/shared/components/NeonBeamDividerVertical.jsx
import { Box } from "@chakra-ui/react";

const NeonBeamDividerVertical = ({
  width = "1px",
  color = "#c9a36a",
  ...props
}) => (
  <Box position="relative" h="100%" w={width} overflow="hidden" {...props}>
    <Box
      h="100%"
      w={width}
      bgGradient={`linear(to-b, transparent, ${color}, transparent)`}
      opacity={0.45}
    />
  </Box>
);

export default NeonBeamDividerVertical;
