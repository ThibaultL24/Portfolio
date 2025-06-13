import { Button } from "@chakra-ui/react";
import { LanguageContext } from "../contexts";
import { useContext } from "react";

const LanguageToggle = () => {
  const { isEnglish, toggleLanguage } = useContext(LanguageContext);

  return (
    <Button
      onClick={toggleLanguage}
      variant="ghost"
      color="brand.neon"
      textShadow="0 0 10px rgba(0, 255, 157, 0.5)"
      _hover={{
        color: "brand.neon",
        textShadow: "0 0 15px rgba(0, 255, 157, 0.5)",
        transform: "translateY(-2px)",
        bg: "rgba(0,255,157,0.05)",
      }}
      _active={{
        color: "brand.neon",
        textShadow: "0 0 15px rgba(0, 255, 157, 0.5)",
        transform: "translateY(0)",
      }}
      size="sm"
    >
      {isEnglish ? "FR" : "EN"}
    </Button>
  );
};

export default LanguageToggle;
