// src/features/contact/components/ContactHeader.jsx
import SectionHeader from "../../../shared/ui/SectionHeader";
import { useTranslation } from "../../../hooks/useTranslation";

const ContactHeader = () => {
  const { t } = useTranslation();
  return (
    <SectionHeader
      kicker={t("contact.kicker")}
      title={t("contact.title")}
      description={t("contact.description")}
    />
  );
};

export default ContactHeader;
