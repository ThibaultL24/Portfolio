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
    className: "card glass",
    borderColor: "brand.line",
    bg: "brand.cardBg",
    color: "brand.ink",
    borderRadius,
    backdropFilter: "blur(14px)",
    transition: "border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease",
    w: "100%",
    overflow: "hidden",
    ...rest,
  };

  const shadowStyles = showShadow
    ? { boxShadow: { default: "0 16px 36px rgba(17,17,17,0.06)", _dark: "none" } }
    : {};

  const hoverStyles = hoverEffect
    ? {
        _hover: {
          borderColor: "brand.cyan",
          transform: "translateY(-4px)",
          boxShadow: "0 0 0 1px rgba(126,200,255,0.35), 0 18px 40px rgba(47,126,201,0.18)",
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
