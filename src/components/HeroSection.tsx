import { Button } from "@/components/ui/button";
import sabrinaPhoto from "@/assets/sabrina-photo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      
      {/* Animated Glow Effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto animate-slide-up">
          {/* Photo + Name Side by Side */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mb-12">
            {/* Profile Photo - Larger, No Border */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur-3xl opacity-50 animate-pulse" />
              <img 
                src={sabrinaPhoto} 
                alt="Sabrina Alvim" 
                className="relative w-full h-full object-cover object-top rounded-2xl" 
              />
            </div>
            
            {/* Name and Title */}
            <div className="text-center lg:text-left space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
                <span className="text-foreground">Sabrina Alvim</span>
              </h1>
              <p className="text-gradient text-2xl md:text-3xl lg:text-4xl font-heading font-semibold">
                Graphic Designer
              </p>
              <p className="text-foreground text-xl md:text-2xl lg:text-3xl">
                & Social Media Specialist
              </p>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg font-light pt-4">
                Transformando marcas com design, estratégia e criatividade que convertem.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button variant="hero" size="xl" asChild>
                  <a href="http://wa.me/31994216833" target="_blank" rel="noopener noreferrer">
                    Solicitar Orçamento
                  </a>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <a href="#sobre">
                    Sobre Mim
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
