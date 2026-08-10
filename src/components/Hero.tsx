import Image from "next/image";
import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column (Copy & Value Proposition) */}
          <div className="flex flex-col items-start space-y-8">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#D4A373]/30 bg-[#D4A373]/10">
              <span className="font-serif italic text-sm text-[#D4A373]">
                ✨ Dermatologia de Alta Performance & Spa Exclusivo no Santo Amaro - Campos/RJ
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1A1A1A] leading-tight">
              Realce Sua Beleza Natural com Tratamentos Dermatológicos de Alta Performance
            </h1>
            
            <p className="text-lg text-[#6B6560] font-sans font-light max-w-xl leading-relaxed">
              Protocolos exclusivos e personalizados de rejuvenescimento facial, toxina botulínica, bioestimuladores de colágeno e tratamento capilar em um ambiente único e privativo no Parque Santo Amaro.
            </p>
            
            {/* Trust Callout Strip */}
            <div className="flex items-center space-x-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-[#D4A373]/10">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-[#1A1A1A]">5.0</span>
              <span className="text-sm text-[#6B6560]">(+339 Avaliações Verificadas no Google)</span>
            </div>
            
            {/* Dual Action CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#agendar"
                className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent rounded-full text-base font-medium text-white bg-gradient-to-r from-[#D4A373] to-[#C5A880] hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#D4A373]/30 relative overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-white/20 group-hover:animate-pulse"></span>
                <span className="relative">Agendar Avaliação Personalizada</span>
              </a>
              <a
                href="#tratamentos"
                className="inline-flex justify-center items-center px-8 py-3.5 border-2 border-[#D4A373]/50 rounded-full text-base font-medium text-[#D4A373] hover:bg-[#D4A373]/5 hover:border-[#D4A373] transition-colors duration-300"
              >
                Conhecer Tratamentos
              </a>
            </div>
          </div>
          
          {/* Right Column (Visual Showcase) */}
          <div className="relative w-full h-[500px] lg:h-[650px] rounded-3xl p-2 bg-gradient-to-tr from-[#D4A373]/20 via-transparent to-[#E6C594]/20">
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
              {/* Note: In a real scenario, this would be an actual interior image */}
              <div className="w-full h-full bg-gradient-to-br from-[#f0eae1] to-[#e6dfd3] flex items-center justify-center relative">
                <Image
                  src="/hero-interior.jpg"
                  alt="Clínica Dra. Paula Artiles Interior"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            
            {/* Floating glassmorphism card */}
            <div className="absolute -bottom-6 -left-6 right-6 sm:-left-10 sm:right-auto bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/50 max-w-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#D4A373]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">✨</span>
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-[#1A1A1A]">Atendimento Exclusivo & Privativo</h3>
                  <p className="text-xs text-[#6B6560] mt-1 font-sans">Agendamento com Hora Marcada para sua total privacidade e conforto.</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Background ambient light */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-[#E6C594]/10 blur-3xl"></div>
        <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#D4A373]/5 blur-3xl"></div>
      </div>
    </section>
  );
}
