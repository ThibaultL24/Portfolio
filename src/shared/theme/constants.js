// src/shared/theme/constants.js
export const COLORS = {
  INK: "#111111",
  INK_LIFT: "#2a2622",
  INK_SOFT: "#3d3832",
  NIGHT: "#050505",
  PAPER: "#ffffff",
  PARCHMENT: "#ffffff",
  PARCHMENT_MUTED: "#6a635b",
  CYAN: "#2f9e90",
  CYAN_BRIGHT: "#3cb5a6",
  MAGENTA: "#c45c3e",
  COPPER: "#2f9e90",
  COPPER_HOT: "#3cb5a6",
  MOSS: "#2f9e90",
  TEXT_PRIMARY: "#111111",
  TEXT_SECONDARY: "#5c564f",
  BORDER: "rgba(17, 17, 17, 0.1)",
  NEON: "#2f9e90",
  NEON_GLOW: "none",
  NEON_GLOW_STRONG: "none",
  NEON_GLOW_WEAK: "none",
  BACKGROUND: "#ffffff",
  CARD_BACKGROUND: "#ffffff",
};

export const SHADOWS = {
  CARD: "0 18px 40px rgba(26, 24, 22, 0.06)",
  CARD_HOVER: "0 24px 50px rgba(26, 24, 22, 0.1)",
  BUTTON: "none",
  BUTTON_HOVER: "none",
  TEXT: "none",
  TEXT_HOVER: "none",
};

export const TRANSITIONS = {
  DEFAULT: "all 0.2s ease",
  CARD: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.2s ease",
  BUTTON: "all 0.2s ease",
};

export const BORDER_RADIUS = {
  SMALL: "4px",
  MEDIUM: "8px",
  LARGE: "16px",
};

export const FONTS = {
  DISPLAY: "'Syne', sans-serif",
  SUBTITLE: "'Outfit', sans-serif",
  BODY: "'Manrope', system-ui, sans-serif",
  MONO: "'Outfit', sans-serif",
  ACCENT: "'Outfit', sans-serif",
  MONTSE: "'Manrope', system-ui, sans-serif",
  OPENDYS: "'OpenDyslexic', sans-serif",
};

export const PARTICLES = {
  COUNT: 50,
  SIZE: "3px",
  COLOR: "rgba(47, 158, 144, 0.28)",
  GLOW: "none",
  ANIMATION: {
    DURATION: { MIN: 5, MAX: 10 },
    DELAY: 0.1,
    SCALE: { MIN: 1, MAX: 2 },
    OPACITY: { MIN: 0.2, MAX: 0.8 },
    MOVEMENT: { MIN: 100, MAX: 100 },
  },
};
