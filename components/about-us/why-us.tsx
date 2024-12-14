import { Award, BriefcaseBusiness, Handshake } from "lucide-react";
import { FadeIn } from "../fade-in";

const info = [
  {
    icon: <Award size={60} strokeWidth="1" className="mx-auto" />,
    title: "Diferencial",
    description:
      "Somos especialistas em transporte, oferecendo consultoria personalizada em gerenciamento de risco. Contamos com parcerias tecnológicas globais e atuamos lado a lado com as principais seguradoras, garantindo suporte completo e eficiente na regulação e liquidação de sinistros.",
  },
  {
    icon: <Handshake size={60} strokeWidth="1" className="mx-auto" />,
    title: "Valores",
    description:
      "Nossa essência está na Cooperação, Proatividade e Excelência Técnica. Trabalhamos para construir relações sólidas e duradouras com nossos clientes, sempre priorizando a confiança e o compromisso mútuo.",
  },
  {
    icon: <BriefcaseBusiness size={60} strokeWidth="1" className="mx-auto" />,
    title: "Experiência",
    description:
      "Com a liderança de um CEO com mais de 55 anos de mercado e uma Diretora Técnica e Jurídica especialista em contratos de seguro, garantimos expertise e segurança em cada etapa do processo, sempre focados nas melhores soluções para nossos clientes.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-background-default">
      <FadeIn className="text-center space-y-8 py-16 px-4 ">
        <div className="space-y-1">
          <h2 className="text-4xl font-bold">Proteção Personalizada</h2>
          <p className="lg:w-1/2 lg:mx-auto">
            Preparados para atuar em todas as fases do seu negócio, desde o
            gerenciamento de risco até a implementação e o acompanhamento do
            programa de seguros, com a estratégia de simplificar o dia a dia dos
            clientes, otimizando e assegurando suas operações
          </p>
        </div>
        <div className="flex flex-col gap-8 text-center justify-center lg:flex-row">
          {info.map((item, index) => (
            <div
              key={index}
              className="bg-secondary rounded-lg lg:w-1/4 p-7 space-y-4"
            >
              <div className="text-primary space-y-2">
                {item.icon}
                <hr className="border-primary w-1/6 mx-auto" />
                <h3 className="text-2xl font-bold">{item.title}</h3>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
