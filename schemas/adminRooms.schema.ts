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
    
    question1: z
        .string()
        .nonempty("Enter the question."),

    question2: z
        .string()
        .nonempty("Enter the question."),

    question3: z
        .string()
        .nonempty("Enter the question."),
    
    answer1: z
        .string()
        .nonempty("Enter the answer."),

    answer2: z
        .string()
        .nonempty("Enter the answer."),

    answer3: z
        .string()
        .nonempty("Enter the answer."),

    service: z
        .string()
        .nonempty("Enter services."),
});