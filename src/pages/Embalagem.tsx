import PageLayout from "@/components/PageLayout";
import embalagem1 from "@/assets/embalagem/embalagem1.png";
import embalagem2 from "@/assets/embalagem/embalagem2.png";
import embalagem3 from "@/assets/embalagem/embalagem3.png";
import embalagem4 from "@/assets/embalagem/embalagem4.png";
import embalagem5 from "@/assets/embalagem/embalagem5.png";

const works = [
  { id: 1, image: embalagem1, title: "Embalagem Premium" },
  { id: 2, image: embalagem2, title: "Caixa Personalizada" },
  { id: 3, image: embalagem3, title: "Design de Embalagem" },
  { id: 4, image: embalagem4, title: "Packaging Gourmet" },
  { id: 5, image: embalagem5, title: "Embalagem Artesanal" },
  { id: 6, image: embalagem1, title: "Packaging Exclusivo" },
];

const Embalagem = () => {
  return (
    <PageLayout
      title="Design de Embalagem"
      subtitle="Embalagens que destacam seu produto e encantam seus clientes."
    >
      {/* Stats */}
      <div className="grid grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6 bg-card rounded-xl neon-border">
          <p className="text-4xl font-heading font-bold text-gradient">+200</p>
          <p className="text-muted-foreground">Embalagens Criadas</p>
        </div>
        <div className="text-center p-6 bg-card rounded-xl neon-border">
          <p className="text-4xl font-heading font-bold text-gradient">50+</p>
          <p className="text-muted-foreground">Clientes Satisfeitos</p>
        </div>
        <div className="text-center p-6 bg-card rounded-xl neon-border">
          <p className="text-4xl font-heading font-bold text-gradient">100%</p>
          <p className="text-muted-foreground">Print Ready</p>
        </div>
      </div>

      {/* Services */}
      <div className="mb-16">
        <h2 className="text-2xl font-heading font-bold mb-8">O que está incluso</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Projeto estrutural completo",
            "Design gráfico da embalagem",
            "Mockups 3D realistas",
            "Arquivos para produção",
            "Faca de corte e vinco",
            "Acompanhamento na gráfica"
          ].map((service, index) => (
            <div key={index} className="p-6 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
              <p className="text-foreground">{service}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Works Grid */}
      <div>
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
    </PageLayout>
  );
};

export default Embalagem;
