import { z } from "zod";

// Zod schema for form validation
export const destinationOverviewSchema = z.object({
  mainBannerTitle: z
  .string()
  .nonempty("Enter the title"),

  mainBannerDescription: z
  .string()
  .nonempty("Enter the description"),

  mainBannerImage: z
  .string()
  .nonempty("Upload an image"),

  card01Title: z
  .string()
  .nonempty("Enter the title"),

  card01Description: z
    .string()
    .nonempty("Enter the description")
    .max(100, "Description should be a maximum of 100 characters"),

  card01Image: z
  .string()
  .nonempty("Upload an image"),

  card02Title: z
  .string()
  .nonempty("Enter the title"),

  card02Description: z
    .string()
    .nonempty("Enter the description")
    .max(100, "Description should be a maximum of 100 characters"),

  card02Image: z
  .string()
  .nonempty("Upload an image"),

  card03Title: z
  .string()
  .nonempty("Enter the title"),

  card03Description: z
    .string()
    .nonempty("Enter the description")
    .max(100, "Description should be a maximum of 100 characters"),

  card03Image: z
  .string()
  .nonempty("Upload an image"),

});
