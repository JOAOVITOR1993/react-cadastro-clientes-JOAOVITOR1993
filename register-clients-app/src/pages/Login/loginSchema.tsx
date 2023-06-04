import { z } from "zod" 

export const loginSchema = z.object({
    email: z.string().max(100, "E-mail deve ter no máximo 100 caracteres").nonempty("E-mail obrigatório").email("E-mail inválido"),
    password: z.string().max(120, "Senha deve ter no máximo 120 caracteres").nonempty("Senha obrigatória")
})

export const LoginUserSchemaResponse = loginSchema.extend({
    id: z.string(),
    name: z.string(),
    phone: z.string(),
    updatedAt: z.string(),
    created_at: z.string(),
    deletedAt: z.string(),
}).omit({ password: true })

export type iLogin = z.infer<typeof loginSchema>

export type ILoginUserSchemaResponse = z.infer<typeof LoginUserSchemaResponse>