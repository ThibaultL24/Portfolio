// src/shared/ui/Card.jsx
import { Box } from "@chakra-ui/react";

const Card = ({
  children,
  hoverEffect = true,
  showShadow = true,
  borderRadius = "0",
  ...rest
}) => {
  const baseStyles = {
    className: "card",
    border: "1px solid rgba(17,19,24,0.14)",
    bg: "white",
    color: "brand.ink",
    borderRadius,
    transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.2s",
    w: "100%",
    overflow: "hidden",
    ...rest,
  };

  const shadowStyles = showShadow ? { boxShadow: "0 14px 36px rgba(17,19,24,0.08)" } : {};

  const hoverStyles = hoverEffect
    ? {
        _hover: {
          borderColor: "brand.cyan",
          transform: "translateY(-4px)",
          boxShadow: "0 18px 40px rgba(17,19,24,0.12)",
          ...rest._hover,
        },
      }
    : {};

  return (
    <Box {...baseStyles} {...shadowStyles} {...hoverStyles}>
      {children}
    </Box>
  );
};

export default Card;
