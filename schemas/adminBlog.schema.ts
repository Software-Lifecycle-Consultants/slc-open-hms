import { z } from 'zod';
// Schema for Admin Blog
const MAX_FILE_SIZE = 1024 * 1024 * 5; 
const ACCEPTED_IMAGE_MIME_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
];

export const schemaAdminBlog = z.object({
    title: z
        .string()
        .nonempty("Enter the title."),

    subTitle: z
        .string()
        .nonempty("Enter the subtitle."),

    blogTag: z
        .string()
        .nonempty("Add tags."),

    bodyContent: z
        .string()
        .nonempty("Enter the description.")
        .min(5000, "Description must be at least 5000 characters."),

    coverImage: z
        .any()
        .refine((files) => {
            return files?.[0]?.size <= MAX_FILE_SIZE;
        }, `Cover Image is required.`)
        .refine(
            (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
            "Only .jpg, .jpeg, .png and .webp formats are supported."
        ),

    authorImage: z
        .any()
        .refine((files) => {
            return files?.[0]?.size <= MAX_FILE_SIZE;
        }, `Upload the Author Image.`)
        .refine(
            (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
            "Only .jpg, .jpeg, .png and .webp formats are supported."
        ),

    authorName: z
        .string()
        .nonempty("Enter author name."),

    authorDescription: z
        .string()
        .nonempty("Enter author description."),

    linkTwitter: z
        .string()
        .url("Invalid URL."),

    linkFacebook: z
        .string()
        .url("Invalid URL."),

    linkLinkedIn: z
        .string()
        .url("Invalid URL."),
});