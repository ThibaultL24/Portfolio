import { Button } from "@chakra-ui/react";
import { FontContext } from "../contexts";
import { useContext } from "react";

const FontToggle = () => {
  const { isOpenDyslexic, toggleFont } = useContext(FontContext);

  return (
    <Button
      onClick={toggleFont}
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
      {isOpenDyslexic ? "A" : "Aa"}
    </Button>
  );
};

export default FontToggle;
