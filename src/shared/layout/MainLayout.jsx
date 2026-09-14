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
      className={isOpenDyslexic ? "font-opendyslexic" : "font-outfit"}
      lang={isEnglish ? "en" : "fr"}
    >
      <div className="grain-overlay" />
      <Navbar />
      <Box as="main" pt="72px" flex="1" position="relative" zIndex={1}>
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default MainLayout;
