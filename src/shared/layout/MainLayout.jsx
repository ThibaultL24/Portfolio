// src/shared/layout/MainLayout.jsx
import { Box, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { FontContext, LanguageContext } from "../contexts";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  const { isOpenDyslexic } = useContext(FontContext);
  const { isEnglish } = useContext(LanguageContext);

  return (
    <Flex
      direction="column"
      minH="100vh"
      bg="brand.paper"
      color="brand.ink"
      className={isOpenDyslexic ? "font-opendyslexic" : "font-inter"}
      lang={isEnglish ? "en" : "fr"}
    >
      <div className="grid-overlay" />
      <Navbar />
      <Box as="main" pt={{ base: "64px", md: "80px" }} flex="1" position="relative" zIndex={1}>
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default MainLayout;
