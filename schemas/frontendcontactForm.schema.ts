import { z } from 'zod';

// Zod schema for form validation
export const contactFormSchema = z.object({
  firstName: z
  .string()
  .nonempty("First name is required"),

  lastName: z
  .string()
  .nonempty("Last name is required"),

  email: z
  .string()
  .email("Invalid email address"),

  phone: z
    .string()
    .min(7,"The Telephone Number is not a valid ")
    .max(15,"The Telephone Number is not a valid "),

  country: z
  .string()
  .nonempty("Select your country"),

  subject: z
  .string()
  .nonempty("Enter the subject"),

  message: z
  .string()
  .nonempty("Message is required"),

});


