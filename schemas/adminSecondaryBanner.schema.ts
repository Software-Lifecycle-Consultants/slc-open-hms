import { z } from "zod";

export const schemaAdminSecondaryBanner = z.object({
    bannerTitle: z
        .string()
        .nonempty('Enter the title.'),

    bannerDescription: z
        .string()
        .nonempty('Enter the description.'),

    buttonName: z
        .string()
        .nonempty('Enter the button name.'),

    videoUrl: z
        .string()
        .url('Enter a valid URL.'),
});