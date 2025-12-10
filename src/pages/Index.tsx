import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import LogoCarousel from "@/components/LogoCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BenefitsSection />
      <LogoCarousel />
      <TestimonialsSection />
      <CTASection />
      
      {/* Orçamento Card */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-2xl">
          <div 
            onClick={() => navigate("/orcamento")}
            className="group cursor-pointer bg-gradient-to-r from-primary/20 to-purple-600/20 border-2 border-primary/30 rounded-2xl p-8 text-center transition-all duration-500 hover:scale-105 hover:border-primary hover:shadow-2xl hover:shadow-primary/20"
          >
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Saiba Meu Orçamento
            </h3>
            <p className="text-muted-foreground mb-4">
              Acesse pacotes exclusivos de Social Media e Reels
            </p>
            <Button variant="neon" size="lg" className="pointer-events-none">
              Acessar Proposta
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Index;
