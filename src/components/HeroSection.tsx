import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import sabrinaPhoto from "@/assets/sabrina-photo.png";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBg})`
    }}>
        <div className="absolute inset-0 bg-background/80" />
      </div>
      
      {/* Animated Glow Effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/20 rounded-full blur-[120px] animate-pulse" style={{
      animationDelay: "1s"
    }} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-slide-up">
          {/* Profile Photo */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-50 animate-pulse" />
            <img src={sabrinaPhoto} alt="Sabrina Alvim" className="relative w-full h-full object-cover object-top border-primary/30 border-8 rounded-2xl" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
            <span className="text-foreground">Sabrina Alvim</span>
            <br />
            <span className="text-gradient text-2xl md:text-3xl lg:text-4xl">Graphic Designer</span>
            <br />
            <span className="text-foreground text-2xl md:text-3xl lg:text-4xl">& Social Media Specialist</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Transformando marcas com design, estratégia e criatividade que convertem.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
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
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>;
};
export default HeroSection;