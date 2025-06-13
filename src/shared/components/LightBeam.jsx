import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

const LightBeam = () => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100vw"
      height="100vh"
      pointerEvents="none"
      zIndex={-1}
      overflow="hidden"
    >
      <motion.div
        style={{
          position: "absolute",
          top: "50%",
          left: "-20%",
          width: "40%",
          height: "2px",
          background:
            "linear-gradient(90deg, transparent, rgba(0, 255, 157, 0.8), transparent)",
          transform: "rotate(-45deg)",
          filter: "blur(2px)",
          boxShadow: "0 0 20px rgba(0, 255, 157, 0.5)",
        }}
        animate={{
          x: ["0%", "140%"],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 2,
        }}
      />
    </Box>
  );
};

export default LightBeam;
