import { z } from "zod"

export const createContactSchema = z.object({
    name: z.string().max(20, "Nome deve ter no máximo 20 caracteres").nonempty("Nome obrigatório"),
    email: z.string().max(100, "E-mail deve ter no máximo 100 caracteres").nonempty("E-mail obrigatório").email("E-mail inválido"),
    phone: z.string().max(20, "Número de telefone deve ter no máximo 20 caracteres").nonempty("Número de telefone obrigatório"),
})

export const updateContactSchema = z.object({
    name: z.string().max(20, "Nome deve ter no máximo 20 caracteres"),
    email: z.string().max(100, "E-mail deve ter no máximo 100 caracteres").email("E-mail inválido"),
    phone: z.string().max(20, "Número de telefone deve ter no máximo 20 caracteres"),
})

export const returnContactSchema = createContactSchema.extend({
    id: z.number(),
    created_at: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable(),
    client: z.object({
        id: z.number(),
        name: z.string().max(20),
    }).or(z.number()).optional(),
})

export const returnAllContactsSchema = z.array(returnContactSchema)

export type iCreateContact = z.infer<typeof createContactSchema>
export type iUpdateContact = z.infer<typeof updateContactSchema>
export type iReturnContact = z.infer<typeof returnContactSchema>
export type iAllContacts = z.infer<typeof returnAllContactsSchema>