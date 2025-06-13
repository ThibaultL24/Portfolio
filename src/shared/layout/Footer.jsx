import { Box, Flex, Text, Link, HStack, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useTranslation } from "../../hooks/useTranslation";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box
      bg="rgba(0, 0, 0, 0.95)"
      px={8}
      w="100%"
      boxShadow="0 0 20px rgba(0,255,157,0.15)"
      borderTop="1px solid rgba(0,255,157,0.1)"
      backdropFilter="blur(10px)"
      mt="auto"
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Text color="brand.neon" textShadow="0 0 10px rgba(0, 255, 157, 0.5)">
          © 2024 Thibault Lenormand. {t("home.footer.rights")}
        </Text>

        <HStack spacing={6}>
          <Link
            href="https://github.com/ThibaultL24"
            isExternal
            _hover={{ color: "brand.neon" }}
            transition="color 0.3s ease"
          >
            <Icon as={FaGithub} boxSize={5} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/thibault-lenormand-b38b96268/"
            isExternal
            _hover={{ color: "brand.neon" }}
            transition="color 0.3s ease"
          >
            <Icon as={FaLinkedin} boxSize={5} />
          </Link>
          <Link
            href="https://x.com/ThibaultLENORM2"
            isExternal
            _hover={{ color: "brand.neon" }}
            transition="color 0.3s ease"
          >
            <Icon as={FaTwitter} boxSize={5} />
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Footer;
