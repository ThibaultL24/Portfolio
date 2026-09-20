// src/shared/components/AnimatedBackground.jsx
const AnimatedBackground = () => (
  <div
    aria-hidden="true"
    style={{
      position: "fixed",
      inset: 0,
      zIndex: -1,
      background: "#f4f4f2",
    }}
  />
);

export default AnimatedBackground;
