import { z } from "zod"

export const schemaAdminPanelRoomDetailsGallery = z.object({
    gallery: z.array(z.instanceof(File))
    .refine((files) => files.every((file) => file.type.startsWith("image/")), {message: "All files must be images.",}),
});