import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Icon,
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import { useTranslation } from "../../../hooks/useTranslation";
import NeonBeamDivider from "../../../shared/components/NeonBeamDivider";

const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <VStack spacing={8} align="flex-start">
        <Heading as="h2" size="lg">
          {t("contact.info.title")}
        </Heading>

        <VStack spacing={6} align="flex-start" w="full">
          <HStack spacing={4}>
            <Box p={3} bg="gray.800" borderRadius="md">
              <Icon as={FaEnvelope} w={5} h={5} color="brand.neon" />
            </Box>
            <VStack align="flex-start" spacing={0}>
              <Text fontWeight="bold">{t("contact.info.email")}</Text>
              <Text color="gray.400">thibault.lenormand24@gmail.com</Text>
            </VStack>
          </HStack>

          <HStack spacing={4}>
            <Box p={3} bg="gray.800" borderRadius="md">
              <Icon as={FaMapMarkerAlt} w={5} h={5} color="brand.neon" />
            </Box>
            <VStack align="flex-start" spacing={0}>
              <Text fontWeight="bold">{t("contact.info.location")}</Text>
              <Text color="gray.400">Avignon, France</Text>
            </VStack>
          </HStack>
        </VStack>

        <NeonBeamDivider my={4} />

        <VStack spacing={4} align="flex-start" w="full">
          <Heading as="h3" size="md">
            {t("contact.info.socialMedia")}
          </Heading>

          <HStack spacing={4}>
            <Button
              as="a"
              href="https://github.com/ThibaultL24"
              target="_blank"
              rel="noopener noreferrer"
              leftIcon={<FaGithub color="#00ff9d" />}
              variant="outline"
              color="brand.neon"
              borderColor="brand.neon"
              _hover={{
                bg: "transparent",
                color: "white",
                borderColor: "white",
                boxShadow: "0 0 10px rgba(0, 255, 157, 0.3)",
              }}
            >
              {t("contact.info.github")}
            </Button>
            <Button
              as="a"
              href="https://www.linkedin.com/in/thibault-lenormand-b38b96268/"
              target="_blank"
              rel="noopener noreferrer"
              leftIcon={<FaLinkedin color="#00ff9d" />}
              variant="outline"
              color="brand.neon"
              borderColor="brand.neon"
              colorScheme="gray"
              _hover={{
                bg: "transparent",
                color: "white",
                borderColor: "white",
                boxShadow: "0 0 10px rgba(0, 255, 157, 0.3)",
              }}
            >
              {t("contact.info.linkedin")}
            </Button>
            <Button
              leftIcon={<FaTwitter color="#00ff9d" />}
              variant="outline"
              color="brand.neon"
              borderColor="brand.neon"
              as="a"
              href="https://twitter.com"
              target="_blank"
              _hover={{
                bg: "transparent",
                color: "white",
                borderColor: "white",
                boxShadow: "0 0 10px rgba(0, 255, 157, 0.3)",
              }}
            >
              {t("contact.info.twitter")}
            </Button>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default ContactInfo;
