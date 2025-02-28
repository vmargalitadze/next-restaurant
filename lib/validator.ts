import { z } from "zod";

// Define the schema
export const bookingSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  phone: z.string().min(9, "Phone number must be at least 9 digits"),
  persons: z.number().int().min(1, "At least 1 person required"),
  date: z.string().min(1, "choose correct date"),
  
  time: z.string().min(1, "Time is required"),
});

export const signInFormSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});