import { Box } from "@chakra-ui/react";
import ContactContainer from "../features/contact/ContactContainer";
import PageLayout from "../shared/layout/PageLayout";

export default function Contact() {
  return (
    <Box as="section" id="contact" minH="100vh" w="100%">
      <PageLayout>
        <ContactContainer />
      </PageLayout>
    </Box>
  );
}
