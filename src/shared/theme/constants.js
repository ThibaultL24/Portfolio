// src/shared/theme/constants.js
export const COLORS = {
  INK: "#0e0c0a",
  INK_LIFT: "#171410",
  INK_SOFT: "#211c17",
  PARCHMENT: "#f4ece1",
  PARCHMENT_MUTED: "#c9bfb0",
  COPPER: "#c9a36a",
  COPPER_HOT: "#e4c48a",
  MOSS: "#7d9b8c",
  TEXT_PRIMARY: "#f4ece1",
  TEXT_SECONDARY: "rgba(244, 236, 225, 0.68)",
  BORDER: "rgba(201, 163, 106, 0.28)",
  NEON: "#c9a36a",
  NEON_GLOW: "0 0 18px rgba(201, 163, 106, 0.28)",
  NEON_GLOW_STRONG: "0 0 28px rgba(201, 163, 106, 0.4)",
  NEON_GLOW_WEAK: "0 0 12px rgba(201, 163, 106, 0.18)",
  BACKGROUND: "#0e0c0a",
  CARD_BACKGROUND: "#14110e",
};

export const SHADOWS = {
  CARD: "0 24px 60px rgba(0, 0, 0, 0.35)",
  CARD_HOVER: "0 30px 80px rgba(201, 163, 106, 0.16)",
  BUTTON: "0 8px 24px rgba(201, 163, 106, 0.18)",
  BUTTON_HOVER: "0 12px 32px rgba(201, 163, 106, 0.28)",
  TEXT: "0 2px 18px rgba(201, 163, 106, 0.18)",
  TEXT_HOVER: "0 2px 24px rgba(201, 163, 106, 0.28)",
};

export const TRANSITIONS = {
  DEFAULT: "all 0.25s ease",
  CARD: "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.45s ease, border-color 0.3s ease",
  BUTTON: "all 0.25s ease",
};

export const BORDER_RADIUS = {
  SMALL: "10px",
  MEDIUM: "18px",
  LARGE: "28px",
};

export const FONTS = {
  DISPLAY: "'Fraunces', serif",
  BODY: "'Outfit', sans-serif",
  MONO: "'IBM Plex Mono', monospace",
  MONTSE: "'Outfit', sans-serif",
  OPENDYS: "'OpenDyslexic', sans-serif",
};

export const PARTICLES = {
  COUNT: 50,
  SIZE: "3px",
  COLOR: "rgba(201, 163, 106, 0.35)",
  GLOW: "0 0 10px rgba(201, 163, 106, 0.25)",
  ANIMATION: {
    DURATION: { MIN: 5, MAX: 10 },
    DELAY: 0.1,
    SCALE: { MIN: 1, MAX: 2 },
    OPACITY: { MIN: 0.2, MAX: 0.8 },
    MOVEMENT: { MIN: -100, MAX: 100 },
  },
};
