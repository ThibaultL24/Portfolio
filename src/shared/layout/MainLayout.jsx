import { Box, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { FontContext, LanguageContext } from "../contexts";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  const { font } = useContext(FontContext);
  const { language } = useContext(LanguageContext);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Flex direction="column" minH="100vh" fontFamily={font} lang={language}>
      <Navbar />
      <Box as="main" pt="100px" flex="1">
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default MainLayout;
