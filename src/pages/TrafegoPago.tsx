import PageLayout from "@/components/PageLayout";
import { TrendingUp, Target, BarChart3, Users, DollarSign, Zap, ArrowRight, CheckCircle2 } from "lucide-react";

const TrafegoPago = () => {
  return (
    <PageLayout
      title="Tráfego Pago"
      subtitle="Alcance milhares de clientes em potencial com estratégias de anúncios otimizadas."
    >
      {/* Hero Stats com Animação */}
      <div className="relative mb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 rounded-3xl blur-2xl animate-pulse" />
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { value: "+500K", label: "Em Investimento Gerenciado", icon: DollarSign },
            { value: "10x", label: "ROI Médio dos Clientes", icon: TrendingUp },
            { value: "+50", label: "Campanhas Ativas", icon: Target },
            { value: "1M+", label: "Pessoas Alcançadas/Mês", icon: Users },
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-primary/30 hover:border-primary transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(162,89,255,0.4)] group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-3xl md:text-4xl font-heading font-bold text-gradient">{stat.value}</p>
              <p className="text-muted-foreground mt-2 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* O que é Tráfego Pago */}
      <div className="mb-20">
        <div className="relative">
          <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary rounded-full" />
          <div className="pl-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              O que é <span className="text-gradient">Tráfego Pago</span>?
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Tráfego pago é uma estratégia de marketing digital onde você <span className="text-foreground font-medium">investe em anúncios</span> para que sua marca, produtos ou serviços apareçam para um público específico nas principais plataformas digitais.
              </p>
              <p className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Diferente do tráfego orgânico (que leva tempo para crescer), o tráfego pago permite <span className="text-foreground font-medium">resultados imediatos e mensuráveis</span>, direcionando pessoas interessadas diretamente para o seu negócio.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Plataformas */}
      <div className="mb-20">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-10 text-center">
          Onde <span className="text-gradient">Anunciamos</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Meta Ads", desc: "Facebook e Instagram", icon: "📱" },
            { name: "Google Ads", desc: "Pesquisa e Display", icon: "🔍" },
            { name: "TikTok Ads", desc: "Conteúdo viral", icon: "🎵" },
            { name: "LinkedIn Ads", desc: "B2B e profissionais", icon: "💼" },
          ].map((platform, index) => (
            <div 
              key={index}
              className="group p-6 bg-card/50 rounded-2xl border border-border/50 hover:border-primary transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(162,89,255,0.3)] text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-5xl mb-4 block group-hover:scale-125 transition-transform duration-300">{platform.icon}</span>
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">{platform.name}</h3>
              <p className="text-muted-foreground text-sm">{platform.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Como Funciona */}
      <div className="mb-20">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-10 text-center">
          Como <span className="text-gradient">Funciona</span>
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden md:block" />
          <div className="space-y-12">
            {[
              { step: "01", title: "Análise do Negócio", desc: "Entendemos seu negócio, público-alvo, concorrentes e objetivos para criar uma estratégia personalizada.", icon: Target },
              { step: "02", title: "Criação das Campanhas", desc: "Desenvolvemos criativos impactantes, textos persuasivos e configuramos as campanhas nas plataformas ideais.", icon: Zap },
              { step: "03", title: "Otimização Contínua", desc: "Monitoramos diariamente os resultados e ajustamos a estratégia para maximizar o retorno do investimento.", icon: BarChart3 },
              { step: "04", title: "Relatórios e Resultados", desc: "Você recebe relatórios claros mostrando exatamente quanto investiu, quantas vendas gerou e qual foi o seu ROI.", icon: TrendingUp },
            ].map((item, index) => (
              <div 
                key={index} 
                className={`flex items-center gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`flex-1 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                  <div className="group p-6 bg-card/50 rounded-2xl border border-border/50 hover:border-primary transition-all duration-500 hover:shadow-[0_0_40px_rgba(162,89,255,0.2)]">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl font-heading font-bold text-gradient">{item.step}</span>
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
                <div className="hidden md:block w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_rgba(162,89,255,0.8)]" />
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefícios */}
      <div className="mb-20">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-10 text-center">
          Por que investir em <span className="text-gradient">Tráfego Pago</span>?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Resultados rápidos e mensuráveis",
            "Alcance exato do público ideal",
            "Controle total do investimento",
            "Escalabilidade do negócio",
            "Dados e insights valiosos",
            "Vantagem competitiva no mercado",
            "Remarketing para quem já visitou",
            "Teste de produtos e ofertas",
            "Aumento das vendas e faturamento",
          ].map((benefit, index) => (
            <div 
              key={index}
              className="group flex items-center gap-4 p-5 bg-card/50 rounded-xl border border-border/50 hover:border-primary transition-all duration-300 hover:bg-primary/5"
            >
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
              <p className="text-foreground font-medium">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Final */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/30 to-primary/20 rounded-3xl blur-xl" />
        <div className="relative p-10 bg-card/80 backdrop-blur-sm rounded-3xl border border-primary/30 text-center">
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Pronto para <span className="text-gradient">escalar suas vendas</span>?
          </h3>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Entre em contato e descubra como o tráfego pago pode transformar o seu negócio.
          </p>
          <a 
            href="http://wa.me/31994216833" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(162,89,255,0.5)]"
          >
            Quero começar agora
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </PageLayout>
  );
};

export default TrafegoPago;
