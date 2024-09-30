import { z } from "zod"

export const schemaAdminPanelRoomDetailsGallery = z.object({
    gallery: z.array(z.instanceof(File))
    .min(1, { message: "At least one image is required" })
    .max(5, { message: "No more than 5 images are allowed" }) 
    .refine(files => files.every(file => file.size > 0), { message: "files must be non-empty" })
    .refine((files) => files.every((file) => ["image/jpeg", "image/png", "image/jpg", "image/webp"].includes(file.type)),
     {message: "All files must be valid image types (JPEG, PNG, JPG, WEBP)",}),
});