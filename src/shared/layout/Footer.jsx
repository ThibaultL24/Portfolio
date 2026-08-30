// src/shared/layout/Footer.jsx
import { Box, Flex, Text, Link, HStack, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useTranslation } from "../../hooks/useTranslation";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box
      as="footer"
      px={{ base: 4, md: 8 }}
      w="100%"
      borderTop="1px solid rgba(201,163,106,0.14)"
      mt="auto"
      bg="rgba(14,12,10,0.9)"
    >
      <Flex
        minH={16}
        py={4}
        alignItems="center"
        justifyContent="space-between"
        gap={4}
        wrap="wrap"
      >
        <Text
          fontFamily="'IBM Plex Mono', monospace"
          fontSize="xs"
          letterSpacing="0.08em"
          color="brand.copper"
        >
          © 2026 Thibault Lenormand
        </Text>
        <Text fontSize="sm" color="rgba(244,236,225,0.55)">
          {t("home.footer.rights")}
        </Text>
        <HStack spacing={5}>
          <Link href="https://github.com/ThibaultL24" isExternal>
            <Icon as={FaGithub} boxSize={4} color="brand.parchment" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/thibault-lenormand-b38b96268/"
            isExternal
          >
            <Icon as={FaLinkedin} boxSize={4} color="brand.parchment" />
          </Link>
          <Link href="https://x.com/ThibaultLENORM2" isExternal>
            <Icon as={FaTwitter} boxSize={4} color="brand.parchment" />
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Footer;
