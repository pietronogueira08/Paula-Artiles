import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Text Label (Hidden by default, shows on hover/expand) */}
      <div className="bg-white px-4 py-2 rounded-full shadow-lg border border-[#D4A373]/20 text-sm font-medium text-[#1A1A1A] mr-3 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden sm:block">
        Agendar no WhatsApp
      </div>
      
      {/* Floating Button */}
      <a
        href="https://wa.me/5522999773756"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform duration-300 relative"
        aria-label="Falar no WhatsApp"
      >
        <span className="absolute inset-0 w-full h-full rounded-full bg-[#25D366] animate-ping opacity-20"></span>
        <MessageCircle className="w-7 h-7 relative z-10" />
      </a>
    </div>
  );
}
