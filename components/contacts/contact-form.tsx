"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ContactFormSchema } from "@/lib/schema";
import { useState } from "react";
import { Form } from "../ui/form";
import { FormFieldType, FormInput } from "./form-input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

export function ContactForm() {
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      nome: "",
      telefone: "",
      email: "",
      mensagem: "",
    },
  });

  async function onSubmit({
    nome,
    telefone,
    email,
    mensagem,
  }: z.infer<typeof ContactFormSchema>) {
    console.log({ nome, telefone, email, mensagem });
    // const login = async () => {
    //   setLoading(true);
    //   return auth?.login(email, password);
    // };

    // await login();
    // setLoading(false);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 lg:w-1/2 lg:mx-auto"
      >
        <div className="space-y-2 text-start ">
          <FormInput
            control={form.control}
            name="nome"
            label="nome completo"
            placeholder="Digite seu nome completo"
            fieldType={FormFieldType.INPUT}
          />
          <FormInput
            control={form.control}
            name="telefone"
            label="telefone"
            placeholder="Insira seu telefone"
            fieldType={FormFieldType.INPUT_MASK}
            mask="(99) 99999-9999"
          />
          <FormInput
            control={form.control}
            name="email"
            label="email"
            placeholder="Digite seu melhor email (a resposta será enviada para este email)"
            fieldType={FormFieldType.INPUT}
          />
          <FormInput
            control={form.control}
            name="mensagem"
            label="mensagem"
            placeholder="Digite sua mensagem"
            fieldType={FormFieldType.TEXTAREA}
          />
        </div>
        <Button type="submit">Enviar Mensagem</Button>
      </form>
    </Form>
  );
}
