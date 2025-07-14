import { z } from 'zod';

export const OTPLoginSchema = z.object({
    email_or_phone: z.string().refine(value => {
        // Regex for email validation
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        // Regex for phone number validation (simple example, adjust as needed)
        const phoneRegex = /^\+?[1-9]\d{1,14}$/;

        return emailRegex.test(value) || phoneRegex.test(value);
    }, { message: 'Invalid email address or phone number' }),
    type: z.string().refine(value => {
        return value === 'email' || value === 'phone';
    }, { message: 'Type must be either email or phone' }),
    via: z.string().optional(),
});

export const OTPVerifySchema = z.object({
    email_or_phone: z.string(),
    otp: z.string().min(4, { message: 'OTP must be at least 4 characters' }),
    type: z.string(),
});