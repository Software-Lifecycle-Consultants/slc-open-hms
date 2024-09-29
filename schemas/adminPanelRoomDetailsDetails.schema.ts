import { z } from "zod";

export const schemaAdminPanelRoomDetails = z.object({
    title: z.string()
    .min(1, "Please enter your Title.")
    .min(15, "The Title must be between 15 and 50 characters.")
    .max(50, "The Title must be between 15 and 50 characters."),

    subTitle: z.string()
    .min(1, "*Required")
    .nonempty("Enter the sub title"),

    descriptionTitle: z.string()
    .min(1, "Please enter your Description Title.")
    .min(20, "The description title must be between 20 and 100 characters.")
    .max(100, "The description title must be between 20 and 100 characters."),
  
    description: z.string()
    .min(1, "*Required")
    .nonempty("Enter the description"),
});