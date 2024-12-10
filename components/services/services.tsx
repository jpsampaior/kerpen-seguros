import { Building2, HeartPulse, Truck } from "lucide-react";

const services = [
  {
    icon: (
      <HeartPulse size={95} strokeWidth="1" className="text-primary mx-auto" />
    ),
    title: "Seguros de Vida e Saúde",
    description:
      "Oferecemos planos personalizados e ajustados para atender às necessidades específicas de nossos clientes.",
  },
  {
    icon: <Truck size={95} strokeWidth="1" className="text-primary mx-auto" />,
    title: "Seguros de Transporte",
    description:
      "Garantimos uma regulação ágil de sinistros, acompanhamento integral e parcerias estratégicas com comissários de avarias.",
  },
  {
    icon: (
      <Building2 size={95} strokeWidth="1" className="text-primary mx-auto" />
    ),
    title: "Seguros Patrimoniais e Empresariais",
    description:
      "Proteção completa para seu negócio, com soluções para garantir a segurança e o crescimento sustentável de sua empresa.",
  },
];

export function Services() {
  return (
    <section className="bg-secondary">
      <div className="flex flex-col  px-4 py-14 text-center justify-center gap-10 lg:flex-row">
        {services.map((service, index) => (
          <div key={index} className="lg:w-1/4">
            {service.icon}
            <div>
              <h5 className="font-bold text-lg">{service.title}</h5>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
