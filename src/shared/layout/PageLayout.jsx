// src/shared/layout/PageLayout.jsx
import { Box, VStack } from "@chakra-ui/react";

const PageLayout = ({ children, py = 10 }) => (
  <Box w="100%" py={py} px={{ base: 4, md: 8, lg: 16 }} maxW="1400px" mx="auto">
    <VStack spacing={{ base: 12, md: 16 }} align="stretch" w="100%">
      {children}
    </VStack>
  </Box>
);

export default PageLayout;
