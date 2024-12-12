import { Mail, Map, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const contact = [
  {
    title: "Telefone",
    description: "+55 (85) 99764-6804",
    icon: <Phone />,
    href: "tel:+5585997646804",
  },
  {
    title: "Email",
    description: "comercial@kerpenseguros.com.br",
    icon: <Mail />,
    href: "mailto:comercial@kerpenseguros.com.br",
  },
];

export function FooterContent() {
  return (
    <div className="py-10 bg-background-footer">
      <div className="flex flex-col justify-between mx-auto w-9/12 space-y-6 text-center lg:flex-row lg:text-start">
        <div className="flex flex-col justify-center space-y-2 lg:w-1/2">
          <h5 className="font-bold text-xl">Kerpen Seguros</h5>
          <p className="text-sm">
            Há mais de 20 anos, oferecendo soluções de seguros especializadas no
            ramo de transportes, pessoas, bens, meio ambiente e responsabilidade
            civil. Nosso compromisso é garantir a segurança dos seus negócios e
            do seu patrimônio, com a confiança e experiência que você merece.
          </p>
        </div>
        <div className="space-y-2">
          <h5 className="font-bold text-xl">Contato</h5>
          <ul className="space-y-2 text-sm">
            {contact.map((item) => (
              <li key={item.title} className="w-fit mx-auto lg:m-0">
                <Link href={item.href} className="flex items-center gap-2">
                  {item.icon}
                  <span>{item.description}</span>
                </Link>
              </li>
            ))}
            <li className="flex items-center gap-2 w-fit mx-auto lg:m-0">
              <MapPin />
              <span>Fortaleza, CE - São Paulo, SP</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
