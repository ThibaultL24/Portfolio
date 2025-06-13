import { Box } from "@chakra-ui/react";
import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollContainer = ({ children }) => {
  const containerRef = useRef(null);

  return (
    <Box
      ref={containerRef}
      height="100vh"
      overflowY="auto"
      scrollBehavior="smooth"
      position="relative"
      bg="black"
      css={{
        "&::-webkit-scrollbar": {
          width: "0px",
        },
        "&::-webkit-scrollbar-track": {
          width: "0px",
        },
        "&::-webkit-scrollbar-thumb": {
          width: "0px",
        },
      }}
    >
      <AnimatePresence>
        {children.map((child, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, filter: "blur(10px)", x: -100 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {child}
          </motion.div>
        ))}
      </AnimatePresence>
    </Box>
  );
};

export default ScrollContainer;
