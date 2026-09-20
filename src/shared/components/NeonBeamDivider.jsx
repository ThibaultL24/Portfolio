// src/shared/components/NeonBeamDivider.jsx
import { Box } from "@chakra-ui/react";

const NeonBeamDivider = ({ height = "2px", color = "#4eead5", ...props }) => (
  <Box w="72px" h={height} bg={color} {...props} />
);

export default NeonBeamDivider;
