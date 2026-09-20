// src/features/contact/components/ContactForm.jsx
import {
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { useTranslation } from "../../../hooks/useTranslation";

const ContactForm = () => {
  const { t } = useTranslation();
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const body = encodeURIComponent(
      `${formData.message}\n\n— ${formData.name} (${formData.email})`
    );
    const href = `mailto:thibault.lenormand24@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${body}`;
    window.location.href = href;
    toast({
      title: t("contact.form.success.title"),
      description: t("contact.form.success.description"),
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const fieldStyle = {
    bg: "white",
    borderColor: "rgba(17,19,24,0.18)",
    color: "brand.ink",
    borderRadius: "10px",
    _hover: { borderColor: "brand.cyan" },
    _focus: { borderColor: "brand.cyan", boxShadow: "0 0 0 1px #2f9e90" },
  };

  return (
    <Box p={8} border="1px solid rgba(26,24,22,0.08)" bg="white" borderRadius="16px">
      <VStack spacing={6} as="form" onSubmit={handleSubmit}>
        <Heading as="h2" fontSize="2xl" alignSelf="flex-start">
          {t("contact.form.title")}
        </Heading>
        <FormControl id="name" isRequired>
          <FormLabel>{t("contact.form.name")}</FormLabel>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t("contact.form.placeholders.name")}
            {...fieldStyle}
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
            {...fieldStyle}
          />
        </FormControl>
        <FormControl id="subject" isRequired>
          <FormLabel>{t("contact.form.subject")}</FormLabel>
          <Input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder={t("contact.form.placeholders.subject")}
            {...fieldStyle}
          />
        </FormControl>
        <FormControl id="message" isRequired>
          <FormLabel>{t("contact.form.message")}</FormLabel>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t("contact.form.placeholders.message")}
            minH="140px"
            resize="vertical"
            {...fieldStyle}
          />
        </FormControl>
        <Button type="submit" variant="solid" alignSelf="flex-start" isLoading={isSubmitting}>
          {t("contact.form.send")}
        </Button>
      </VStack>
    </Box>
  );
};

export default ContactForm;
