import { AboutUs } from "@/components/about-us/about-us";
import { WhyUs } from "@/components/about-us/why-us";
import { Footer } from "@/components/bottom/footer";
import { Contacts } from "@/components/contacts/contacts";
import { Services } from "@/components/services/services";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="flex items-center justify-center flex-col gap-8 text-center p-5 min-h-[95vh]">
        <Image
          src="/logo-kerpen-white.png"
          alt="logo-kerpen"
          width={200}
          height={200}
        />
        <div className="space-y-5">
          <div className="space-y-3">
            <h2 className="text-5xl font-extrabold">A parceria perfeita!</h2>
            <p className="mx-auto lg:w-1/2">
              Atendimento especializado e personalizado em seguros, com foco no
              acompanhamento integral e em tempo real no processo de regulação
              de sinistros.
            </p>
          </div>
          <Button className="rounded-full">
            Falar com especialista
            <ArrowRight />
          </Button>
        </div>
      </section>
      <Services />
      <WhyUs />
      <AboutUs />
      <Contacts />
      <Footer />
    </main>
  );
}
