import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import AboutTeaser from "@/components/sections/AboutTeaser";
import ServicesPreview from "@/components/sections/ServicesPreview";
import GallerySection from "@/components/sections/GallerySection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutTeaser />
      <ServicesPreview />
      <GallerySection />
      <CTASection />
    </Layout>
  );
};

export default Index;
