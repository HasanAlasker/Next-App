import {email, z} from 'zod'

export const schema = z.object({
    name: z.string().min(2).max(24),
    email: z.email(),
    followers: z.number().min(0)
})