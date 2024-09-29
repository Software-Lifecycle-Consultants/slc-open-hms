import { z } from 'zod';

export const schemaAdminPanelContentFooter = z.object({
  logo: z
    .array(z.instanceof(File))
    .length(1, { message: "Logo image is required" }) // Ensure that the array is not empty; at least one image must be present
    .refine((files: any[]) => files.every(file => file.size > 0), { message: "All files must be non-empty" }) // Validate that each file in the array is non-empty
    .refine((files: any[]) => files.every((file: { type: string; }) => ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml']
    .includes(file.type)), {message: "Only image files (jpeg, png, webp, svg ) are allowed"}) // Validate that each file is an image with the allowed file types
    .default([]), // Ensure a default value of an empty array if the field is null or undefined

     
  description: z
    .string() // The field should be a string
    .nonempty("Description is required"), // Ensure that the string is not empty and provide a custom error message if it is
 
  ownerOfCopyright: z
    .string()
    .nonempty("Owner of copyright is required"),

  footerSection1: z
    .string()    
    .nonempty("Footer Section 1 is required"), 

  footerSection1SubSection1: z
    .string()    
    .nonempty("Sub Section 1 of Footer Section 1 is required"),

  footerSection1SubSection2: z
    .string()    
    .nonempty("Sub Section 2 of Footer Section 1 is required"),

  footerSection1SubSection3: z
    .string()    
    .nonempty("Sub Section 3 of Footer Section 1 is required"),

  footerSection2: z
    .string()    
    .nonempty("Footer Section 2 is required"), 

  footerSection2SubSection1: z
    .string()    
    .nonempty("Sub Section 1 of Footer Section 2 is required"),

  footerSection2SubSection2: z
    .string()    
    .nonempty("Sub Section 2 of Footer Section 2 is required"),

  footerSection2SubSection3: z
    .string()    
    .nonempty("Sub Section 3 of Footer Section 2 is required"),

  footerSection3: z
    .string()    
    .nonempty("Footer Section 3 is required"),

  footerSection3SubSection1: z
    .string()    
    .nonempty("Sub Section 1 of Footer Section 3 is required"),

  footerSection3SubSection2: z
    .string()    
    .nonempty("Sub Section 2 of Footer Section 3 is required"),

  footerSection3SubSection3: z
    .string()    
    .nonempty("Sub Section 3 of Footer Section 3 is required"),
});
