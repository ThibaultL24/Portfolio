import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedBackground = () => {
  const [particles, setParticles] = useState([]);
  const [stepCount, setStepCount] = useState(0);

  // Création initiale des particules
  useEffect(() => {
    const initialParticles = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 2 + Math.random() * 3,
      speed: 0.5 + Math.random() * 1.5,
    }));
    setParticles(initialParticles);
  }, []);

  // Fonction modulo qui gère les négatifs
  const mod = (n, m) => ((n % m) + m) % m;

  // Animation des particules
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => ({
          ...particle,
          x: mod(particle.x + particle.speed, window.innerWidth),
          y: mod(particle.y + particle.speed, window.innerHeight),
        }))
      );
      setStepCount((prev) => prev + 1);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "#000000",
        zIndex: -1,
        overflow: "hidden",
      }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          style={{
            position: "absolute",
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            background: "#00ff9d",
            borderRadius: "50%",
            boxShadow: `0 0 ${particle.size * 2}px rgba(0, 255, 157, 0.5)`,
            opacity: 0.8,
          }}
          animate={{
            x: [particle.x, particle.x + 100],
            y: [particle.y, particle.y + 100],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
