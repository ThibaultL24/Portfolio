import { Box } from "@chakra-ui/react";

/**
 * Composant Card réutilisable avec animations
 * @param {Object} props
 * @param {React.ReactNode} props.children - Le contenu de la carte
 * @param {boolean} props.hoverEffect - Activer/désactiver l'effet de survol (défaut: true)
 * @param {boolean} props.showShadow - Activer/désactiver l'ombre (défaut: true)
 * @param {string} props.borderRadius - Rayon de la bordure (défaut: "12px")
 * @param {Object} props.rest - Autres props à passer au Box
 */
const Card = ({
  children,
  hoverEffect = true,
  showShadow = true,
  borderRadius = "12px",
  ...rest
}) => {
  // Base styles always applied
  const baseStyles = {
    className: "card",
    border: "1px solid transparent",
    bg: "black",
    color: "white",
    borderRadius,
    transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
    w: "100%",
    ...rest,
  };

  // Conditional styles
  const shadowStyles = showShadow
    ? { boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }
    : {};

  const hoverStyles = hoverEffect
    ? {
        _hover: {
          borderColor: "brand.neon",
          transform: "translateY(-5px)",
          boxShadow: "0 0 20px rgba(0, 255, 157, 0.3)",
          ...rest._hover,
        },
      }
    : {
        _hover: {
          borderColor: "brand.neon",
          ...rest._hover,
        },
      };

  return (
    <Box {...baseStyles} {...shadowStyles} {...hoverStyles}>
      {children}
    </Box>
  );
};

export default Card;
