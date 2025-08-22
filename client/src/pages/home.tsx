import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import CityscapeSection from "@/components/cityscape-section";
import TerminalSection from "@/components/terminal-section";
import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-purple via-dark-purple to-deep-purple text-white overflow-x-hidden">
      <Header />
      <HeroSection />
      <CityscapeSection />
      <TerminalSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
