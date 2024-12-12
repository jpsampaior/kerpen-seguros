import { Instagram, Linkedin, Mail, Phone, PhoneCall } from "lucide-react";
import Link from "next/link";

export function Contacts() {
  return (
    <section id="contato" className="text-center space-y-8 py-16 px-4 bg-background-default">
      <div className="space-y-1">
        <h2 className="text-4xl font-bold">Estamos aqui para você</h2>
        <p className="lg:w-1/2 lg:mx-auto">
          Entre em contato para tirar suas dúvidas, solicitar cotações ou
          conhecer mais sobre nossos serviços. Nossa equipe está sempre pronta
          para oferecer o melhor atendimento.
        </p>
      </div>
      <div className="flex justify-center gap-5">
        <Link
          href={"https://www.instagram.com/kerpenseguros/"}
          className="bg-red-300 rounded-full p-4 hover:bg-red-300/85 transition-colors"
        >
          <Instagram size={32} strokeWidth="2" className="text-red-500" />
        </Link>
        <div className="bg-yellow-100 flex rounded-full">
          <Link
            href={"tel:+5585997646804"}
            className="bg-primary/50 rounded-full p-4 hover:bg-primary/70 transition-colors"
          >
            <Phone size={32} strokeWidth="2" className="text-primary" />
          </Link>
        </div>
        <Link
          href={"mailto:comercial@kerpenseguros.com.br"}
          className="bg-blue-300 rounded-full p-4 hover:bg-blue-300/85 transition-colors"
        >
          <Mail size={32} strokeWidth="2" className="text-blue-500" />
        </Link>
      </div>
    </section>
  );
}
