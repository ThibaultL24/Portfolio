// src/features/contact/ContactContainer.jsx
import ContactHeader from "./components/ContactHeader";
import MonOffreSection from "./components/MonOffreSection";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import { Box } from "@chakra-ui/react";

const ContactContainer = () => (
  <>
    <ContactHeader />
    <Box
      display="grid"
      gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
      columnGap={{ md: 12 }}
      rowGap={{ base: 10, md: 12 }}
      alignItems="start"
    >
      <MonOffreSection />
      <Box gridColumn={{ md: "2" }} gridRow={{ md: "1 / span 2" }}>
        <ContactForm />
      </Box>
      <ContactInfo />
    </Box>
  </>
);

export default ContactContainer;
