export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#D4A373]/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex flex-col mb-4 inline-block">
              <span className="font-serif font-bold text-2xl text-[#1A1A1A]">
                Dra. Paula Artiles
              </span>
              <span className="font-sans text-xs tracking-[0.2em] text-[#D4A373] uppercase mt-1">
                Dermatologia & Spa
              </span>
            </a>
            <p className="font-sans text-[#6B6560] max-w-md leading-relaxed mt-4">
              Protocolos exclusivos e personalizados de rejuvenescimento facial, corporal e tratamento capilar em um ambiente único e privativo.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-[#1A1A1A] text-lg mb-4">Contato & Localização</h4>
            <ul className="space-y-3 font-sans text-sm text-[#6B6560]">
              <li>
                <strong>Endereço:</strong><br />
                Av. Dr. Nilo Peçanha, 304<br />
                Parque Santo Amaro<br />
                Campos dos Goytacazes - RJ
              </li>
              <li className="pt-2">
                <strong>Telefone / WhatsApp:</strong><br />
                <a href="https://wa.me/5522999773756" className="text-[#D4A373] hover:underline">
                  (22) 99977-3756
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif font-bold text-[#1A1A1A] text-lg mb-4">Horário de Atendimento</h4>
            <ul className="space-y-3 font-sans text-sm text-[#6B6560]">
              <li>Segunda a Sexta:<br />08h às 18h</li>
              <li>Sábado:<br />08h às 12h</li>
              <li className="pt-2 text-xs italic">
                * Atendimento exclusivo com hora marcada.
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="font-sans text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Clínica Dra. Paula Artiles. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-xs text-gray-400 font-sans">
            <a href="#" className="hover:text-[#D4A373] transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-[#D4A373] transition-colors">Termos de Uso</a>
          </div>
          <p className="font-sans text-xs text-gray-400">
            Desenvolvido por <span className="font-medium text-[#D4A373]">Pietro Dev</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
