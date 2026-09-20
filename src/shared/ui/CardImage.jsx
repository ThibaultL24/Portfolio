// src/shared/ui/CardImage.jsx
import { Image } from "@chakra-ui/react";

const CardImage = ({ src, alt, zoomEffect = false, ...rest }) => (
  <Image
    src={src}
    alt={alt}
    objectFit="cover"
    bg="white"
    transition="transform 0.5s ease"
    borderTopRadius="inherit"
    {...(zoomEffect && {
      _hover: { transform: "scale(1.05)", ...(rest._hover || {}) },
    })}
    {...rest}
  />
);

export default CardImage;
