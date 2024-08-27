import { z } from "zod";

export const schemaAdminDestinationCards = z.object({
    videoTitle: z
        .string()
        .nonempty("Enter the title."),
    
    videoDescription: z
        .string()
        .nonempty("Enter the description."),

    videoUrl1: z
        .string()
        .nonempty("Invalid URL.")
        .url("Please enter a valid URL."),

    cityName: z
        .string()
        .nonempty("Enter city."),

    description: z
        .string()
        .nonempty("Enter the description."),

    price: z
        .string()
        .nonempty("Price is required.")
        .regex(/^\d+(\.\d{1,2})?$/, "Please enter a valid price."),

    customTag: z
        .string()
        .nonempty("Enter custom tag.")
        .max(8, "Please enter a tag with 8 characters or less"),

    buttonName: z
        .string()
        .nonempty("Insert button name."),
});