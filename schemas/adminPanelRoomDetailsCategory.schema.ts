import { z } from "zod"

export const schemaAdminPanelRoomDetailsCategory = z.object({
    categoryRoomType: z.string()
    .nonempty("Select a room type"),

    categoryBeds: z.string()
    .nonempty("Select a bed"),

    categoryGuest: z.string()
    .nonempty("Select guest"),

    categoryPrice: z.number()
    .min(0.01, "Price must be at least 0.01")
    .refine(value => Number(value.toFixed(2)) === value, { message: "Price must have at least 2 decimal points" }),
});