// src/shared/components/NeonOutlineBox.jsx
import { Box } from "@chakra-ui/react";

const NeonOutlineBox = ({ children, borderRadius = 22, p = 6, ...props }) => (
  <Box
    position="relative"
    borderRadius={borderRadius}
    overflow="hidden"
    p={p}
    border="1px solid rgba(201,163,106,0.2)"
    bg="rgba(20,17,14,0.7)"
    {...props}
  >
    <Box position="relative" zIndex={3} borderRadius={borderRadius}>
      {children}
    </Box>
  </Box>
);

export default NeonOutlineBox;
