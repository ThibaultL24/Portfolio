// src/features/home/HomeContainer.jsx
import PageLayout from "../../shared/layout/PageLayout";
import HeroSection from "./components/HeroSection";
import FeaturedWork from "./components/FeaturedWork";
import TrustSection from "./components/TrustSection";

const HomeContainer = () => (
  <PageLayout py={0}>
    <HeroSection />
    <FeaturedWork />
    <TrustSection />
  </PageLayout>
);

export default HomeContainer;
