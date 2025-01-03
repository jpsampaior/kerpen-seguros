import { Linkedin, Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import { FadeIn } from "../fade-in";
import { getInitials } from "@/lib/utils";

const partners = [
  {
    name: "Orlando Kerpen",
    role: "CEO",
    description:
      "Com mais de 55 anos de experiência no mercado de seguros, é referência no segmento de transporte. Sua expertise e visão estratégica garantem à Kerpen Seguros uma liderança sólida e inovadora, sempre comprometida em oferecer soluções personalizadas e de excelência.",
    email: "orlandokerpen@uol.com.br",
    avatar: "/orlando-kerpen.jpg",
    linkedin: "https://www.linkedin.com/in/orlando-kerpen-2aa00a1b6/",
  },
  {
    name: "Rebeka Kerpen",
    role: "Diretora Técnica e Jurídica",
    description:
      "Advogada especializada em contratos de seguros e com mais de 6 anos de experiência no setor, combina conhecimento técnico e jurídico para oferecer atendimento diferenciado aos clientes. Seu compromisso com a excelência e inovação no mercado segurador é uma de suas marcas registradas.",
    email: "rebekakerpen@kerpenseguros.com.br",
    avatar: "/rebeka-kerpen.jpg",
    linkedin: "https://www.linkedin.com/in/rebeka-kerpen/",
  },
];

export function AboutUs() {
  return (
    <section className="bg-background-default" id="sobre-nos">
      <div className="bg-secondary/30 py-14 text-center space-y-6 lg:space-y-0">
        <FadeIn>
          <h2 className="text-4xl font-bold">Quem Somos</h2>
        </FadeIn>
        <div className="space-y-5">
          {partners.map((partner, index) => (
            <FadeIn
              key={index}
              className="flex flex-col items-center gap-5 w-8/12 mx-auto lg:flex-row"
            >
              <div className="rounded-full bg-stone-600 w-fit">
                <Avatar className="w-[150px] h-[150px]">
                  <AvatarImage src={partner.avatar} />
                  <AvatarFallback>{getInitials(partner.name)}</AvatarFallback>
                </Avatar>
              </div>
              <div className="text-start space-y-2">
                <div>
                  <div className="flex flex-wrap justify-center items-baseline gap-1 lg:gap-3 text-primary lg:flex-nowrap lg:justify-start">
                    <h3 className="text-2xl font-bold">{partner.name}</h3>
                    <h4>{partner.role}</h4>
                  </div>
                  <p className="text-center lg:text-start">
                    {partner.description}
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2 lg:flex-row lg:items-start">
                  <Link
                    href={`mailto:${partner.email}`}
                    className="flex gap-2 items-center hover:text-primary transition-colors"
                  >
                    <Mail size={24} className="text-primary" />
                    <span>{partner.email}</span>
                  </Link>
                  <Link
                    href={partner.linkedin}
                    className="flex gap-2 items-center hover:text-primary transition-colors"
                  >
                    <Linkedin size={24} className="text-primary" />
                    <span>{partner.name}</span>
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
