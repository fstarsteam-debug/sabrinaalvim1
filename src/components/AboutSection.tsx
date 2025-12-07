import { Palette, Target, Sparkles, TrendingUp, Award } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    { icon: Award, text: "Mais de 17 anos criando identidade visual" },
    { icon: Target, text: "Especialista em redes sociais para pequenas empresas" },
    { icon: Sparkles, text: "Foco em estética moderna, limpa e profissional" },
    { icon: Palette, text: "Capacidade de transformar ideias em marcas fortes" },
    { icon: TrendingUp, text: "Domínio de design estratégico orientado a vendas" },
  ];

  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-16">
            <span className="text-gradient">Criatividade</span> que conecta.
            <br />
            <span className="text-gradient">Estratégia</span> que converte.
          </h2>
          
          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="group relative p-6 bg-card/50 rounded-2xl border border-border/50 hover:border-primary transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(162,89,255,0.4)]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Purple Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
                
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/20 border border-primary/30 group-hover:bg-primary/30 group-hover:border-primary transition-all duration-300 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                {/* Text */}
                <p className="text-foreground font-medium relative z-10">{item.text}</p>
              </div>
            ))}
          </div>
          
          {/* Stats */}
          <div className="mt-16 flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <p className="text-5xl md:text-6xl font-heading font-bold text-gradient">+300</p>
              <p className="text-muted-foreground mt-2">Projetos Entregues</p>
            </div>
            <div className="text-center">
              <p className="text-5xl md:text-6xl font-heading font-bold text-gradient">17+</p>
              <p className="text-muted-foreground mt-2">Anos de Experiência</p>
            </div>
            <div className="text-center">
              <p className="text-5xl md:text-6xl font-heading font-bold text-gradient">100%</p>
              <p className="text-muted-foreground mt-2">Comprometimento</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;