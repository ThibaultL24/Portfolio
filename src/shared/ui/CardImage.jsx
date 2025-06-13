import { Image, useColorModeValue } from "@chakra-ui/react";

/**
 * Composant CardImage réutilisable pour les images dans les cartes
 * @param {Object} props
 * @param {string} props.src - URL de l'image
 * @param {string} props.alt - Texte alternatif de l'image
 * @param {boolean} props.zoomEffect - Activer/désactiver l'effet de zoom (défaut: false)
 * @param {Object} props.rest - Autres props à passer à l'Image
 */
const CardImage = ({ src, alt, zoomEffect = false, ...rest }) => {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("black", "white");
  return (
    <Image
      src={src}
      alt={alt}
      objectFit="cover"
      bg={bg}
      color={color}
      transition="transform 0.5s ease"
      borderTopRadius="inherit"
      {...(zoomEffect && {
        _hover: { transform: "scale(1.05)", ...(rest._hover || {}) },
      })}
      {...rest}
    />
  );
};

export default CardImage;
