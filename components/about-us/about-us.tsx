import { Linkedin, Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";

const partners = [
  {
    name: "Orlando Kerpen",
    role: "CEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies ipsum semper ullamcorper euismod. Aenean volutpat, mauris ut iaculis lacinia, dui elit aliquet arcu, non fringilla massa dolor dapibus velit.",
    email: "orlandokerpen@uol.com.br",
    linkedin: "https://www.linkedin.com/in/orlando-kerpen-2aa00a1b6/",
  },
  {
    name: "Rebeka Kerpen",
    role: "Diretora",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies ipsum semper ullamcorper euismod. Aenean volutpat, mauris ut iaculis lacinia, dui elit aliquet arcu, non fringilla massa dolor dapibus velit.",
    email: "rebekakerpen@kerpenseguros.com.br",
    linkedin: "https://www.linkedin.com/in/rebeka-kerpen/",
  },
];

export function AboutUs() {
  return (
    <section className="bg-secondary/30 py-14 text-center">
      <h2 className="text-4xl font-bold">Quem Somos</h2>
      <div className="space-y-5">
        {partners.map((partner, index) => (
          <div key={index} className="flex items-center gap-5 w-8/12 mx-auto">
            <div className="rounded-full bg-stone-600 w-fit">
              <Avatar className="w-[150px] h-[150px]">
                <AvatarImage src="/avatar-placeholder.png" />
                <AvatarFallback>OK</AvatarFallback>
              </Avatar>
            </div>
            <div className="text-start">
              <div className="flex items-baseline gap-3 text-primary">
                <h3 className="text-2xl font-bold">{partner.name}</h3>
                <h4>{partner.role}</h4>
              </div>
              <div>{partner.description}</div>
              <div className="flex gap-2">
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
          </div>
        ))}
      </div>
    </section>
  );
}