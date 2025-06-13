import ContactHeader from "./components/ContactHeader";
import MonOffreSection from "./components/MonOffreSection";
import ContactInfo from "./components/ContactInfo";
import { SimpleGrid } from "@chakra-ui/react";

const ContactContainer = () => {
  return (
    <>
      <ContactHeader />
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <MonOffreSection />
        <ContactInfo />
      </SimpleGrid>
    </>
  );
};

export default ContactContainer;
