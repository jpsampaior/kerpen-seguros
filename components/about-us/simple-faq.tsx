import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export function SimpleFAQ() {
  const questions = [
    {
      question: "Como funciona a contratação de um seguro?",
      answer:
        "A contratação começa com uma análise personalizada de suas necessidades. Nossa equipe avalia os riscos envolvidos e apresenta as melhores opções de apólices. Depois de escolher a mais adequada, coletamos os documentos necessários e encaminhamos tudo à seguradora para formalizar a contratação. Todo o processo é acompanhado de perto pela Kerpen Seguros.",
    },
    {
      question: "Quais documentos são necessários para contratar um seguro?",
      answer:
        "Os documentos variam conforme o tipo de seguro. Em geral, você precisará fornecer:\n- CPF ou CNPJ;\n- Documento de identificação (RG ou CNH);\n- Comprovante de residência ou sede da empresa;\n- Informações específicas sobre o bem ou a pessoa segurada (ex.: dados do veículo, histórico de saúde).\nNossa equipe orienta cada cliente sobre os documentos exatos para sua apólice.",
    },
    {
      question: "O que é e como funciona a cobertura de um seguro?",
      answer:
        "A cobertura define os eventos que o seguro cobre, como acidentes, roubos, danos materiais ou morte. Se algo acontecer, o cliente aciona a seguradora, que analisa o caso e, se estiver dentro das condições contratadas, realiza a indenização ou reparação.",
    },
    {
      question:
        "Qual é o prazo para a seguradora pagar a indenização em caso de sinistro?",
      answer:
        "O prazo depende do tipo de seguro e da seguradora. Geralmente, a análise é concluída em até 30 dias após a entrega de todos os documentos exigidos. Na Kerpen Seguros, acompanhamos o processo para garantir rapidez e eficiência.",
    },
    {
      question: "Qual é a diferença entre franquia e prêmio?",
      answer:
        "- Franquia: É o valor que o segurado paga em caso de sinistro, antes de a seguradora assumir os custos restantes. Aplica-se a seguros como o de automóvel.\n- Prêmio: É o valor pago pelo segurado para manter o seguro ativo, geralmente em forma de parcelas ou à vista.",
    },
    {
      question:
        "Quais são as vantagens de contratar um seguro por meio de uma corretora?",
      answer:
        "A Kerpen Seguros oferece um atendimento personalizado, apresentando as melhores opções de seguradoras e coberturas para suas necessidades. Além disso, atuamos como intermediários para resolver eventuais problemas com a seguradora, garantindo mais agilidade e segurança para você.",
    },
    {
      question: "Quais são os tipos de seguros mais indicados para empresas?",
      answer:
        "Depende do ramo de atuação da empresa. Algumas opções comuns são:\n- Seguro de transporte (para mercadorias);\n- Seguro patrimonial;\n- Seguro de responsabilidade civil;\n- Seguro de vida para colaboradores.\nNossa equipe está pronta para ajudar a identificar os seguros ideais para proteger seu negócio.",
    },
    {
      question: "Posso alterar a cobertura do seguro depois de contratar?",
      answer:
        "Sim, desde que a seguradora permita. Se suas necessidades mudarem, entre em contato com a Kerpen Seguros para que possamos verificar a possibilidade de ajustes na apólice.",
    },
    {
      question: "Por que o preço do seguro varia entre pessoas ou empresas?",
      answer:
        "O valor do seguro é calculado com base no risco que cada cliente apresenta. Fatores como idade, histórico, localização, tipo de bem segurado e coberturas desejadas influenciam no preço.",
    },
    {
      question:
        "Como a Kerpen Seguros pode ajudar em caso de dúvidas sobre a apólice?",
      answer:
        "Nossa equipe está sempre à disposição para esclarecer qualquer dúvida sobre sua apólice. Podemos explicar os detalhes das coberturas, franquias e condições gerais, além de orientá-lo sobre como utilizar os serviços incluídos no seguro. Entre em contato conosco por telefone, WhatsApp ou e-mail para suporte rápido e personalizado.",
    },
  ];

  return (
    <section className="bg-background-default pb-16">
      <Accordion type="single" className="w-3/4 mx-auto" collapsible>
        {questions.map((item, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>
              {item.answer.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
