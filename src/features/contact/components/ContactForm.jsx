import {
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import NeonOutlineBox from "../../../shared/components/NeonOutlineBox";

const ContactForm = () => {
  const { t } = useTranslation();
  const inputBg = useColorModeValue("gray.100", "gray.800");
  const inputHoverBg = useColorModeValue("gray.200", "gray.700");
  const inputFocusBg = useColorModeValue("gray.200", "gray.700");
  const inputFocusBorder = useColorModeValue("brand.blueGreen", "gray.300");
  const buttonBg = useColorModeValue("brand.blueGreen", "gray.800");
  const buttonColor = useColorModeValue("white", "white");
  const buttonHoverBg = useColorModeValue("brand.blueGreen", "gray.700");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuler l'envoi du formulaire
    setTimeout(() => {
      toast({
        title: t("contact.form.success.title"),
        description: t("contact.form.success.description"),
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <NeonOutlineBox borderRadius={12} p={8}>
      <VStack spacing={6} as="form" onSubmit={handleSubmit}>
        <Heading as="h2" size="lg" alignSelf="flex-start">
          {t("contact.form.title")}
        </Heading>

        <FormControl id="name" isRequired>
          <FormLabel>{t("contact.form.name")}</FormLabel>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t("contact.form.placeholders.name")}
            variant="filled"
            bg={inputBg}
            _hover={{ bg: inputHoverBg }}
            _focus={{ bg: inputFocusBg, borderColor: inputFocusBorder }}
          />
        </FormControl>

        <FormControl id="email" isRequired>
          <FormLabel>{t("contact.form.email")}</FormLabel>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t("contact.form.placeholders.email")}
            variant="filled"
            bg={inputBg}
            _hover={{ bg: inputHoverBg }}
            _focus={{ bg: inputFocusBg, borderColor: inputFocusBorder }}
          />
        </FormControl>

        <FormControl id="subject" isRequired>
          <FormLabel>{t("contact.form.subject")}</FormLabel>
          <Input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder={t("contact.form.placeholders.subject")}
            variant="filled"
            bg={inputBg}
            _hover={{ bg: inputHoverBg }}
            _focus={{ bg: inputFocusBg, borderColor: inputFocusBorder }}
          />
        </FormControl>

        <FormControl id="message" isRequired>
          <FormLabel>{t("contact.form.message")}</FormLabel>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t("contact.form.placeholders.message")}
            variant="filled"
            bg={inputBg}
            _hover={{ bg: inputHoverBg }}
            _focus={{ bg: inputFocusBg, borderColor: inputFocusBorder }}
            minH="150px"
            resize="vertical"
          />
        </FormControl>

        <Button
          type="submit"
          variant="outline"
          color="brand.neon"
          borderColor="brand.neon"
          _hover={{
            bg: "transparent",
            color: "white",
            borderColor: "white",
            boxShadow: "0 0 10px rgba(0, 255, 157, 0.3)",
          }}
          isLoading={isSubmitting}
          loadingText={t("contact.form.sending")}
        >
          {t("contact.form.send")}
        </Button>
      </VStack>
    </NeonOutlineBox>
  );
};

export default ContactForm;
