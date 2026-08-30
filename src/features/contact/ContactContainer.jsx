// src/features/contact/ContactContainer.jsx
import ContactHeader from "./components/ContactHeader";
import MonOffreSection from "./components/MonOffreSection";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import { SimpleGrid, Box } from "@chakra-ui/react";

const ContactContainer = () => (
  <>
    <ContactHeader />
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} mb={12}>
      <MonOffreSection />
      <ContactInfo />
    </SimpleGrid>
    <Box maxW="720px">
      <ContactForm />
    </Box>
  </>
);

export default ContactContainer;
