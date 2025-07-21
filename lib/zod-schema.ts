import { z } from "zod";

export const courseLevel = ["Beginner", "Intermediate", "Advanced"] as const;

export const courseStatus = ["Draft", "Published", "Archived"] as const;

export const courseCategory = [
  "Development",
  "Business",
  "Finance",
  "IT & Software",
  "Office Productivity",
  "Personal Development",
  "Design",
  "Marketing",
  "Health & Fitness",
  "Music",
  "Photography",
  "Teaching & Academics",
] as const;

export const courseSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters" })
    .max(100, { message: "Title must be less than 100 characters" }),
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters" }),
  fileKey: z.string().min(1, { message: "File is required" }),
  price: z.number().min(1, { message: "Price must be positive number" }),
  duration: z
    .number()
    .min(1, { message: "Duration must be at least 1 hour" })
    .max(500, { message: "Duration must be at most 500 hours" }),
  level: z.enum(courseLevel, { message: "Level is required" }),
  status: z.enum(courseStatus, { message: "Status is required" }),
  category: z.enum(courseCategory, { message: "Category is required" }),
  smallDescription: z
    .string()
    .min(3, { message: "Small description must be at least 3 characters" })
    .max(200, { message: "Small description must be at most 200 characters" }),
  slug: z.string().min(3, { message: "Slug must be at least 3 characters" }),
});

export type CourseSchemaType = z.infer<typeof courseSchema>;
