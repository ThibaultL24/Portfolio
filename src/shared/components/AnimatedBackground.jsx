// src/shared/components/AnimatedBackground.jsx
const AnimatedBackground = () => {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        overflow: "hidden",
        background: "#0e0c0a",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "70vw",
          height: "70vw",
          top: "-18%",
          right: "-12%",
          background:
            "radial-gradient(circle, rgba(224,92,40,0.22) 0%, rgba(212,137,74,0) 68%)",
          filter: "blur(8px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "48vw",
          height: "48vw",
          top: "28%",
          left: "32%",
          background:
            "radial-gradient(circle, rgba(212,137,74,0.14) 0%, rgba(212,137,74,0) 70%)",
          filter: "blur(12px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "55vw",
          height: "55vw",
          bottom: "-20%",
          left: "-16%",
          background:
            "radial-gradient(circle, rgba(61,184,166,0.2) 0%, rgba(61,184,166,0) 70%)",
          filter: "blur(10px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(14,12,10,0.2) 0%, rgba(14,12,10,0.85) 100%)",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
