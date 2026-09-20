// src/shared/theme/themeConfig.js
import { COLORS, FONTS } from "./constants";

export const themeConfig = (isOpenDyslexic) => ({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  semanticTokens: {
    colors: {
      "brand.ink": { default: "#111111", _dark: "#f2f2f2" },
      "brand.paper": { default: "#e2e2e2", _dark: "#0a0a0a" },
      "brand.cardBg": { default: "#f6f6f6", _dark: "#161616" },
      "brand.muted": { default: "#6b6b6b", _dark: "rgba(242,242,242,0.62)" },
      "brand.line": { default: "rgba(17,17,17,0.14)", _dark: "rgba(255,255,255,0.14)" },
      "brand.nav": { default: "rgba(226,226,226,0.92)", _dark: "rgba(10,10,10,0.9)" },
      "brand.cyan": { default: "#2f7ec9", _dark: "#6eb4f0" },
      "brand.cyanBright": { default: "#4a9ae6", _dark: "#8cc4f5" },
      "brand.night": { default: "#111111", _dark: "#0a0a0a" },
      "brand.copper": { default: "#2f7ec9", _dark: "#6eb4f0" },
      "brand.parchment": { default: "#e2e2e2", _dark: "#0a0a0a" },
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
          bg: isDark ? "#0a0a0a" : "#e2e2e2",
          color: isDark ? "#f2f2f2" : "#111111",
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
          color: isDark ? "rgba(242,242,242,0.62)" : "#6b6b6b",
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
          color: "#ffffff",
          _hover: {
            bg: "brand.cyanBright",
            color: "#ffffff",
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
