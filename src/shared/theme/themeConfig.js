// src/shared/theme/themeConfig.js
import { COLORS, FONTS } from "./constants";

export const themeConfig = (isOpenDyslexic) => ({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  semanticTokens: {
    colors: {
      "brand.ink": "#f4f7fb",
      "brand.paper": "#07090d",
      "brand.cardBg": "rgba(18,22,28,0.55)",
      "brand.muted": "rgba(244,247,251,0.68)",
      "brand.line": "rgba(126,200,255,0.28)",
      "brand.nav": "rgba(7,9,13,0.82)",
      "brand.cyan": "#7ec8ff",
      "brand.cyanBright": "#b7e3ff",
      "brand.cyanTab": "#3d86c8",
      "brand.night": "#0a0a0a",
      "brand.copper": "#6eb4f0",
      "brand.parchment": "#0a0a0a",
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
    global: () => {
      return {
        body: {
          bg: "#07090d",
          color: "#f4f7fb",
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
          color: "rgba(242,242,242,0.62)",
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
          bg: "brand.cyanTab",
          color: "#ffffff",
          boxShadow: "0 0 18px rgba(47, 126, 201, 0.28)",
          transition: "box-shadow 0.25s ease, background 0.25s ease",
          _hover: {
            bg: "#4a96d4",
            color: "#ffffff",
            boxShadow: "0 0 22px rgba(61, 134, 200, 0.4)",
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
