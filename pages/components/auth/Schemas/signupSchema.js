import { z } from 'zod';


export const SignUpSchema = z.object({
    'first_name': z.string().min(1, { message: 'First name is required' }),
    'last_name': z.string().min(1, { message: 'Last name is required' }),
    phone_number: z.string().min(1, { message: 'phone_number number is required' }),
    email: z.string().email({ message: 'Invalid email address' }),
    'password': z.string().min(6, { message: 'Password must be at least 6 characters' }),
});