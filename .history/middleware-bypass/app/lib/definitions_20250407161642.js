import {z} from 'zod'

export const SignupFormSchema = z.object({
    name: z.string().min(2, {message: 'Name must be at least 2 characters long.'}).trim(),
})