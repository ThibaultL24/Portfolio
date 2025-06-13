import PageLayout from "../../shared/layout/PageLayout";
import HeroSection from "./components/HeroSection";
import TrustSection from "./components/TrustSection";

const HomeContainer = () => {
  return (
    <PageLayout py={0}>
      <HeroSection />
      <TrustSection />
    </PageLayout>
  );
};

export default HomeContainer;
