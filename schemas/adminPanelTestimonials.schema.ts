import { z } from "zod";

export const schemaAdminPanelTestimonials = z.object({
    profileImage: z
        .array(z.instanceof(File))
        .length(1, { message: "Profile image is required" }) 
        .refine(files => files.every(file => file.size > 0), { message: "file must be non-empty" })
        .refine(files => files.every(file => ["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(file.type)), 
        { message: "All files must be valid image types (JPEG, JPG, PNG, WEBP)" }),
  
    name: z
        .string()
        .nonempty("Enter the name."),
    
    description: z
        .string()
        .nonempty("Enter the description."),
});