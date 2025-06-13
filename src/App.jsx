import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Creations from "./pages/Creations";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails";
import MainLayout from "./shared/layout/MainLayout";
import AnimatedBackground from "./shared/components/AnimatedBackground";
import { themeConfig } from "./shared/theme/themeConfig";
import { FontContext, LanguageContext } from "./shared/contexts";

function App() {
  const [isOpenDyslexic, setIsOpenDyslexic] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);

  // Création du thème en fonction de la police sélectionnée
  const theme = extendTheme(themeConfig(isOpenDyslexic));

  return (
    <Router>
      <ChakraProvider theme={theme}>
        <FontContext.Provider
          value={{
            isOpenDyslexic,
            toggleFont: () => setIsOpenDyslexic(!isOpenDyslexic),
          }}
        >
          <LanguageContext.Provider
            value={{
              isEnglish,
              toggleLanguage: () => setIsEnglish(!isEnglish),
            }}
          >
            <AnimatedBackground />
            <MainLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route
                  path="/projects/:projectId"
                  element={<ProjectDetails />}
                />
                <Route path="/creations" element={<Creations />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </MainLayout>
          </LanguageContext.Provider>
        </FontContext.Provider>
      </ChakraProvider>
    </Router>
  );
}

export default App;
