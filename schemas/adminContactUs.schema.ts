import { z } from 'zod';

// Zod schema for form validation
export const adminContactUsSchema = z.object({
  title: z
  .string()
  .min(10, "The Title must be between 10 and 100 characters.")
  .max(100),

  description: z
  .string()
  .nonempty("Enter the description"),
  
  email: z
  .string()
  .email("Invalid email address"),

  phoneNumber: z
  .string()
  .min(7, "The Telephone Number is not a valid phone number.")
  .max(15),

  addressLine1: z
  .string()
  .nonempty("Address is required"),

  addressLine2: z
  .string()
  .nonempty("Address is required"),

  city: z
  .string()
  .nonempty("City is required"),

  stateProvince: z
  .string()
  .nonempty("State/Province is required"),

  zipCode: z
  .string()
  .min(5, "Zip code is required")
  .nonempty("Zip code is required"),

  country: z
  .string()
  .nonempty("Country is required"),
  
});