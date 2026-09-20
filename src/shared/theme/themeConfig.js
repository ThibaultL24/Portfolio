// src/shared/theme/themeConfig.js
import { COLORS, FONTS } from "./constants";

export const themeConfig = (isOpenDyslexic) => ({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
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
    global: {
      body: {
        bg: COLORS.PAPER,
        color: COLORS.INK,
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
        color: COLORS.TEXT_SECONDARY,
        fontSize: "lg",
        fontWeight: "400",
        lineHeight: "1.75",
        textTransform: "none",
        fontFamily: isOpenDyslexic ? FONTS.OPENDYS : FONTS.BODY,
      },
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
          bg: COLORS.CYAN,
          color: "#ffffff",
          _hover: {
            bg: COLORS.CYAN_BRIGHT,
          },
        },
        outline: {
          borderColor: COLORS.INK,
          color: COLORS.INK,
          _hover: {
            bg: COLORS.INK,
            color: COLORS.PAPER,
          },
        },
        ghost: {
          color: "inherit",
          _hover: {
            bg: "transparent",
            color: COLORS.CYAN,
          },
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          borderRadius: "16px",
          overflow: "hidden",
          borderColor: COLORS.BORDER,
          bg: COLORS.CARD_BACKGROUND,
        },
      },
    },
  },
});
