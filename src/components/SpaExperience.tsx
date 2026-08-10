import { HeartHandshake, Wind, Clock } from "lucide-react";

export default function SpaExperience() {
  const highlights = [
    {
      icon: <HeartHandshake className="w-8 h-8 text-[#D4A373]" />,
      title: "Atendimento Humanizado e Individualizado",
      description: "Compreendemos que cada paciente é único. Nossas consultas são longas e detalhadas para entender suas reais necessidades.",
    },
    {
      icon: <Wind className="w-8 h-8 text-[#D4A373]" />,
      title: "Ambiente Climatizado, Privativo e Acolhedor",
      description: "Um refúgio de tranquilidade no Parque Santo Amaro. Música ambiente, aromaterapia e total privacidade.",
    },
    {
      icon: <Clock className="w-8 h-8 text-[#D4A373]" />,
      title: "Acompanhamento Pós-Procedimento Contínuo",
      description: "Nossa equipe acompanha sua evolução de perto, garantindo segurança e os melhores resultados a longo prazo.",
    },
  ];

  return (
    <section id="spa" className="py-24 bg-[#121212] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-[#D4A373]/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-serif italic text-xl text-[#D4A373] block mb-4">
            A Experiência Paula Artiles
          </span>
          <h2 className="font-serif font-bold text-3xl md:text-5xl text-white mb-6 leading-tight">
            Um Novo Conceito em Saúde, Beleza e Autoestima
          </h2>
          <p className="font-sans text-[#E6C594]/80 text-lg leading-relaxed font-light">
            Na Clínica Dra. Paula Artiles, cada detalhe foi planejado para proporcionar uma experiência transformadora. Desfrute do nosso spa exclusivo em um ambiente acolhedor e sofisticado no Parque Santo Amaro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {highlights.map((highlight, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-[#D4A373]/30 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-[#1A1A1A] border border-[#D4A373]/20 flex items-center justify-center mb-6">
                {highlight.icon}
              </div>
              <h3 className="font-serif font-bold text-xl text-white mb-4">
                {highlight.title}
              </h3>
              <p className="font-sans text-gray-400 font-light leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
