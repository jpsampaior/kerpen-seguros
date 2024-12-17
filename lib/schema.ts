import { z } from "zod";

export const ContactFormSchema = z.object({
  nome: z
    .string()
    .min(1, "Campo obrigatório") 
    .min(3, "Nome muito curto"), 

  telefone: z
    .string()
    .min(1, "Campo obrigatório") 
    .regex(/^\(\d{2}\) \d{5}-\d{4}$/, "Número de telefone inválido"), 

  email: z
    .string()
    .min(1, "Campo obrigatório") 
    .email("Email inválido"), 

  mensagem: z
    .string()
    .min(1, "Campo obrigatório") 
    .min(5, "Mensagem muito curta"), 
});
