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
            "radial-gradient(circle, rgba(201,163,106,0.16) 0%, rgba(201,163,106,0) 68%)",
          filter: "blur(8px)",
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
            "radial-gradient(circle, rgba(125,155,140,0.12) 0%, rgba(125,155,140,0) 70%)",
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
