import { z } from "zod"

export const schemaAdminPanelRoomDetailsServiceAddons = z.object({
    serviceAddonTitle: z.string()
    .min(1, "Please enter your Service Addon Title.")
    .nonempty("Enter the Service Addon Title"),
  
    serviceAddonDescription: z.string()
    .min(1, "Please enter your Service Addon Description.")
    .nonempty("Enter the Service Addon Description"), 
});