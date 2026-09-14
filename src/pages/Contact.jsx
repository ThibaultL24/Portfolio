import { Box } from "@chakra-ui/react";
import ContactContainer from "../features/contact/ContactContainer";
import PageLayout from "../shared/layout/PageLayout";
import { PageMeta } from "../shared/components/PageMeta";

export default function Contact() {
  return (
    <Box as="section" id="contact" minH="100vh" w="100%">
      <PageMeta titleKey="contact.metaTitle" descriptionKey="contact.metaDescription" />
      <PageLayout>
        <ContactContainer />
      </PageLayout>
    </Box>
  );
}
