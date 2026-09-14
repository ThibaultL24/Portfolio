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
      color="brand.copper"
      size="sm"
      fontFamily="'IBM Plex Mono', monospace"
      _hover={{ bg: "rgba(201,163,106,0.08)", color: "brand.copperHot" }}
      title="OpenDyslexic"
    >
      {isOpenDyslexic ? "A" : "Aa"}
    </Button>
  );
};

export default FontToggle;
