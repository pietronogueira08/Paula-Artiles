import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "Como funciona a primeira consulta dermatológica na clínica?",
      answer: "A primeira consulta é longa e detalhada. Realizamos uma anamnese completa, análise da sua pele com equipamentos modernos, alinhamento de expectativas e elaboração de um plano de tratamento totalmente personalizado para suas necessidades e objetivos.",
    },
    {
      question: "Os procedimentos estéticos como Botox e preenchimento ficam com aspecto natural?",
      answer: "Sim, essa é a principal filosofia da Dra. Paula Artiles. Utilizamos técnicas avançadas de MD Codes e preenchimento guiado para realçar sua beleza natural, respeitando as proporções do seu rosto sem exageros ou 'cara de procedimento'.",
    },
    {
      question: "A clínica atende por planos de saúde ou apenas particular?",
      answer: "Para garantir o tempo, exclusividade e a qualidade que nossos pacientes merecem, nossos atendimentos são estritamente particulares. Fornecemos recibo para reembolso, caso o seu plano de saúde ofereça essa modalidade.",
    },
    {
      question: "Onde a clínica fica localizada em Campos dos Goytacazes?",
      answer: "Nossa clínica está em uma localização nobre e de fácil acesso no Parque Santo Amaro: Av. Dr. Nilo Peçanha, 304 - Parque Santo Amaro, Campos dos Goytacazes - RJ. O local conta com estacionamento para sua comodidade e segurança.",
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#1A1A1A] mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="font-sans text-[#6B6560] max-w-2xl mx-auto">
            Separamos as principais perguntas dos nossos pacientes para te ajudar a entender melhor nossos serviços e filosofia de atendimento.
          </p>
        </div>

        <Accordion className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-[#FAF8F5] border border-[#D4A373]/20 rounded-xl px-6 py-2 data-[state=open]:bg-white data-[state=open]:border-[#D4A373]/50 data-[state=open]:shadow-md transition-all duration-300"
            >
              <AccordionTrigger className="font-serif font-semibold text-left text-lg text-[#1A1A1A] hover:no-underline hover:text-[#D4A373]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-sans text-[#6B6560] leading-relaxed text-base pt-2 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  );
}
