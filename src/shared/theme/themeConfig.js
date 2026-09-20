// src/shared/theme/themeConfig.js
import { COLORS, FONTS } from "./constants";

export const themeConfig = (isOpenDyslexic) => ({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  semanticTokens: {
    colors: {
      "brand.ink": { default: "#111111", _dark: "#f4f4f2" },
      "brand.paper": { default: "#ffffff", _dark: "#050505" },
      "brand.cardBg": { default: "#ffffff", _dark: "#111113" },
      "brand.muted": { default: "#5c564f", _dark: "rgba(244,244,242,0.64)" },
      "brand.line": { default: "rgba(17,17,17,0.1)", _dark: "rgba(255,255,255,0.12)" },
      "brand.nav": { default: "rgba(255,255,255,0.88)", _dark: "rgba(5,5,5,0.88)" },
      "brand.cyan": { default: "#2f9e90", _dark: "#5eead4" },
      "brand.cyanBright": { default: "#3cb5a6", _dark: "#8affef" },
      "brand.night": { default: "#111111", _dark: "#050505" },
      "brand.copper": { default: "#2f9e90", _dark: "#5eead4" },
      "brand.parchment": { default: "#ffffff", _dark: "#050505" },
    },
  },
  colors: {
    brand: {
      ink: COLORS.INK,
      night: COLORS.NIGHT,
      paper: COLORS.PAPER,
      cardBg: COLORS.CARD_BACKGROUND,
      border: COLORS.BORDER,
      neon: COLORS.CYAN,
      copper: COLORS.CYAN,
      copperHot: COLORS.CYAN_BRIGHT,
      cyan: COLORS.CYAN,
      cyanBright: COLORS.CYAN_BRIGHT,
      magenta: COLORS.MAGENTA,
      moss: COLORS.CYAN,
      parchment: COLORS.PAPER,
      neonGlow: COLORS.NEON_GLOW,
    },
  },
  fonts: {
    heading: isOpenDyslexic ? FONTS.OPENDYS : FONTS.SUBTITLE,
    body: isOpenDyslexic ? FONTS.OPENDYS : FONTS.BODY,
    mono: FONTS.MONO,
  },
  styles: {
    global: (props) => {
      const isDark = props.colorMode === "dark";
      return {
        body: {
          bg: isDark ? "#050505" : "#ffffff",
          color: isDark ? "#f4f4f2" : "#111111",
          fontFamily: isOpenDyslexic ? FONTS.OPENDYS : FONTS.BODY,
          minHeight: "100vh",
          width: "100%",
          overflowX: "hidden",
        },
        "h1, .page-title, .font-title": {
          color: "inherit",
          fontWeight: "600",
          letterSpacing: "-0.03em",
          fontFamily: isOpenDyslexic ? FONTS.OPENDYS : FONTS.DISPLAY,
          textTransform: "none",
          textShadow: "none",
        },
        "h2, h3, h4, h5, h6, .section-title, .font-subtitle": {
          color: "inherit",
          fontWeight: "500",
          letterSpacing: "-0.02em",
          fontFamily: isOpenDyslexic ? FONTS.OPENDYS : FONTS.SUBTITLE,
          textTransform: "none",
          textShadow: "none",
        },
        "p, li, .font-body": {
          fontFamily: isOpenDyslexic ? FONTS.OPENDYS : FONTS.BODY,
        },
        a: {
          color: "inherit",
        },
        "p.intro, .intro": {
          color: isDark ? "rgba(244,244,242,0.64)" : "#5c564f",
          fontSize: "lg",
          fontWeight: "400",
          lineHeight: "1.75",
          textTransform: "none",
          fontFamily: isOpenDyslexic ? FONTS.OPENDYS : FONTS.BODY,
        },
      };
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "999px",
        fontWeight: "600",
        letterSpacing: "0.01em",
        textTransform: "none",
        fontFamily: isOpenDyslexic ? FONTS.OPENDYS : FONTS.BODY,
      },
      variants: {
        solid: {
          bg: "brand.cyan",
          color: { default: "#ffffff", _dark: "#050505" },
          _hover: {
            bg: "brand.cyanBright",
          },
        },
        outline: {
          borderColor: "brand.ink",
          color: "brand.ink",
          _hover: {
            bg: "brand.ink",
            color: "brand.paper",
          },
        },
        ghost: {
          color: "inherit",
          _hover: {
            bg: "transparent",
            color: "brand.cyan",
          },
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          borderRadius: "16px",
          overflow: "hidden",
          borderColor: "brand.line",
          bg: "brand.cardBg",
        },
      },
    },
    Input: {
      variants: {
        outline: {
          field: {
            bg: "brand.cardBg",
            borderColor: "brand.line",
            color: "brand.ink",
          },
        },
      },
    },
  },
});
