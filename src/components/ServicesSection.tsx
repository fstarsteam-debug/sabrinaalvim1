import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Palette, 
  Instagram, 
  Video, 
  LayoutGrid, 
  Package, 
  Printer, 
  MessageSquare,
  Megaphone,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Identidade Visual Completa",
    description: "Logos, paleta de cores, tipografia e manual de marca completo.",
    link: "/identidade-visual"
  },
  {
    icon: Instagram,
    title: "Gestão de Mídias Sociais",
    description: "Estratégia, planejamento e gestão completa das suas redes.",
    link: "/social-media"
  },
  {
    icon: Video,
    title: "Edições para Reels",
    description: "Edições profissionais que engajam e convertem.",
    link: "/reels"
  },
  {
    icon: LayoutGrid,
    title: "Cards e Carrosséis",
    description: "Conteúdo visual estratégico para seu feed.",
    link: "/cards-carrosseis"
  },
  {
    icon: Package,
    title: "Design de Embalagem",
    description: "Embalagens que destacam seu produto no mercado.",
    link: "/embalagem"
  },
  {
    icon: Printer,
    title: "Design para Impressos",
    description: "Cartões, folders, banners e materiais gráficos.",
    link: "/impressos"
  },
  {
    icon: MessageSquare,
    title: "Consultoria de Branding",
    description: "Orientação estratégica para fortalecer sua marca.",
    link: "/branding"
  },
  {
    icon: Megaphone,
    title: "Tráfego Pago",
    description: "Campanhas de anúncios que geram resultados reais.",
    link: "/trafego-pago"
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-surface/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Serviços <span className="text-gradient">Oferecidos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluções completas de design para transformar sua marca
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group p-6 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:neon-glow transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>
              <div className="flex items-center text-primary text-sm font-medium">
                Saiba mais
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="neon" size="xl" asChild>
            <a href="http://wa.me/31994216833" target="_blank" rel="noopener noreferrer">
              Quero solicitar um serviço
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
