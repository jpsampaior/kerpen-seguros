import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import ClientContactFormEmail from "@/emails/client-contact-form";

export async function POST(request: NextRequest) {
  try {
    const { name, phone, email, message } = await request.json();

    const missingFields = ["name", "phone", "email", "message"].filter(
      (field) => !eval(field) || typeof eval(field) !== "string"
    );

    if (missingFields.length) {
      throw new Error(
        `Os seguintes campos são obrigatórios: ${missingFields.join(", ")}`
      );
    }

    if (!process.env.RESEND_API_KEY) {
      throw new Error("A chave da API não está configurada.");
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "jpsampaio@edu.unifor.br",
      subject: `Formulário de Contato Kerpen Seguros`,
      react: ClientContactFormEmail({ name, phone, email, message }),
    });

    return NextResponse.json({
      success: true,
      message: "Email enviado com sucesso.",
      data: { name, phone, email, message },
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 400 }
    );
  }
}
