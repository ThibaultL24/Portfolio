import AboutHeader from "./components/AboutHeader";
import ProfileSection from "./components/ProfileSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import { skills, experiences, education } from "./data/aboutData";

const AboutContainer = () => {
  return (
    <>
      <AboutHeader />
      <ProfileSection />
      <SkillsSection skills={skills} />
      <ExperienceSection experiences={experiences} />
      <EducationSection education={education} />
    </>
  );
};

export default AboutContainer;
