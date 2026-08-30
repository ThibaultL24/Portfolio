// src/features/creations/components/CreationsHeader.jsx
import SectionHeader from "../../../shared/ui/SectionHeader";
import { useTranslation } from "../../../hooks/useTranslation";

const CreationsHeader = () => {
  const { t } = useTranslation();
  return (
    <SectionHeader
      kicker={t("creations.kicker")}
      title={t("creations.title")}
      description={t("creations.description")}
    />
  );
};

export default CreationsHeader;
