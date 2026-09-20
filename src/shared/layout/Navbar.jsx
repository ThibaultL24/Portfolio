// src/shared/layout/Navbar.jsx
import {
  Box,
  Flex,
  Button,
  Stack,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import LanguageToggle from "./LanguageToggle";
import FontToggle from "./FontToggle";
import ThemeToggle from "./ThemeToggle";
import BrandMark from "../ui/BrandMark";
import { useTranslation } from "../../hooks/useTranslation";

const Navbar = () => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  const navLinks = [
    { to: "/", label: t("nav.home") },
    { to: "/projects", label: t("nav.projects") },
    { to: "/creations", label: t("nav.creations") },
    { to: "/about", label: t("nav.about") },
    { to: "/contact", label: t("nav.contact") },
  ];

  const isActive = (to) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  const linkButton = (link, onClick) => (
    <Button
      as={RouterLink}
      to={link.to}
      key={link.to}
      onClick={onClick}
      variant="ghost"
      px={3}
      h="auto"
      py={2}
      fontWeight={isActive(link.to) ? "600" : "500"}
      fontSize="sm"
      letterSpacing="0"
      textTransform="none"
      color="brand.ink"
      borderRadius="0"
      borderBottom="1px solid"
      borderColor={isActive(link.to) ? "brand.ink" : "transparent"}
      _hover={{ bg: "transparent", color: "brand.cyan" }}
    >
      {link.label}
    </Button>
  );

  return (
    <Box
      as="header"
      px={{ base: 4, md: 8 }}
      position="fixed"
      w="100%"
      zIndex={1000}
      top={0}
      left={0}
      bg="brand.nav"
      borderBottom="1px solid"
      borderColor="brand.line"
      backdropFilter="blur(16px)"
    >
      <Flex h={{ base: 16, md: 20 }} alignItems="center" justifyContent="space-between" gap={4}>
        <BrandMark />
        <Stack direction="row" spacing={1} display={{ base: "none", lg: "flex" }}>
          {navLinks.map((link) => linkButton(link))}
        </Stack>
        <Flex alignItems="center" gap={1}>
          <LanguageToggle />
          <FontToggle />
          <ThemeToggle />
          <IconButton
            display={{ base: "inline-flex", lg: "none" }}
            aria-label="Menu"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="ghost"
            color="brand.ink"
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>
      </Flex>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay bg="rgba(26,24,22,0.28)" />
        <DrawerContent bg="brand.paper" maxW="280px">
          <DrawerBody pt={20}>
            <Stack spacing={4} align="flex-start">
              {navLinks.map((link) => linkButton(link, onClose))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
