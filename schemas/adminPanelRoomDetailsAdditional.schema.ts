import { z } from "zod"

export const schemaAdminPanelRoomDetailsAdditional = z.object({
    additionalInfoTitle: z.string()
    .min(1, "Please enter your Additional Information Title.")
    .nonempty("Enter the Additional Information Title"),
  
    additionalInfoDescription: z.string()
    .min(1, "Please enter your Additional Information Description.")
    .min(100, "The additional info description must be between 100 and 600 characters.")
    .max(600, "The additional info description must be between 100 and 600 characters."),
});