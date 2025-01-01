import {
  Html,
  Tailwind,
  Body,
  Text,
  Link,
  Hr,
  Heading,
  Container,
} from "@react-email/components";
import * as React from "react";

type DefaultEmailProps = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export default function ClientContactFormEmail({
  name,
  phone,
  email,
  message,
}: DefaultEmailProps) {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = currentDate.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const dateTime = `${formattedDate} às ${formattedTime}`;

  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              primary: "#F0C05D",
              secondary: "#2B3864",
              tertiary: "#6C718E",
              lightBackground: "#F9FAFB",
              darkBackground: "#20201F",
              lightText: "#000000",
              darkText: "#FFFFFF",
            },
          },
        },
      }}
    >
      <Html>
        <Body className="bg-darkBackground text-stone-300 font-sans">
          <Container className="p-4 max-w-2xl mx-auto">
            <header>
              <Heading className="text-2xl font-bold text-stone-300 mb-2">
                Formulário de contato Kerpen Seguros
              </Heading>
              <Text className="text-sm text-stone-300">
                Email enviado automaticamente pelo cliente por meio do
                formulário de contato no site{" "}
                <Link
                  href="https://kerpenseguros.com.br"
                  className="text-primary underline"
                >
                  kerpenseguros.com.br
                </Link>
              </Text>
            </header>
            <Hr className="my-4 border-t border-gray-300" />
            <main>
              <Heading className="text-lg font-semibold text-stone-300 mb-2">
                Informações do Cliente
              </Heading>
              <Text className="text-sm text-stone-300">
                <span className="text-primary font-semibold">Nome:</span> {name}
              </Text>
              <Text className="text-sm text-stone-300">
                <span className="text-primary font-semibold">Telefone:</span>{" "}
                {phone}
              </Text>
              <Text className="text-sm text-stone-300">
                <span className="text-primary font-semibold">Email:</span>{" "}
                {email}
              </Text>
              <Text className="text-sm text-stone-300">
                <span className="text-primary font-semibold">
                  Data e hora do envio:
                </span>{" "}
                {dateTime}
              </Text>
              <Text className="text-sm text-stone-300">
                <span className="text-primary font-semibold">Mensagem:</span>{" "}
                {message}
              </Text>
            </main>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}
