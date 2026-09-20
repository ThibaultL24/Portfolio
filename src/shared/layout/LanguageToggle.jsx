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
      color="brand.ink"
      size="sm"
      fontWeight="600"
      _hover={{ bg: "transparent", color: "brand.cyan" }}
    >
      {isEnglish ? "FR" : "EN"}
    </Button>
  );
};

export default LanguageToggle;
