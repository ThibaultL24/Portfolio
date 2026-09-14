// src/features/home/HomeContainer.jsx
import PageLayout from "../../shared/layout/PageLayout";
import { PageMeta } from "../../shared/components/PageMeta";
import HeroSection from "./components/HeroSection";
import ProofStrip from "./components/ProofStrip";
import FeaturedWork from "./components/FeaturedWork";
import TrustSection from "./components/TrustSection";

const HomeContainer = () => (
  <PageLayout py={0}>
    <PageMeta titleKey="home.metaTitle" descriptionKey="home.metaDescription" />
    <HeroSection />
    <ProofStrip />
    <TrustSection />
    <FeaturedWork />
  </PageLayout>
);

export default HomeContainer;
