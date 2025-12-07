import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import impresso1 from "@/assets/impressos/impresso1.png";
import impresso2 from "@/assets/impressos/impresso2.png";
import impresso3 from "@/assets/impressos/impresso3.png";
import impresso4 from "@/assets/impressos/impresso4.png";
import impresso5 from "@/assets/impressos/impresso5.png";

const works = [
  { id: 1, image: impresso1, title: "Folder Institucional" },
  { id: 2, image: impresso2, title: "Cartões de Visita" },
  { id: 3, image: impresso3, title: "Banner Promocional" },
  { id: 4, image: impresso4, title: "Flyers e Panfletos" },
  { id: 5, image: impresso5, title: "Catálogo de Produtos" },
  { id: 6, image: impresso1, title: "Papelaria Completa" },
];

const cardModels = [
  "Cartão somente frente",
  "Cartão frente verniz total e verso preto e branco",
  "Cartão frente verniz total e verso colorido",
  "Cartão verniz localizado"
];

const quantities = ["250un", "500un", "1000un", "2500un ou mais"];

const Impressos = () => {
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    email: "",
    servico: "",
    cardModel: "",
    cardQuantity: "",
    bannerSize: "",
    panfletoQuantity: "",
    panfletoCustomQuantity: "",
    adesivosQuantity: "",
    adesivosSize: "",
    adesivosType: "",
  });

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      servico: prev.servico === service ? "" : service,
      cardModel: "",
      cardQuantity: "",
      bannerSize: "",
      panfletoQuantity: "",
      panfletoCustomQuantity: "",
      adesivosQuantity: "",
      adesivosSize: "",
      adesivosType: "",
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let message = `*Orçamento Impressos*\n\n`;
    message += `*Nome:* ${formData.nome}\n`;
    message += `*WhatsApp:* ${formData.whatsapp}\n`;
    message += `*Email:* ${formData.email}\n`;
    message += `*Serviço:* ${formData.servico}\n`;
    
    if (formData.servico === "Cartão de visitas") {
      message += `*Modelo:* ${formData.cardModel}\n`;
      message += `*Quantidade:* ${formData.cardQuantity}\n`;
    } else if (formData.servico === "Banner") {
      message += `*Tamanho:* ${formData.bannerSize}\n`;
    } else if (formData.servico === "Panfletos") {
      message += `*Quantidade:* ${formData.panfletoQuantity || formData.panfletoCustomQuantity}\n`;
    } else if (formData.servico === "Adesivos") {
      message += `*Quantidade:* ${formData.adesivosQuantity}\n`;
      message += `*Tamanho:* ${formData.adesivosSize}\n`;
      message += `*Tipo:* ${formData.adesivosType}\n`;
    }
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/31994216833?text=${encodedMessage}`, "_blank");
    
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Seu orçamento será enviado via WhatsApp.",
    });
  };

  return (
    <PageLayout
      title="Design para Impressos"
      subtitle="Materiais gráficos profissionais que transmitem credibilidade."
    >
      {/* Stats */}
      <div className="grid grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6 bg-card rounded-xl neon-border">
          <p className="text-4xl font-heading font-bold text-gradient">+500</p>
          <p className="text-muted-foreground">Materiais Criados</p>
        </div>
        <div className="text-center p-6 bg-card rounded-xl neon-border">
          <p className="text-4xl font-heading font-bold text-gradient">100+</p>
          <p className="text-muted-foreground">Empresas Atendidas</p>
        </div>
        <div className="text-center p-6 bg-card rounded-xl neon-border">
          <p className="text-4xl font-heading font-bold text-gradient">CMYK</p>
          <p className="text-muted-foreground">Print Ready</p>
        </div>
      </div>

      {/* Services */}
      <div className="mb-16">
        <h2 className="text-2xl font-heading font-bold mb-8">Tipos de Materiais</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Cartões de Visita",
            "Folders e Flyers",
            "Banners e Faixas",
            "Catálogos",
            "Cardápios",
            "Papelaria Completa",
            "Convites",
            "Etiquetas e Tags"
          ].map((service, index) => (
            <div key={index} className="p-6 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-colors text-center">
              <p className="text-foreground">{service}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Works Grid */}
      <div className="mb-20">
        <h2 className="text-2xl font-heading font-bold mb-8">Meus Trabalhos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work) => (
            <div 
              key={work.id}
              className="group relative rounded-xl overflow-hidden neon-border"
            >
              <img 
                src={work.image} 
                alt={work.title}
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="px-3 py-1 bg-primary/90 rounded-full text-sm">{work.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quote Form */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 rounded-3xl blur-xl" />
        <div className="relative p-8 md:p-12 bg-card/90 backdrop-blur-sm rounded-3xl border border-primary/30">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">
            Solicitar <span className="text-gradient">Orçamento</span>
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            {/* Basic Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="nome">Nome *</Label>
                <Input
                  id="nome"
                  value={formData.nome}
                  onChange={(e) => setFormData({...formData, nome: e.target.value})}
                  required
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="whatsapp">WhatsApp *</Label>
                <Input
                  id="whatsapp"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                  required
                  className="mt-2"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="mt-2"
              />
            </div>

            {/* Service Selection */}
            <div>
              <Label className="mb-4 block">Selecione o serviço *</Label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {["Cartão de visitas", "Banner", "Wind banner", "Panfletos", "Adesivos"].map((service) => (
                  <div
                    key={service}
                    onClick={() => handleServiceChange(service)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 text-center ${
                      formData.servico === service 
                        ? "border-primary bg-primary/10 text-primary" 
                        : "border-border/50 hover:border-primary/50"
                    }`}
                  >
                    <span className="text-sm font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cartão de visitas options */}
            {formData.servico === "Cartão de visitas" && (
              <div className="space-y-4 p-6 bg-primary/5 rounded-xl border border-primary/20 animate-fade-in">
                <div>
                  <Label className="mb-3 block">Modelo do cartão</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {cardModels.map((model) => (
                      <div
                        key={model}
                        onClick={() => setFormData({...formData, cardModel: model})}
                        className={`p-3 rounded-lg border cursor-pointer transition-all ${
                          formData.cardModel === model 
                            ? "border-primary bg-primary/10" 
                            : "border-border/50 hover:border-primary/50"
                        }`}
                      >
                        <span className="text-sm">{model}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <Label className="mb-3 block">Quantidade</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {quantities.map((qty) => (
                      <div
                        key={qty}
                        onClick={() => setFormData({...formData, cardQuantity: qty})}
                        className={`p-3 rounded-lg border cursor-pointer transition-all text-center ${
                          formData.cardQuantity === qty 
                            ? "border-primary bg-primary/10" 
                            : "border-border/50 hover:border-primary/50"
                        }`}
                      >
                        <span className="text-sm">{qty}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Banner options */}
            {formData.servico === "Banner" && (
              <div className="p-6 bg-primary/5 rounded-xl border border-primary/20 animate-fade-in">
                <Label htmlFor="bannerSize">Tamanho do banner</Label>
                <Input
                  id="bannerSize"
                  placeholder="Ex: 1m x 2m"
                  value={formData.bannerSize}
                  onChange={(e) => setFormData({...formData, bannerSize: e.target.value})}
                  className="mt-2"
                />
              </div>
            )}

            {/* Wind banner - no extra options needed, just basic form */}

            {/* Panfletos options */}
            {formData.servico === "Panfletos" && (
              <div className="space-y-4 p-6 bg-primary/5 rounded-xl border border-primary/20 animate-fade-in">
                <div>
                  <Label className="mb-3 block">Quantidade</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {quantities.map((qty) => (
                      <div
                        key={qty}
                        onClick={() => setFormData({...formData, panfletoQuantity: qty, panfletoCustomQuantity: ""})}
                        className={`p-3 rounded-lg border cursor-pointer transition-all text-center ${
                          formData.panfletoQuantity === qty 
                            ? "border-primary bg-primary/10" 
                            : "border-border/50 hover:border-primary/50"
                        }`}
                      >
                        <span className="text-sm">{qty}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <Label htmlFor="customQty">Ou digite a quantidade desejada</Label>
                  <Input
                    id="customQty"
                    placeholder="Ex: 3000 unidades"
                    value={formData.panfletoCustomQuantity}
                    onChange={(e) => setFormData({...formData, panfletoCustomQuantity: e.target.value, panfletoQuantity: ""})}
                    className="mt-2"
                  />
                </div>
              </div>
            )}

            {/* Adesivos options */}
            {formData.servico === "Adesivos" && (
              <div className="space-y-4 p-6 bg-primary/5 rounded-xl border border-primary/20 animate-fade-in">
                <div>
                  <Label className="mb-3 block">Quantidade</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {quantities.map((qty) => (
                      <div
                        key={qty}
                        onClick={() => setFormData({...formData, adesivosQuantity: qty})}
                        className={`p-3 rounded-lg border cursor-pointer transition-all text-center ${
                          formData.adesivosQuantity === qty 
                            ? "border-primary bg-primary/10" 
                            : "border-border/50 hover:border-primary/50"
                        }`}
                      >
                        <span className="text-sm">{qty}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="adesivosSize">Tamanho</Label>
                  <Input
                    id="adesivosSize"
                    placeholder="Ex: 5cm x 5cm"
                    value={formData.adesivosSize}
                    onChange={(e) => setFormData({...formData, adesivosSize: e.target.value})}
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label className="mb-3 block">Tipo de adesivo</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {["Adesivo de papel", "Adesivo de vinil à prova d'água"].map((type) => (
                      <div
                        key={type}
                        onClick={() => setFormData({...formData, adesivosType: type})}
                        className={`p-3 rounded-lg border cursor-pointer transition-all text-center ${
                          formData.adesivosType === type 
                            ? "border-primary bg-primary/10" 
                            : "border-border/50 hover:border-primary/50"
                        }`}
                      >
                        <span className="text-sm">{type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <Button type="submit" variant="neon" size="lg" className="w-full">
              <Send className="w-5 h-5 mr-2" />
              Enviar Orçamento via WhatsApp
            </Button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default Impressos;
