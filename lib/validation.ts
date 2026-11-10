import { z } from "zod";
import { BUDGETS, EVENT_TYPES, SERVICE_OPTIONS } from "./constants";

const today = () => new Date(new Date().toDateString());

export const quoteSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email"),
  phone: z
    .string()
    .trim()
    .regex(/^[+()\d\s.-]{10,20}$/, "Please enter a valid phone number"),
  eventType: z.enum(EVENT_TYPES, { errorMap: () => ({ message: "Select an event type" }) }),
  eventDate: z
    .string()
    .min(1, "Select your event date")
    .refine((v) => !Number.isNaN(Date.parse(v)) && new Date(v + "T00:00:00") >= today(), "Date must be today or later"),
  service: z.enum(SERVICE_OPTIONS, { errorMap: () => ({ message: "Select a service" }) }),
  guests: z.coerce
    .number({ invalid_type_error: "Enter number of guests" })
    .int("Whole number please")
    .min(1, "At least 1 guest")
    .max(5000),
  budget: z.enum(BUDGETS, { errorMap: () => ({ message: "Select a budget range" }) }),
  location: z.string().trim().min(2, "Enter the event location").max(200),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  agree: z.literal(true, { errorMap: () => ({ message: "Please confirm you understand the booking notice" }) }),
  company: z.string().max(0).optional(), // honeypot - must stay empty
});

export type QuoteInput = z.infer<typeof quoteSchema>;
export type QuoteErrors = Partial<Record<keyof QuoteInput, string[]>>;
