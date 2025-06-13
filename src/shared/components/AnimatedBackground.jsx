import { motion } from "framer-motion";
import { useEffect, useState, useMemo, useCallback } from "react";

// Configuration des particules
const PARTICLE_CONFIG = {
  count: 100,
  minSize: 2,
  maxSize: 3,
  minSpeed: 0.5,
  maxSpeed: 1.5,
  updateInterval: 50,
  color: "#00ff9d",
  opacity: 0.8,
};

// Styles du composant
const styles = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "#000000",
    zIndex: -1,
    overflow: "hidden",
  },
};

// Fonction utilitaire pour la génération des particules
const createParticle = (id) => ({
  id,
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
  size:
    PARTICLE_CONFIG.minSize +
    Math.random() * (PARTICLE_CONFIG.maxSize - PARTICLE_CONFIG.minSize),
  speed:
    PARTICLE_CONFIG.minSpeed +
    Math.random() * (PARTICLE_CONFIG.maxSpeed - PARTICLE_CONFIG.minSpeed),
});

// Fonction modulo qui gère les négatifs
const mod = (n, m) => ((n % m) + m) % m;

const AnimatedBackground = () => {
  const [particles, setParticles] = useState([]);

  // Création initiale des particules avec useMemo
  const initialParticles = useMemo(
    () =>
      Array.from({ length: PARTICLE_CONFIG.count }, (_, i) =>
        createParticle(i)
      ),
    []
  );

  // Initialisation des particules
  useEffect(() => {
    setParticles(initialParticles);
  }, [initialParticles]);

  // Mise à jour des particules avec useCallback
  const updateParticles = useCallback(() => {
    setParticles((prevParticles) =>
      prevParticles.map((particle) => ({
        ...particle,
        x: mod(particle.x + particle.speed, window.innerWidth),
        y: mod(particle.y + particle.speed, window.innerHeight),
      }))
    );
  }, []);

  // Animation des particules
  useEffect(() => {
    const interval = setInterval(
      updateParticles,
      PARTICLE_CONFIG.updateInterval
    );
    return () => clearInterval(interval);
  }, [updateParticles]);

  return (
    <div style={styles.container}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          style={{
            position: "absolute",
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            background: PARTICLE_CONFIG.color,
            borderRadius: "50%",
            boxShadow: `0 0 ${particle.size * 2}px ${PARTICLE_CONFIG.color}80`,
            opacity: PARTICLE_CONFIG.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
