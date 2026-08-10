"use client";

import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export default function AppointmentForm() {
  const [procedure, setProcedure] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Gostaria de agendar uma consulta na Clínica Dra. Paula Artiles.${
      name ? ` Meu nome é ${name}.` : ""
    } Procedimento: ${procedure || "Não definido"}. Período: ${time || "Não definido"}.`;
    
    const url = `https://wa.me/5522999773756?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="agendar" className="py-24 relative overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FAF8F5] rounded-l-[100px] -z-10 opacity-50 hidden lg:block"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-[#D4A373]/20">
          
          <div className="text-center mb-10">
            <h3 className="font-serif font-bold text-3xl text-[#1A1A1A] mb-3">
              Agende Sua Consulta com a Equipe da Dra. Paula Artiles
            </h3>
            <p className="font-sans text-[#6B6560]">
              Preencha os dados abaixo para adiantar seu atendimento. Nossa equipe entrará em contato rapidamente.
            </p>
          </div>

          <form onSubmit={handleWhatsAppRedirect} className="space-y-8">
            
            {/* Step 1 */}
            <div className="space-y-3">
              <label className="block font-sans font-medium text-[#1A1A1A]">
                1. Qual procedimento você deseja realizar?
              </label>
              <Select onValueChange={setProcedure}>
                <SelectTrigger className="w-full border-[#D4A373]/30 focus:ring-[#D4A373] h-12 rounded-xl bg-[#FAF8F5]">
                  <SelectValue placeholder="Selecione o procedimento..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Toxina Botulínica (Botox)">Toxina Botulínica (Botox)</SelectItem>
                  <SelectItem value="Bioestimuladores / Rejuvenescimento">Bioestimuladores / Rejuvenescimento</SelectItem>
                  <SelectItem value="Preenchimento Facial / Labial">Preenchimento Facial / Labial</SelectItem>
                  <SelectItem value="Tratamento Capilar / Tricologia">Tratamento Capilar / Tricologia</SelectItem>
                  <SelectItem value="Spa Facial Exclusivo">Spa Facial Exclusivo</SelectItem>
                  <SelectItem value="Consulta Dermatológica Geral">Consulta Dermatológica Geral</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Step 2 */}
            <div className="space-y-3">
              <label className="block font-sans font-medium text-[#1A1A1A]">
                2. Qual o melhor período para seu atendimento?
              </label>
              <Select onValueChange={setTime}>
                <SelectTrigger className="w-full border-[#D4A373]/30 focus:ring-[#D4A373] h-12 rounded-xl bg-[#FAF8F5]">
                  <SelectValue placeholder="Selecione o período ideal..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Manhã (08h às 12h)">Manhã (08h às 12h)</SelectItem>
                  <SelectItem value="Tarde (13h às 18h)">Tarde (13h às 18h)</SelectItem>
                  <SelectItem value="Sábado">Sábado</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Step 3 */}
            <div className="space-y-3">
              <label className="block font-sans font-medium text-[#1A1A1A]">
                3. Seu nome completo (Opcional)
              </label>
              <Input 
                type="text" 
                placeholder="Ex: Maria Silva" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-[#D4A373]/30 focus:ring-[#D4A373] h-12 rounded-xl bg-[#FAF8F5]"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-xl shadow-lg shadow-[#D4A373]/20 text-lg font-serif font-semibold text-white bg-gradient-to-r from-[#D4A373] to-[#C5A880] hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
              >
                Enviar Solicitação de Agendamento pelo WhatsApp
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}
