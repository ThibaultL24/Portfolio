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
      color="brand.cyan"
      size="sm"
      fontFamily="'Michroma', sans-serif"
      letterSpacing="0.16em"
      _hover={{ bg: "transparent", color: "brand.cyanBright" }}
    >
      {isEnglish ? "FR" : "EN"}
    </Button>
  );
};

export default LanguageToggle;
