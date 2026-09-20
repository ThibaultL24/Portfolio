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
    border: "1px solid",
    borderColor: "brand.line",
    bg: "brand.cardBg",
    color: "brand.ink",
    borderRadius,
    transition: "border-color 0.2s ease",
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
          borderColor: "brand.ink",
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
