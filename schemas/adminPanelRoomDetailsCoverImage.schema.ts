import { z } from "zod"

export const schemaAdminPanelRoomDetailsCoverImg = z.object({
  coverImages: z
    .array(z.instanceof(File))
    .length(1, { message: "one cover image is required" }) 
    .refine(files => files.every(file => file.size > 0), { message: "file must be non-empty" })
    .refine(files => files.every(file => ["image/jpeg", "image/png", "image/jpg", "image/webp"].includes(file.type)), 
      { message: "file must be valid image types (JPEG, PNG, JPG, WEBP)" }
    ),
});