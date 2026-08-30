// src/features/projects/components/ProjectsHeader.jsx
import SectionHeader from "../../../shared/ui/SectionHeader";
import { useTranslation } from "../../../hooks/useTranslation";

const ProjectsHeader = () => {
  const { t } = useTranslation();
  return (
    <SectionHeader
      kicker="Index"
      title={t("projects.title")}
      description={t("projects.description")}
    />
  );
};

export default ProjectsHeader;
