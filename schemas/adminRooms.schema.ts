import { z } from "zod";

export const schemaAdminRooms = z.object({
    roomType: z
        .string()        
        .nonempty("Enter room type."),

    beds: z
        .string()
        .nonempty("Enter beds."),

    guests: z
        .string()
        .nonempty("Enter guests."),
    
    faqQuestion1: z
        .string()
        .nonempty("Enter the question."),

    faqQuestion2: z
        .string()
        .nonempty("Enter the question."),

    faqQuestion3: z
        .string()
        .nonempty("Enter the question."),
    
    faqAnswer1: z
        .string()
        .nonempty("Enter the answer."),

    faqAnswer2: z
        .string()
        .nonempty("Enter the answer."),

    faqAnswer3: z
        .string()
        .nonempty("Enter the answer."),

    service: z
        .string()
        .nonempty("Enter services."),
});