// src/shared/layout/LanguageToggle.jsx
import { Button } from "@chakra-ui/react";
import { LanguageContext } from "../contexts";
import { useContext } from "react";

const LanguageToggle = () => {
  const { isEnglish, toggleLanguage } = useContext(LanguageContext);

  return (
    <Button
      onClick={toggleLanguage}
      variant="ghost"
      color="brand.copper"
      size="sm"
      fontFamily="'IBM Plex Mono', monospace"
      letterSpacing="0.12em"
      _hover={{ bg: "rgba(201,163,106,0.08)", color: "brand.copperHot" }}
    >
      {isEnglish ? "FR" : "EN"}
    </Button>
  );
};

export default LanguageToggle;
