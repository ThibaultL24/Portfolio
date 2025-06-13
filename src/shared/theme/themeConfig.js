export const themeConfig = (isOpenDyslexic) => ({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      cardBg: "#0a0a0a",
      border: "#A7BFAD",
      neon: "#00ff9d",
      neonGlow: "0 0 10px rgba(0, 255, 157, 0.5)",
    },
  },
  fonts: {
    heading: isOpenDyslexic
      ? "'OpenDyslexic', sans-serif"
      : "'Montserrat', sans-serif",
    body: isOpenDyslexic
      ? "'OpenDyslexic', sans-serif"
      : "'Montserrat', sans-serif",
  },
  styles: {
    global: (props) => ({
      body: {
        bg: "#0a0a0a",
        color: "white",
        fontFamily: isOpenDyslexic
          ? "'OpenDyslexic', sans-serif"
          : "'Montserrat', sans-serif",
        minHeight: "100vh",
        width: "100vw",
        overflowX: "hidden",
      },
      // Styles globaux pour les titres
      "h1, h2, h3, h4, h5, h6, .section-title, .page-title": {
        color: "#00ff9d",
        fontWeight: "600",
        letterSpacing: "tight",
        textShadow: "0 0 10px rgba(0, 255, 157, 0.5)",
        ...(!isOpenDyslexic && {
          textShadow:
            "0px 2px 4px rgba(0, 0, 0, 0.3), 0 0 10px rgba(0, 255, 157, 0.5)",
        }),
      },
      // Styles globaux pour les paragraphes et textes
      "p, span, div": {
        color: "gray.400",
      },
      // Styles globaux pour les liens
      "a:not(.chakra-button)": {
        color: "brand.neon",
        borderBottom: "1px solid brand.neon",
        transition: "all 0.2s ease",
        textShadow: "0 0 10px rgba(0, 255, 157, 0.3)",
        _hover: {
          color: "white",
          textDecoration: "none",
          borderBottomColor: "white",
          textShadow: "0 0 15px rgba(0, 255, 157, 0.5)",
        },
      },
      // Styles pour les cartes
      ".card": {
        bg: "black",
        borderColor: "brand.neon",
        boxShadow: "0 0 15px rgba(0, 255, 157, 0.2)",
        _hover: {
          boxShadow: "0 0 20px rgba(0, 255, 157, 0.3)",
        },
      },
      // Styles pour les inputs
      "input, textarea, select": {
        color: "white",
        bg: "gray.800",
        borderColor: "brand.neon",
        boxShadow: "0 0 10px rgba(0, 255, 157, 0.2)",
        _focus: {
          borderColor: "brand.neon",
          boxShadow: "0 0 0 1px brand.neon, 0 0 15px rgba(0, 255, 157, 0.4)",
        },
      },
      "p.intro, .intro": {
        color: "gray.400",
        fontSize: "lg",
        fontWeight: "medium",
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "8px",
        fontWeight: "500",
      },
      variants: {
        solid: {
          bg: "gray.700",
          color: "brand.neon",
          borderColor: "brand.neon",
          boxShadow: "0 0 10px rgba(0, 255, 157, 0.3)",
          _hover: {
            bg: "gray.600",
            boxShadow: "0 0 15px rgba(0, 255, 157, 0.4)",
          },
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          borderRadius: "12px",
          overflow: "hidden",
          borderColor: "brand.neon",
          boxShadow: "0 0 15px rgba(0, 255, 157, 0.2)",
          _hover: {
            boxShadow: "0 0 20px rgba(0, 255, 157, 0.3)",
          },
        },
      },
    },
  },
});
