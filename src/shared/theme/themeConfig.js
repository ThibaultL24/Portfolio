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
    heading: isOpenDyslexic ? FONTS.OPENDYS : FONTS.DISPLAY,
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
      "h1, h2, h3, h4, h5, h6, .section-title, .page-title": {
        color: "inherit",
        fontWeight: "500",
        letterSpacing: "0.01em",
        fontFamily: isOpenDyslexic ? FONTS.OPENDYS : FONTS.DISPLAY,
        textTransform: "uppercase",
        textShadow: "none",
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
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "0",
        fontWeight: "600",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        fontFamily: isOpenDyslexic ? FONTS.OPENDYS : FONTS.BODY,
      },
      variants: {
        solid: {
          bg: COLORS.CYAN,
          color: COLORS.NIGHT,
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
          borderRadius: "0",
          overflow: "hidden",
          borderColor: COLORS.BORDER,
          bg: COLORS.CARD_BACKGROUND,
        },
      },
    },
  },
});
