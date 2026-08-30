// src/shared/theme/themeConfig.js
import { COLORS, FONTS } from "./constants";

export const themeConfig = (isOpenDyslexic) => ({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      ink: COLORS.INK,
      cardBg: COLORS.CARD_BACKGROUND,
      border: COLORS.BORDER,
      neon: COLORS.COPPER,
      copper: COLORS.COPPER,
      copperHot: COLORS.COPPER_HOT,
      moss: COLORS.MOSS,
      parchment: COLORS.PARCHMENT,
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
        bg: COLORS.INK,
        color: COLORS.PARCHMENT,
        fontFamily: isOpenDyslexic ? FONTS.OPENDYS : FONTS.BODY,
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden",
      },
      "h1, h2, h3, h4, h5, h6, .section-title, .page-title": {
        color: COLORS.PARCHMENT,
        fontWeight: "500",
        letterSpacing: "-0.03em",
        fontFamily: isOpenDyslexic ? FONTS.OPENDYS : FONTS.DISPLAY,
        textShadow: "none",
      },
      a: {
        color: "inherit",
      },
      "p.intro, .intro": {
        color: COLORS.PARCHMENT_MUTED,
        fontSize: "lg",
        fontWeight: "400",
        lineHeight: "1.8",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "999px",
        fontWeight: "500",
        letterSpacing: "0.04em",
      },
      variants: {
        solid: {
          bg: COLORS.COPPER,
          color: COLORS.INK,
          _hover: {
            bg: COLORS.COPPER_HOT,
          },
        },
        outline: {
          borderColor: "rgba(201, 163, 106, 0.5)",
          color: COLORS.COPPER,
          _hover: {
            bg: "rgba(201, 163, 106, 0.08)",
            borderColor: COLORS.COPPER,
          },
        },
        ghost: {
          color: COLORS.PARCHMENT_MUTED,
          _hover: {
            bg: "rgba(244, 236, 225, 0.05)",
            color: COLORS.PARCHMENT,
          },
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          borderRadius: "22px",
          overflow: "hidden",
          borderColor: COLORS.BORDER,
          bg: COLORS.CARD_BACKGROUND,
        },
      },
    },
  },
});
