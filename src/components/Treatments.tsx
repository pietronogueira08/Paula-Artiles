import { ArrowRight } from "lucide-react";

export default function Treatments() {
  const treatments = [
    {
      title: "Toxina Botulínica (Botox)",
      description: "Suavização de linhas de expressão e prevenção do envelhecimento com acabamento ultra-natural.",
    },
    {
      title: "Bioestimuladores de Colágeno",
      description: "Estímulo profundo da firmeza da pele para rosto e corpo com resultados duradouros. (Sculptra & Radiesse)",
    },
    {
      title: "Preenchimento Facial & Labial",
      description: "Harmonização delicada e reestruturação do contorno facial respeitando suas feições.",
    },
    {
      title: "Rejuvenescimento & Lasers Avançados",
      description: "Tratamento de manchas, melasma, poros dilatados e textura com tecnologia de ponta.",
    },
    {
      title: "Tricologia & Tratamento Capilar",
      description: "Diagnóstico e terapia especializada para saúde do couro cabeludo e queda capilar.",
    },
    {
      title: "Spa Facial & Corporal Exclusivo",
      description: "Protocolos de hidratação profunda, limpeza de pele e relaxamento para elevar sua autoestima.",
    },
  ];

  return (
    <section id="tratamentos" className="py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-serif italic text-xl text-[#D4A373] block mb-4">
            Cuidados Exclusivos para Sua Pele
          </span>
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#1A1A1A]">
            Tratamentos Dermatológicos & Cosmiatria Avançada
          </h2>
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 border border-transparent hover:border-[#D4A373]/30 shadow-sm hover:shadow-xl hover:shadow-[#D4A373]/10 transition-all duration-300 group flex flex-col h-full relative overflow-hidden"
            >
              {/* Subtle accent line on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4A373] to-[#E6C594] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
              
              <h3 className="font-serif font-bold text-xl text-[#1A1A1A] mb-4">
                {treatment.title}
              </h3>
              
              <p className="font-sans text-[#6B6560] leading-relaxed flex-grow mb-8">
                {treatment.description}
              </p>
              
              <a 
                href="https://wa.me/5522999773756" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold text-[#D4A373] group-hover:text-[#C5A880] transition-colors mt-auto"
              >
                Saiba Mais & Agende
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
