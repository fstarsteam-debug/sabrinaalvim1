import PageLayout from "@/components/PageLayout";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const works = [
  { id: 1, images: [portfolio2, portfolio4, portfolio2], title: "Carrossel Promocional" },
  { id: 2, images: [portfolio4, portfolio2, portfolio4], title: "Cards para Feed" },
  { id: 3, images: [portfolio2, portfolio4, portfolio2], title: "Stories Animados" },
  { id: 4, images: [portfolio4, portfolio2, portfolio4], title: "Posts Institucionais" },
  { id: 5, images: [portfolio2, portfolio4, portfolio2], title: "Carrossel Educativo" },
  { id: 6, images: [portfolio4, portfolio2, portfolio4], title: "Cards de Dicas" },
];

const CardsCarrosseis = () => {
  return (
    <PageLayout
      title="Cards e Carrosséis"
      subtitle="Conteúdo visual estratégico que engaja e educa seu público."
    >
      {/* Stats */}
      <div className="grid grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6 bg-card rounded-xl neon-border">
          <p className="text-4xl font-heading font-bold text-gradient">+2000</p>
          <p className="text-muted-foreground">Cards Criados</p>
        </div>
        <div className="text-center p-6 bg-card rounded-xl neon-border">
          <p className="text-4xl font-heading font-bold text-gradient">+800</p>
          <p className="text-muted-foreground">Carrosséis</p>
        </div>
        <div className="text-center p-6 bg-card rounded-xl neon-border">
          <p className="text-4xl font-heading font-bold text-gradient">⚡</p>
          <p className="text-muted-foreground">Entrega Rápida</p>
        </div>
      </div>

      {/* Services */}
      <div className="mb-16">
        <h2 className="text-2xl font-heading font-bold mb-8">O que está incluso</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Design alinhado à identidade visual",
            "Textos persuasivos e estratégicos",
            "Layouts otimizados para engajamento",
            "Até 10 slides por carrossel",
            "Material entregue em alta qualidade",
            "Arquivos em alta resolução"
          ].map((service, index) => (
            <div key={index} className="p-6 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
              <p className="text-foreground">{service}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Works Grid - Cards showing multiple images as carousel preview */}
      <div>
        <h2 className="text-2xl font-heading font-bold mb-8">Meus Trabalhos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work) => (
            <div 
              key={work.id}
              className="group relative rounded-xl overflow-hidden neon-border bg-card"
            >
              {/* Multiple images in a row */}
              <div className="flex gap-1 p-2">
                {work.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="flex-1 aspect-[4/5] rounded-lg overflow-hidden">
                    <img 
                      src={image} 
                      alt={`${work.title} - ${imgIndex + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
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

export default CardsCarrosseis;
