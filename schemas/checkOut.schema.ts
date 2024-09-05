import { z } from 'zod';

// Validation schema for form data
export const schema = z.object({
    email: z
        .string()
        .email({ message: 'Invalid email address' }),
    firstName: z
        .string()
        .min(1, { message: 'First name is required' }),
    lastName: z
        .string()
        .min(1, { message: 'Last name is required' }),
    phoneNumber: z
        .string()
        .min(10, { message: 'Phone number must be at least 10 digits' }),
    passportId: z
        .string()
        .min(1, { message: 'Passport ID is required' }),
    address: z
        .string()
        .min(1, { message: 'Address is required' }),
});