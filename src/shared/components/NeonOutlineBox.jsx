// src/shared/components/NeonOutlineBox.jsx
import { Box } from "@chakra-ui/react";

const NeonOutlineBox = ({ children, borderRadius = 0, p = 6, ...props }) => (
  <Box
    position="relative"
    borderRadius={borderRadius}
    overflow="hidden"
    p={p}
    border="1px solid rgba(17,19,24,0.14)"
    bg="white"
    {...props}
  >
    <Box position="relative" zIndex={3} borderRadius={borderRadius}>
      {children}
    </Box>
  </Box>
);

export default NeonOutlineBox;
