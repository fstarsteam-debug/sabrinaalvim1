import { useState } from "react";
import { Lock, Check, Instagram, Video, Calendar, Image, Users, MessageSquare, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";

const CORRECT_PASSWORD = "123ZARINHA";

const packages = [
  {
    name: "Pacote Básico",
    subtitle: "Ideal para começar",
    color: "from-purple-600 to-purple-800",
    reels: 2,
    posts: 8,
    features: [
      {
        icon: Video,
        title: "2 Reels por mês",
        description: "Vídeos curtos e dinâmicos para engajar seu público, com edição profissional, legendas e músicas estratégicas"
      },
      {
        icon: Image,
        title: "8 Posts por mês",
        description: "Artes criativas para feed incluindo cards informativos, posts de produtos/serviços e conteúdos institucionais"
      },
      {
        icon: Calendar,
        title: "Conteúdo Sazonal",
        description: "Posts especiais para datas comemorativas relevantes ao seu negócio (Natal, Dia das Mães, Black Friday, etc.)"
      },
      {
        icon: Users,
        title: "Gerenciamento de Redes Sociais",
        description: "Planejamento estratégico, calendário editorial, agendamento de publicações e análise de métricas"
      },
      {
        icon: MessageSquare,
        title: "Suporte via WhatsApp",
        description: "Atendimento para dúvidas e alinhamentos sobre o conteúdo"
      }
    ]
  },
  {
    name: "Pacote Iniciante",
    subtitle: "O mais escolhido",
    color: "from-primary to-purple-600",
    popular: true,
    reels: 3,
    posts: 10,
    features: [
      {
        icon: Video,
        title: "3 Reels por mês",
        description: "Vídeos profissionais com transições, efeitos especiais e trilha sonora que conecta com seu público-alvo"
      },
      {
        icon: Image,
        title: "10 Posts ou Fotos de Produtos",
        description: "Artes personalizadas para feed ou fotos tratadas de produtos, incluindo carrosséis educativos e promocionais"
      },
      {
        icon: Sparkles,
        title: "Bônus Sazonal",
        description: "Conteúdos extras para datas especiais + Stories temáticos para aumentar o engajamento"
      },
      {
        icon: Users,
        title: "Gerenciamento de Redes Sociais",
        description: "Estratégia completa: planejamento, criação de calendário, postagens programadas, hashtags otimizadas e relatório mensal"
      },
      {
        icon: TrendingUp,
        title: "Análise de Concorrência",
        description: "Acompanhamento básico do que os concorrentes estão fazendo para manter você à frente"
      },
      {
        icon: MessageSquare,
        title: "Suporte Prioritário",
        description: "Atendimento ágil via WhatsApp com retorno em até 24h úteis"
      }
    ]
  },
  {
    name: "Pacote Premium Plus",
    subtitle: "Máximo resultado",
    color: "from-amber-500 to-orange-600",
    reels: 4,
    posts: 12,
    features: [
      {
        icon: Video,
        title: "4 Reels por mês",
        description: "Produções audiovisuais de alto impacto com roteiro estratégico, edição cinematográfica e chamadas para ação otimizadas"
      },
      {
        icon: Image,
        title: "12 Posts ou Fotos de Produtos",
        description: "Conteúdo visual premium incluindo carrosséis, posts estáticos, fotos de produtos com tratamento profissional e artes para stories"
      },
      {
        icon: Sparkles,
        title: "Bônus Sazonal Completo",
        description: "Campanhas completas para datas especiais com séries de posts, stories animados e reels temáticos"
      },
      {
        icon: Users,
        title: "Gerenciamento Premium de Redes",
        description: "Gestão 360°: estratégia avançada, calendário editorial detalhado, otimização de horários, hashtags pesquisadas, interação com seguidores e relatórios completos"
      },
      {
        icon: TrendingUp,
        title: "Consultoria de Crescimento",
        description: "Reuniões mensais para análise de performance, ajuste de estratégias e planejamento de crescimento"
      },
      {
        icon: MessageSquare,
        title: "Suporte VIP",
        description: "Atendimento exclusivo com prioridade máxima e reuniões de alinhamento semanais"
      }
    ]
  }
];

const Orcamento = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Senha incorreta. Tente novamente.");
    }
  };

  const handleWhatsApp = (packageName: string) => {
    const message = encodeURIComponent(
      `Olá Sabrina! Tenho interesse no ${packageName}. Gostaria de mais informações sobre valores e como podemos começar!`
    );
    window.open(`https://wa.me/5531994216833?text=${message}`, "_blank");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-10 h-10 text-primary" />
              </div>
              <CardTitle className="text-2xl text-foreground">Área Restrita</CardTitle>
              <p className="text-muted-foreground mt-2">
                Digite a senha para acessar os pacotes exclusivos
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="password"
                  placeholder="Digite a senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-background/50 border-primary/30 text-foreground"
                />
                {error && (
                  <p className="text-red-500 text-sm text-center animate-fade-in">{error}</p>
                )}
                <Button type="submit" className="w-full" variant="neon">
                  Acessar Proposta
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Proposta Comercial
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Pacotes exclusivos de Social Media e Reels para transformar sua presença digital
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-primary">
            <Instagram className="w-6 h-6" />
            <span className="text-lg font-medium">@sealdesignn</span>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <Card
                key={pkg.name}
                className={`relative overflow-hidden border-2 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  pkg.popular
                    ? "border-primary shadow-lg shadow-primary/20"
                    : "border-primary/20 hover:border-primary/50"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-sm font-bold px-4 py-1 rounded-bl-lg">
                    MAIS POPULAR
                  </div>
                )}
                
                <div className={`h-2 bg-gradient-to-r ${pkg.color}`} />
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl text-foreground">{pkg.name}</CardTitle>
                  <p className="text-muted-foreground">{pkg.subtitle}</p>
                  
                  <div className="flex justify-center gap-6 mt-4 py-4 border-y border-primary/20">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">{pkg.reels}</div>
                      <div className="text-sm text-muted-foreground">Reels</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">{pkg.posts}</div>
                      <div className="text-sm text-muted-foreground">Posts</div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {pkg.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex gap-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <feature.icon className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-500" />
                          {feature.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                  
                  <Button
                    onClick={() => handleWhatsApp(pkg.name)}
                    className="w-full mt-6"
                    variant={pkg.popular ? "neon" : "outline"}
                    size="lg"
                  >
                    Quero Este Pacote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Tem dúvidas sobre qual pacote escolher?
          </h2>
          <p className="text-muted-foreground mb-8">
            Entre em contato comigo e vamos conversar sobre as necessidades específicas do seu negócio. 
            Posso criar um pacote personalizado para você!
          </p>
          <Button
            onClick={() => handleWhatsApp("Pacote Personalizado")}
            variant="neon"
            size="xl"
          >
            Falar com Sabrina
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Orcamento;
