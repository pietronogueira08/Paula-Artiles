import { Star, ShieldCheck, MapPin, Sparkles } from "lucide-react";

export default function Metrics() {
  const metrics = [
    {
      icon: <Star className="w-6 h-6 text-[#D4A373]" />,
      title: "5.0 ★★★★★",
      description: "Nota Máxima no Google (+339 Pacientes Satisfeitos)",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#D4A373]" />,
      title: "Spa Exclusivo",
      description: "Ambiente Privativo para o Seu Relaxamento e Autoestima",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#D4A373]" />,
      title: "Tecnologia Avançada",
      description: "Equipamentos de Última Geração e Laser de Precisão",
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#D4A373]" />,
      title: "Localização Nobre",
      description: "Fácil Acesso e Estacionamento no Parque Santo Amaro",
    },
  ];

  return (
    <section className="py-12 bg-white border-y border-[#D4A373]/10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300 hover:bg-[#FAF8F5] group"
            >
              <div className="w-12 h-12 bg-[#FAF8F5] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-[#D4A373]/20">
                {metric.icon}
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1A1A1A] mb-2">
                {metric.title}
              </h3>
              <p className="font-sans text-sm text-[#6B6560] leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
