import { Box, VStack } from "@chakra-ui/react";

const PageLayout = ({ children, py = 10 }) => {
  return (
    <Box w="100%" py={py} px={{ base: 4, md: 8, lg: 16 }}>
      <VStack spacing={20} align="stretch" w="100%">
        {children}
      </VStack>
    </Box>
  );
};

export default PageLayout;
