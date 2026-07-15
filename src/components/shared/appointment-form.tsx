"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

import {
  appointmentSchema,
  type AppointmentFormValues,
} from "@/lib/validations/appointment-schema";
import { TIME_SLOTS } from "@/lib/constants";
import { services } from "@/data/services";

export function AppointmentForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      preferredDate: "",
      message: "",
    },
  });

  async function onSubmit() {
    setStatus("submitting");
    // Simulated submission — no backend is wired up yet. Replace with a real
    // API call / email integration when one is available.
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus("success");
    toast.success("Appointment request received!");
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-background p-8 text-center">
        <CheckCircle2 className="size-12 text-brand-emerald" aria-hidden="true" />
        <h3 className="font-heading text-xl font-semibold text-brand-navy">
          Thank You!
        </h3>
        <p className="max-w-sm text-muted-foreground">
          We&apos;ve received your appointment request and will call you
          shortly to confirm your visit.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            reset();
            setStatus("idle");
          }}
        >
          Book Another Appointment
        </Button>
      </div>
    );
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      aria-labelledby="appointment-form-heading"
      noValidate
      className="flex flex-col gap-6 rounded-xl border border-border bg-background p-6 sm:p-8"
    >
      <h2
        id="appointment-form-heading"
        className="font-heading text-xl font-semibold text-brand-navy"
      >
        Book an Appointment
      </h2>

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="name">Full Name</FieldLabel>
          <Input
            id="name"
            autoComplete="name"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          <FieldError errors={[errors.name]} />
        </Field>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
            <Input
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder="9876543210"
              aria-invalid={!!errors.phone}
              {...register("phone")}
            />
            <FieldError errors={[errors.phone]} />
          </Field>

          <Field>
            <FieldLabel htmlFor="email">Email (optional)</FieldLabel>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              aria-invalid={!!errors.email}
              {...register("email")}
            />
            <FieldError errors={[errors.email]} />
          </Field>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="preferredDate">Preferred Date</FieldLabel>
            <Input
              id="preferredDate"
              type="date"
              min={today}
              aria-invalid={!!errors.preferredDate}
              {...register("preferredDate")}
            />
            <FieldError errors={[errors.preferredDate]} />
          </Field>

          <Field>
            <FieldLabel htmlFor="preferredTime">Preferred Time</FieldLabel>
            <Controller
              control={control}
              name="preferredTime"
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger id="preferredTime" className="w-full">
                    <SelectValue placeholder="Select a time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {TIME_SLOTS.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            <FieldError errors={[errors.preferredTime]} />
          </Field>
        </div>

        <Field>
          <FieldLabel htmlFor="service">Service</FieldLabel>
          <Controller
            control={control}
            name="service"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="service" className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.slug} value={service.slug}>
                      {service.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <FieldError errors={[errors.service]} />
        </Field>

        <Field>
          <FieldLabel htmlFor="message">Message (optional)</FieldLabel>
          <Textarea
            id="message"
            rows={4}
            aria-invalid={!!errors.message}
            {...register("message")}
          />
          <FieldError errors={[errors.message]} />
        </Field>
      </FieldGroup>

      <Button type="submit" size="lg" disabled={status === "submitting"}>
        {status === "submitting" && (
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
        )}
        {status === "submitting" ? "Submitting..." : "Request Appointment"}
      </Button>
    </form>
  );
}
