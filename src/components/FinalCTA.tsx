import { MessageCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-[#FAF8F5] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-[#121212] border border-[#D4A373]/40 shadow-2xl shadow-[#D4A373]/20 p-10 md:p-16 text-center">
          
          {/* Glowing Ambient Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#D4A373]/10 blur-[80px] rounded-full pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="font-serif font-bold text-3xl md:text-5xl text-white mb-8 max-w-3xl mx-auto leading-tight">
              Sua pele merece o cuidado de especialistas. Agende sua avaliação.
            </h2>
            
            <a
              href="https://wa.me/5522999773756"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-8 py-4 border border-transparent rounded-full text-lg font-medium text-white bg-gradient-to-r from-[#D4A373] to-[#C5A880] hover:scale-105 hover:shadow-[0_0_20px_rgba(212,163,115,0.4)] transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              Falar com a Recepção no WhatsApp (22) 99977-3756
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
