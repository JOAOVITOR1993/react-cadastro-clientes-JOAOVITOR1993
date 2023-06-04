import { z } from "zod" 

export const registerSchema = z.object({
    name: z.string().max(20, "Nome deve ter no máximo 20 caracteres").nonempty("Nome obrigatório"),
    email: z.string().max(100, "E-mail deve ter no máximo 100 caracteres").nonempty("E-mail obrigatório").email("E-mail inválido"),
    password: z.string().max(120, "Senha deve ter no máximo 120 caracteres").nonempty("Senha obrigatória"),
    phone: z.string().max(20, "Número de telefone deve ter no máximo 20 caracteres").nonempty("Número de telefone obrigatório"),
})

export const registerUpdateSchema = z.object({
    name: z.string().max(20, "Nome deve ter no máximo 20 caracteres"),
    email: z.string().max(100, "E-mail deve ter no máximo 100 caracteres").email("E-mail inválido"),
    phone: z.string().max(20, "Número de telefone deve ter no máximo 20 caracteres"),
})

export type iRegister = z.infer<typeof registerSchema>

export type iRegisterUpdate = z.infer<typeof registerUpdateSchema>
