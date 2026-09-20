// src/shared/components/NeonBeamDivider.jsx
import { Box } from "@chakra-ui/react";

const NeonBeamDivider = ({ height = "2px", color = "#c4102e", ...props }) => (
  <Box w="72px" h={height} bg={color} {...props} />
);

export default NeonBeamDivider;
