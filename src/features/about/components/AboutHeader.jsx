// src/features/about/components/AboutHeader.jsx
import SectionHeader from "../../../shared/ui/SectionHeader";
import { useTranslation } from "../../../hooks/useTranslation";

const AboutHeader = () => {
  const { t } = useTranslation();
  return (
    <SectionHeader
      kicker={t("about.kicker")}
      title={t("about.title")}
      description={t("about.description")}
    />
  );
};

export default AboutHeader;
