import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { DefaultEmail } from "@/components/emails/default-email";

export async function POST(request: NextRequest) {
  const { name, phone, email, message } = await request.json();

  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "jpsampaio@edu.unifor.br",
    subject: "Hello World",
    react: DefaultEmail({ name, phone, email, message }),
  });

  return NextResponse.json({
    name,
    phone,
    email,
    message,
  });
}
