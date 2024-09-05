import { z } from 'zod';

export const schemaAdminPanelLogoCarousel = z.object({
    logos: z
      .array(z.instanceof(File))
      .min(1, { message: "At least one logo image is required" }) // Ensure that at least one image must be present
      .refine((files: File[]) => files.every(file => file.size > 0), { message: "All files must be non-empty" }) // Validate that each file in the array is non-empty
      .refine((files: File[]) => files.every(file => ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml'].includes(file.type)), 
      { message: "Only image files (jpeg, png, webp, svg) are allowed" }) // Validate that each file is an image with the allowed file types
      .default([]), // Ensure a default value of an empty array if the field is null or undefined
  });