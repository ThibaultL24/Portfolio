// src/shared/theme/constants.js
export const COLORS = {
  INK: "#111318",
  INK_LIFT: "#1a1c24",
  INK_SOFT: "#2a2d38",
  NIGHT: "#050505",
  PAPER: "#f4f4f2",
  PARCHMENT: "#f4f4f2",
  PARCHMENT_MUTED: "#6f7380",
  CYAN: "#4eead5",
  CYAN_BRIGHT: "#70fff0",
  MAGENTA: "#d100ff",
  COPPER: "#4eead5",
  COPPER_HOT: "#70fff0",
  MOSS: "#4eead5",
  TEXT_PRIMARY: "#111318",
  TEXT_SECONDARY: "#5c606c",
  BORDER: "rgba(17, 19, 24, 0.14)",
  NEON: "#4eead5",
  NEON_GLOW: "0 0 18px rgba(78, 234, 213, 0.28)",
  NEON_GLOW_STRONG: "0 0 28px rgba(78, 234, 213, 0.4)",
  NEON_GLOW_WEAK: "0 0 12px rgba(78, 234, 213, 0.18)",
  BACKGROUND: "#f4f4f2",
  CARD_BACKGROUND: "#ffffff",
};

export const SHADOWS = {
  CARD: "0 16px 40px rgba(17, 19, 24, 0.08)",
  CARD_HOVER: "0 22px 50px rgba(17, 19, 24, 0.14)",
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
  SMALL: "0px",
  MEDIUM: "2px",
  LARGE: "4px",
};

export const FONTS = {
  DISPLAY: "'Teko', sans-serif",
  BODY: "'Inter', system-ui, sans-serif",
  MONO: "'Michroma', sans-serif",
  MONTSE: "'Inter', system-ui, sans-serif",
  OPENDYS: "'OpenDyslexic', sans-serif",
};

export const PARTICLES = {
  COUNT: 50,
  SIZE: "3px",
  COLOR: "rgba(78, 234, 213, 0.35)",
  GLOW: "0 0 10px rgba(78, 234, 213, 0.25)",
  ANIMATION: {
    DURATION: { MIN: 5, MAX: 10 },
    DELAY: 0.1,
    SCALE: { MIN: 1, MAX: 2 },
    OPACITY: { MIN: 0.2, MAX: 0.8 },
    MOVEMENT: { MIN: -100, MAX: 100 },
  },
};
