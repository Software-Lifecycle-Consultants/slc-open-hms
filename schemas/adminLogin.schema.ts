import { z } from "zod";

/**
 * Zod schema for validating login form data.
 * 
 * This schema defines the validation rules for a login form with two fields: `email` and `password`.
 * 
 * - `email`: A string that must not be empty and must be a valid email address.
 *   - Minimum length: 1 character (cannot be empty).
 *   - Must be a valid email format.
 *   - Error messages:
 *     - "Username should not be empty" if the email field is empty.
 *     - "Username must be a valid email" if the email is not in a valid format.
 * 
 * - `password`: A string that must not be empty and must be at least 6 characters long.
 *   - Minimum length: 1 character (cannot be empty).
 *   - Minimum length: 6 characters.
 *   - Error messages:
 *     - "Password should not be empty" if the password field is empty.
 *     - "Password must be more than 6 characters" if the password is less than 6 characters.
 */

export const schemaLogin  = z.object({
    email: z
      .string()
      .min(1, "Please enter your email address.")
      .email("Please enter a valid email address."),
  
    password: z
      .string()
      .min(1, "Please enter your password.")
      .min(6, "Your password must be at least 6 characters long."),
  });
  