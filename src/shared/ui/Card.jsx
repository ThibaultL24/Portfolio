// src/shared/ui/Card.jsx
import { Box } from "@chakra-ui/react";

const Card = ({
  children,
  hoverEffect = true,
  showShadow = true,
  borderRadius = "16px",
  ...rest
}) => {
  const baseStyles = {
    className: "card",
    border: "1px solid rgba(26,24,22,0.08)",
    bg: "white",
    color: "brand.ink",
    borderRadius,
    transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.2s",
    w: "100%",
    overflow: "hidden",
    ...rest,
  };

  const shadowStyles = showShadow ? { boxShadow: "0 16px 36px rgba(26,24,22,0.06)" } : {};

  const hoverStyles = hoverEffect
    ? {
        _hover: {
          borderColor: "brand.cyan",
          transform: "translateY(-4px)",
          boxShadow: "0 20px 44px rgba(26,24,22,0.1)",
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
