// src/shared/layout/FontToggle.jsx
import { Button } from "@chakra-ui/react";
import { FontContext } from "../contexts";
import { useContext } from "react";

const FontToggle = () => {
  const { isOpenDyslexic, toggleFont } = useContext(FontContext);

  return (
    <Button
      onClick={toggleFont}
      variant="ghost"
      color="brand.cyan"
      size="sm"
      fontFamily="'Michroma', sans-serif"
      _hover={{ bg: "transparent", color: "brand.cyanBright" }}
      title="OpenDyslexic"
    >
      {isOpenDyslexic ? "A" : "Aa"}
    </Button>
  );
};

export default FontToggle;
