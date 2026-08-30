// src/shared/ui/Card.jsx
import { Box } from "@chakra-ui/react";

const Card = ({
  children,
  hoverEffect = true,
  showShadow = true,
  borderRadius = "22px",
  ...rest
}) => {
  const baseStyles = {
    className: "card",
    border: "1px solid rgba(201,163,106,0.16)",
    bg: "rgba(20, 17, 14, 0.86)",
    color: "brand.parchment",
    borderRadius,
    transition:
      "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.45s ease, border-color 0.3s",
    w: "100%",
    overflow: "hidden",
    ...rest,
  };

  const shadowStyles = showShadow
    ? { boxShadow: "0 18px 50px rgba(0,0,0,0.28)" }
    : {};

  const hoverStyles = hoverEffect
    ? {
        _hover: {
          borderColor: "rgba(201,163,106,0.45)",
          transform: "translateY(-6px)",
          boxShadow: "0 28px 70px rgba(201,163,106,0.12)",
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
