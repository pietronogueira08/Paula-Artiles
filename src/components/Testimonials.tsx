import { Star, CheckCircle } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Camila Rodrigues",
      date: "Há 2 semanas",
      text: "Melhor consultório de dermatologia de Campos! O atendimento é excelente desde a recepção até a médica. A Dra. Paula é muito atenciosa e o resultado do meu Botox ficou super natural.",
    },
    {
      name: "Juliana Mendes",
      date: "Há 1 mês",
      text: "A experiência do Spa Facial é simplesmente maravilhosa. O ambiente é super relaxante e privativo. Senti minha pele renovada e com um glow incrível. Recomendo de olhos fechados!",
    },
    {
      name: "Roberto Almeida",
      date: "Há 3 meses",
      text: "Fiz tratamento capilar e os resultados foram surpreendentes. A clínica tem equipamentos muito modernos e a Dra. explica tudo nos mínimos detalhes. Localização ótima com estacionamento fácil.",
    },
  ];

  return (
    <section id="depoimentos" className="py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-serif italic text-xl text-[#D4A373] block mb-4">
            Aprovação Máxima
          </span>
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#1A1A1A]">
            O Que Nossos Pacientes Dizem
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 border border-[#D4A373]/10 shadow-lg shadow-black/5 hover:-translate-y-1 transition-transform duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              {/* Text */}
              <p className="font-sans text-[#6B6560] italic leading-relaxed flex-grow mb-8">
                "{review.text}"
              </p>
              
              {/* Author Info */}
              <div className="mt-auto flex items-center justify-between border-t border-[#FAF8F5] pt-4">
                <div>
                  <h4 className="font-serif font-bold text-[#1A1A1A]">{review.name}</h4>
                  <p className="text-xs font-sans text-gray-400 mt-1">{review.date}</p>
                </div>
                <div className="flex items-center text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Google
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
