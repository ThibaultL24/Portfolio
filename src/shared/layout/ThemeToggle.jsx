// src/shared/layout/ThemeToggle.jsx
import { IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <IconButton
      aria-label={isDark ? "Mode classique" : "Mode Intuition"}
      title={isDark ? "Classique" : "Intuition"}
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      variant="ghost"
      color="brand.ink"
      size="sm"
      onClick={toggleColorMode}
      _hover={{ bg: "transparent", color: "brand.cyan" }}
    />
  );
};

export default ThemeToggle;
