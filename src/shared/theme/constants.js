// src/shared/theme/constants.js
export const COLORS = {
  INK: "#111111",
  INK_LIFT: "#1a1a1a",
  INK_SOFT: "#2a2a2a",
  NIGHT: "#0a0a0a",
  PAPER: "#e2e2e2",
  PARCHMENT: "#e2e2e2",
  PARCHMENT_MUTED: "#6b6b6b",
  CYAN: "#c4102e",
  CYAN_BRIGHT: "#e11d48",
  MAGENTA: "#c4102e",
  COPPER: "#c4102e",
  COPPER_HOT: "#e11d48",
  MOSS: "#6b6b6b",
  TEXT_PRIMARY: "#111111",
  TEXT_SECONDARY: "#6b6b6b",
  BORDER: "rgba(17, 17, 17, 0.12)",
  NEON: "#c4102e",
  NEON_GLOW: "none",
  NEON_GLOW_STRONG: "none",
  NEON_GLOW_WEAK: "none",
  BACKGROUND: "#e2e2e2",
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
  COLOR: "rgba(17, 17, 17, 0.2)",
  GLOW: "none",
  ANIMATION: {
    DURATION: { MIN: 5, MAX: 10 },
    DELAY: 0.1,
    SCALE: { MIN: 1, MAX: 2 },
    OPACITY: { MIN: 0.2, MAX: 0.8 },
    MOVEMENT: { MIN: 100, MAX: 100 },
  },
};
