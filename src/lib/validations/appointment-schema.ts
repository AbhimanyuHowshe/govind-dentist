import { z } from "zod";
import { services } from "@/data/services";
import { TIME_SLOTS } from "@/lib/constants";

const serviceSlugs = services.map((s) => s.slug) as [string, ...string[]];

export const appointmentSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian phone number"),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address")
    .optional()
    .or(z.literal("")),
  preferredDate: z.string().refine(
    (val) => {
      if (!val) return false;
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return new Date(val) >= today;
    },
    { message: "Please choose today or a future date" }
  ),
  preferredTime: z.enum(TIME_SLOTS, {
    error: "Please select a preferred time slot",
  }),
  service: z.enum(serviceSlugs, {
    error: "Please select a service",
  }),
  message: z.string().max(500, "Message must be under 500 characters").optional(),
});

export type AppointmentFormValues = z.infer<typeof appointmentSchema>;
