import { Box, Flex, Button, Stack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FontContext, LanguageContext } from "../contexts";
import { useContext } from "react";
import LanguageToggle from "./LanguageToggle";
import FontToggle from "./FontToggle";
import { useTranslation } from "../../hooks/useTranslation";

const Navbar = () => {
  const { isOpenDyslexic } = useContext(FontContext);
  const { isEnglish } = useContext(LanguageContext);
  const { t } = useTranslation();

  const navLinks = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/projects", label: t("nav.projects") },
    { to: "/creations", label: t("nav.creations") },
    { to: "/contact", label: t("nav.contact") },
  ];

  return (
    <Box
      bg="rgba(0, 0, 0, 0.95)"
      px={8}
      position="fixed"
      w="100%"
      zIndex={1000}
      top={0}
      left={0}
      boxShadow="0 0 20px rgba(0,255,157,0.15)"
      borderBottom="1px solid rgba(0,255,157,0.1)"
      backdropFilter="blur(10px)"
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Stack direction="row" spacing={7}>
            {navLinks.map((link) => (
              <RouterLink key={link.to} to={link.to}>
                <Button
                  variant="ghost"
                  px={3}
                  py={2}
                  fontWeight="bold"
                  fontSize="md"
                  color="brand.neon"
                  textShadow="0 0 10px rgba(0, 255, 157, 0.5)"
                  transition="all 0.3s ease"
                  _hover={{
                    color: "brand.neon",
                    textShadow: "0 0 15px rgba(0, 255, 157, 0.5)",
                    transform: "translateY(-2px)",
                    bg: "rgba(0,255,157,0.05)",
                  }}
                  _active={{
                    color: "brand.neon",
                    textShadow: "0 0 15px rgba(0, 255, 157, 0.5)",
                    transform: "translateY(0)",
                  }}
                  className="nav-link"
                  sx={{
                    "&.active": {
                      color: "brand.neon",
                      textShadow: "0 0 15px rgba(0, 255, 157, 0.5)",
                      bg: "rgba(0,255,157,0.05)",
                      borderBottom: "2px solid brand.neon",
                    },
                  }}
                  bg="transparent"
                >
                  {link.label}
                </Button>
              </RouterLink>
            ))}
          </Stack>
        </Flex>
        <Flex alignItems="center">
          <Stack direction="row" spacing={7}>
            <Button
              as={LanguageToggle}
              variant="ghost"
              color="brand.neon"
              textShadow="0 0 10px rgba(0, 255, 157, 0.5)"
              _hover={{
                color: "brand.neon",
                textShadow: "0 0 15px rgba(0, 255, 157, 0.5)",
                transform: "translateY(-2px)",
                bg: "rgba(0,255,157,0.05)",
              }}
              _active={{
                color: "brand.neon",
                textShadow: "0 0 15px rgba(0, 255, 157, 0.5)",
                transform: "translateY(0)",
              }}
            />
            <Button
              as={FontToggle}
              variant="ghost"
              color="brand.neon"
              textShadow="0 0 10px rgba(0, 255, 157, 0.5)"
              _hover={{
                color: "brand.neon",
                textShadow: "0 0 15px rgba(0, 255, 157, 0.5)",
                transform: "translateY(-2px)",
                bg: "rgba(0,255,157,0.05)",
              }}
              _active={{
                color: "brand.neon",
                textShadow: "0 0 15px rgba(0, 255, 157, 0.5)",
                transform: "translateY(0)",
              }}
            />
          </Stack>
        </Flex>
      </Flex>
      <style>{`
        .nav-link {
          position: relative;
          overflow: hidden;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: brand.neon;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        .nav-link:hover::after {
          transform: scaleX(1);
        }
      `}</style>
    </Box>
  );
};

export default Navbar;
