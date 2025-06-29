import { z } from 'zod';

export const LoginSchema = z.object({
    email_or_phone: z.string().refine(value => {
        // Regex for email validation
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        // Regex for phone number validation (simple example, adjust as needed)
        const phoneRegex = /^\+?[1-9]\d{1,14}$/;

        return emailRegex.test(value) || phoneRegex.test(value);
    }, { message: 'Invalid email address or phone number' }),
    password: z.string().min(1, { message: 'Password is required' }),
});