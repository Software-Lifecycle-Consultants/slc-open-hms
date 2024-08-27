import { z } from "zod";

// Zod schema for form validation
export const heroBannerSchema = z.object({
    bannerTitle: z
    .string()
    .nonempty("Enter the title"),

    bannerSubTitle: z
    .string()
    .nonempty("Enter the sub title"),

    bannerDescription: z
    .string()
    .nonempty("Enter the description"),

    bannerButton1: z
    .string()
    .nonempty("Enter button name"),

    bannerButton2: z
    .string()
    .nonempty("Enter button name"),
    
  });