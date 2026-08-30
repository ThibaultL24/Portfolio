// src/features/contact/components/ContactInfo.jsx
import { Box, Heading, Text, VStack, HStack, Button, Icon } from "@chakra-ui/react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import { useTranslation } from "../../../hooks/useTranslation";

const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <VStack spacing={8} align="flex-start">
      <Heading as="h2" fontSize="2xl">
        {t("contact.info.title")}
      </Heading>
      <VStack spacing={6} align="flex-start" w="full">
        <HStack spacing={4}>
          <Box p={3} border="1px solid rgba(201,163,106,0.25)" borderRadius="full">
            <Icon as={FaEnvelope} w={4} h={4} color="brand.copper" />
          </Box>
          <VStack align="flex-start" spacing={0}>
            <Text fontSize="sm" color="brand.copper">
              {t("contact.info.email")}
            </Text>
            <Text color="brand.parchment">thibault.lenormand24@gmail.com</Text>
          </VStack>
        </HStack>
        <HStack spacing={4}>
          <Box p={3} border="1px solid rgba(201,163,106,0.25)" borderRadius="full">
            <Icon as={FaMapMarkerAlt} w={4} h={4} color="brand.copper" />
          </Box>
          <VStack align="flex-start" spacing={0}>
            <Text fontSize="sm" color="brand.copper">
              {t("contact.info.location")}
            </Text>
            <Text color="brand.parchment">Avignon, France</Text>
          </VStack>
        </HStack>
      </VStack>
      <HStack spacing={3} wrap="wrap">
        <Button
          as="a"
          href="https://github.com/ThibaultL24"
          target="_blank"
          rel="noreferrer"
          leftIcon={<FaGithub />}
          variant="outline"
          size="sm"
        >
          GitHub
        </Button>
        <Button
          as="a"
          href="https://www.linkedin.com/in/thibault-lenormand-b38b96268/"
          target="_blank"
          rel="noreferrer"
          leftIcon={<FaLinkedin />}
          variant="outline"
          size="sm"
        >
          LinkedIn
        </Button>
        <Button
          as="a"
          href="https://x.com/ThibaultLENORM2"
          target="_blank"
          rel="noreferrer"
          leftIcon={<FaTwitter />}
          variant="outline"
          size="sm"
        >
          X
        </Button>
      </HStack>
    </VStack>
  );
};

export default ContactInfo;
