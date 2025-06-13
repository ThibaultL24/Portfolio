import { HStack, Link, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialLinks = ({ spacing = 4, iconSize = 6 }) => {
  return (
    <HStack spacing={spacing} pt={2}>
      <Link href="https://github.com" isExternal>
        <Icon as={FaGithub} w={iconSize} h={iconSize} />
      </Link>
      <Link href="https://linkedin.com" isExternal>
        <Icon as={FaLinkedin} w={iconSize} h={iconSize} />
      </Link>
    </HStack>
  );
};

export default SocialLinks;
