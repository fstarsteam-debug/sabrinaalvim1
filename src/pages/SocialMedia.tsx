import PageLayout from "@/components/PageLayout";
import { ExternalLink, Instagram } from "lucide-react";
import premierLogo from "@/assets/clients/premier.png";
import motoshopLogo from "@/assets/clients/motoshop.png";
import v1Logo from "@/assets/clients/v1pagamentos.png";
import falcaoLogo from "@/assets/clients/comercialfalcao.png";
import thamaraLogo from "@/assets/clients/drathamara.png";
import pizzariaLogo from "@/assets/clients/pizzariabaiano.png";

const clients = [
  { 
    name: "Premier Atacadista", 
    logo: premierLogo,
    instagram: "https://www.instagram.com/premieratacadista"
  },
  { 
    name: "Motoshop Show Service", 
    logo: motoshopLogo,
    instagram: "https://www.instagram.com/motoshopshowservice"
  },
  { 
    name: "V1 Pagamentos", 
    logo: v1Logo,
    instagram: "https://www.instagram.com/v1pagamentos"
  },
  { 
    name: "Comercial Falcão", 
    logo: falcaoLogo,
    instagram: "https://www.instagram.com/comercial.falcao.centro"
  },
  { 
    name: "Dra. Thamara Gomes", 
    logo: thamaraLogo,
    instagram: "https://www.instagram.com/dra.thamaragomes"
  },
  { 
    name: "Pizzaria do Baiano", 
    logo: pizzariaLogo,
    instagram: "https://www.instagram.com/pizzaria_do_baiano1"
  },
];

const SocialMedia = () => {
  return (
    <PageLayout
      title="Gestão de Mídias Sociais"
      subtitle="Estratégia, planejamento e gestão completa das suas redes sociais."
    >
      {/* Hero Stats */}
      <div className="relative mb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-xl" />
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-8 bg-card/80 backdrop-blur-sm rounded-2xl border border-primary/30 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(162,89,255,0.4)]">
            <p className="text-5xl md:text-6xl font-heading font-bold text-gradient">+50</p>
            <p className="text-muted-foreground mt-2 text-lg">Clientes Ativos</p>
          </div>
          <div className="text-center p-8 bg-card/80 backdrop-blur-sm rounded-2xl border border-primary/30 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(162,89,255,0.4)]">
            <p className="text-5xl md:text-6xl font-heading font-bold text-gradient">1M+</p>
            <p className="text-muted-foreground mt-2 text-lg">Alcance Mensal</p>
          </div>
          <div className="text-center p-8 bg-card/80 backdrop-blur-sm rounded-2xl border border-primary/30 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(162,89,255,0.4)]">
            <p className="text-5xl md:text-6xl font-heading font-bold text-gradient">100%</p>
            <p className="text-muted-foreground mt-2 text-lg">Comprometimento</p>
          </div>
        </div>
      </div>

      {/* Services - Purple animated cards */}
      <div className="mb-20">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-10 text-center">
          O que está <span className="text-gradient">incluso</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { text: "Planejamento estratégico mensal", icon: "📊" },
            { text: "Criação de conteúdo visual", icon: "🎨" },
            { text: "Copywriting persuasivo", icon: "✍️" },
            { text: "Gestão de calendário editorial", icon: "📅" },
            { text: "Análise de métricas e relatórios", icon: "📈" },
            { text: "Atendimento via WhatsApp", icon: "💬" }
          ].map((service, index) => (
            <div 
              key={index} 
              className="group p-6 bg-primary/5 rounded-2xl border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(162,89,255,0.3)] cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-3xl mb-3 block group-hover:scale-125 transition-transform duration-300">{service.icon}</span>
              <p className="text-foreground font-medium group-hover:text-primary transition-colors">{service.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Clients - Bigger logos with animations */}
      <div>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-center">
          Alguns Perfis que <span className="text-gradient">Gerencio</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 text-lg">Clique para visitar o Instagram</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <a
              key={index}
              href={client.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center p-8 bg-primary/5 rounded-3xl border-2 border-primary/30 hover:border-primary transition-all duration-500 hover:scale-105 overflow-hidden hover:shadow-[0_0_60px_rgba(162,89,255,0.4)]"
            >
              {/* Animated Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Logo Container - Bigger */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden mb-6 bg-card border-2 border-primary/20 group-hover:border-primary transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(162,89,255,0.5)]">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Name */}
              <p className="relative z-10 text-lg font-bold text-center group-hover:text-primary transition-colors duration-300 mb-4">
                {client.name}
              </p>
              
              {/* Instagram Badge */}
              <div className="relative z-10 flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/20 border border-primary/50 group-hover:bg-primary group-hover:border-primary transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <Instagram className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                <span className="text-primary group-hover:text-primary-foreground text-sm font-medium transition-colors">Ver Instagram</span>
                <ExternalLink className="w-3 h-3 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default SocialMedia;
