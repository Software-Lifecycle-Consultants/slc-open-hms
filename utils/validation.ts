// src/utils/validation.ts
import { z } from 'zod';

/**
 * Validates form data against a given Zod schema.
 *
 * @template T - The Zod schema type.
 * @param {T} schema - The schema defining the structure and validation rules.
 * @param {z.infer<T>} formData - The data to validate.
 * @returns {
*   errors: Record<string, string[]> | null,
*   data: z.infer<T> | null
* } - Returns validation errors if any, otherwise the validated data.
*/

export const validateFormData = <T extends z.ZodTypeAny>(
  schema: T,
  formData: z.infer<T>
) => {
  const validation = schema.safeParse(formData);
  
  if (!validation.success) {
    const errors = validation.error.flatten().fieldErrors;
    return { errors, data: null }; // Return errors along with null data
  }
  
  return { errors: null, data: validation.data }; // Return data when validation is successful
};
