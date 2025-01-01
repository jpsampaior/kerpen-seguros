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
        <Body
          style={{
            backgroundColor: "#F9FAFB",
            color: "#000000",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <Container>
            <header>
              <Heading
                as="h1"
                style={{
                  fontSize: "24px",
                  color: "#000000",
                  marginBottom: "8px",
                }}
              >
                Formulário de contato Kerpen Seguros
              </Heading>
              <Text style={{ fontSize: "14px", color: "#000000" }}>
                Email enviado automaticamente pelo cliente por meio do
                formulário de contato no site{" "}
                <Link
                  href="https://kerpenseguros.com.br"
                  style={{ color: "#F0C05D", textDecoration: "underline" }}
                >
                  kerpenseguros.com.br
                </Link>
              </Text>
            </header>
            <Hr style={{ margin: "16px 0", borderColor: "#CCC" }} />
            <main>
              <Heading
                as="h2"
                style={{
                  fontSize: "18px",
                  color: "#000000",
                  marginBottom: "8px",
                }}
              >
                Informações do Cliente
              </Heading>
              <Text style={{ fontSize: "14px", color: "#000000" }}>
                <b style={{ color: "#F0C05D" }}>Nome:</b> {name}
              </Text>
              <Text style={{ fontSize: "14px", color: "#000000" }}>
                <b style={{ color: "#F0C05D" }}>Telefone:</b> {phone}
              </Text>
              <Text style={{ fontSize: "14px", color: "#000000" }}>
                <b style={{ color: "#F0C05D" }}>Email:</b> {email}
              </Text>
              <Text style={{ fontSize: "14px", color: "#000000" }}>
                <b style={{ color: "#F0C05D" }}>Data e hora do envio:</b>{" "}
                {dateTime}
              </Text>
              <Text style={{ fontSize: "14px", color: "#000000" }}>
                <b style={{ color: "#F0C05D" }}>Mensagem:</b> {message}
              </Text>
            </main>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}
