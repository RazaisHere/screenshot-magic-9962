import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Calendar, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { submitInquiry } from "@/lib/inquiry-sheet";
import { cn } from "@/lib/utils";

const isoDate = /^\d{4}-\d{2}-\d{2}$/;

function todayIso() {
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60_000);
  return local.toISOString().slice(0, 10);
}

function isTodayOrFuture(value: string) {
  if (!isoDate.test(value)) return false;
  const [year, month, day] = value.split("-").map(Number);
  if (year === undefined || month === undefined || day === undefined) return false;
  const picked = new Date(year, month - 1, day);
  if (picked.getFullYear() !== year || picked.getMonth() !== month - 1 || picked.getDate() !== day) {
    return false;
  }
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return picked >= today;
}

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(80),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(24)
    .regex(/^[+()\-\s\d]+$/, "Please enter a valid phone number"),
  visitDate: z
    .string()
    .trim()
    .min(1, "Please choose a visit date")
    .refine(isTodayOrFuture, "Please choose today or a future date"),
  email: z.string().trim().email("Please enter a valid email address").max(120),
  cityCountry: z.string().trim().min(2, "Please enter your city or country").max(80),
  message: z.string().trim().max(600).optional(),
});

type FormValues = z.infer<typeof schema>;

export function InquiryForm({
  tone = "light",
  compact = false,
}: {
  tone?: "light" | "onImage";
  compact?: boolean;
}) {
  const fieldId = useId();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      phone: "",
      visitDate: "",
      email: "",
      cityCountry: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setStatus("idle");
    try {
      await submitInquiry(values);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const fieldBase = cn(
    "rounded-[0.45rem] font-sans text-sm font-normal tracking-normal placeholder:font-sans focus-visible:ring-2 focus-visible:ring-gold",
    tone === "onImage"
      ? "border-white/30 bg-white/[0.08] text-on-dark placeholder:text-on-dark/70"
      : "border-input bg-background/95 placeholder:text-muted-foreground/70",
    compact ? "h-9" : "h-11",
  );

  const labelCls = cn(
    "block font-sans font-medium tracking-[0.14em] uppercase",
    compact ? "mb-1 text-[0.62rem]" : "mb-1.5 text-[0.7rem]",
    tone === "onImage" ? "text-on-dark/90" : "text-muted-foreground",
  );

  const Err = ({ name }: { name: keyof FormValues }) =>
    errors[name] ? (
      <p
        id={`${fieldId}-${name}-error`}
        role="alert"
        className={cn("mt-1 text-xs", tone === "onImage" ? "text-gold-light" : "text-destructive")}
      >
        {errors[name]?.message as string}
      </p>
    ) : null;

  const onInvalid = (fieldErrors: Partial<Record<keyof FormValues, unknown>>) => {
    const first = (Object.keys(fieldErrors) as (keyof FormValues)[])[0];
    if (first) setFocus(first);
  };

  if (status === "success") {
    return (
      <div className={cn("flex flex-col items-center gap-4 px-2 text-center", compact ? "py-6" : "py-14")}>
        <CheckCircle2 className={cn("size-10", tone === "onImage" ? "text-gold-light" : "text-gold-deep")} />
        <h3 className={cn("font-display text-2xl", tone === "onImage" && "text-on-dark")}>
          Thank you — we have your details
        </h3>
        <p
          className={cn(
            "max-w-sm font-sans text-sm",
            tone === "onImage" ? "text-on-dark-muted" : "text-muted-foreground",
          )}
        >
          A member of the Goldcrest Views team will contact you shortly to arrange your appointment.
        </p>
        <Button
          variant="goldOutline"
          size="lg"
          className={tone === "onImage" ? "border-gold-light/80 text-on-dark hover:bg-on-dark/10" : ""}
          onClick={() => setStatus("idle")}
        >
          Send another inquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onInvalid)}
      noValidate
      className={compact ? "space-y-2" : "space-y-4"}
    >
      <div className={cn("grid", compact ? "grid-cols-2 gap-2" : "gap-4 sm:grid-cols-2")}>
        <div className="min-w-0">
          <Label htmlFor={`${fieldId}-fullName`} className={labelCls}>
            Full name
          </Label>
          <Input
            id={`${fieldId}-fullName`}
            placeholder="Your name"
            autoComplete="name"
            aria-invalid={!!errors.fullName}
            className={fieldBase}
            {...register("fullName")}
          />
          <Err name="fullName" />
        </div>
        <div className="min-w-0">
          <Label htmlFor={`${fieldId}-phone`} className={labelCls}>
            Phone/WhatsApp
          </Label>
          <Input
            id={`${fieldId}-phone`}
            type="tel"
            placeholder="+92 300 0000000"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            className={fieldBase}
            {...register("phone")}
          />
          <Err name="phone" />
        </div>
      </div>

      <div className="min-w-0">
        <Label htmlFor={`${fieldId}-email`} className={labelCls}>
          Email
        </Label>
        <Input
          id={`${fieldId}-email`}
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          aria-invalid={!!errors.email}
          className={cn(fieldBase, "w-full")}
          {...register("email")}
        />
        <Err name="email" />
      </div>

      <div className={cn("grid", compact ? "grid-cols-2 gap-2" : "gap-4 sm:grid-cols-2")}>
        <div className="min-w-0">
          <Label htmlFor={`${fieldId}-cityCountry`} className={labelCls}>
            City/Country
          </Label>
          <Input
            id={`${fieldId}-cityCountry`}
            placeholder="Islamabad"
            autoComplete="address-level2"
            aria-invalid={!!errors.cityCountry}
            className={fieldBase}
            {...register("cityCountry")}
          />
          <Err name="cityCountry" />
        </div>
        <div className="min-w-0">
          <Label htmlFor={`${fieldId}-visitDate`} className={labelCls}>
            Expected visit date
          </Label>
          <div className="relative">
            <Input
              id={`${fieldId}-visitDate`}
              type="date"
              required
              min={todayIso()}
              aria-invalid={!!errors.visitDate}
              aria-describedby={errors.visitDate ? `${fieldId}-visitDate-error` : undefined}
              className={cn(fieldBase, "visit-date w-full", tone === "onImage" && "visit-date-on-image")}
              {...register("visitDate")}
            />
            <Calendar
              aria-hidden
              className={cn(
                "pointer-events-none absolute top-1/2 right-2 size-4 -translate-y-1/2",
                tone === "onImage" ? "text-white" : "text-foreground/70",
              )}
            />
          </div>
          <Err name="visitDate" />
        </div>
      </div>

      <div className="min-w-0">
        <Label htmlFor={`${fieldId}-message`} className={labelCls}>
          Message
        </Label>
        <Textarea
          id={`${fieldId}-message`}
          rows={compact ? 2 : 3}
          placeholder="Tell us what you're looking for"
          className={cn(
            "resize-none rounded-[0.45rem] font-sans text-sm font-normal tracking-normal focus-visible:ring-2 focus-visible:ring-gold",
            tone === "onImage"
              ? "border-white/30 bg-white/[0.08] text-on-dark placeholder:text-on-dark/70"
              : "border-input bg-background/95",
          )}
          {...register("message")}
        />
        <Err name="message" />
      </div>

      {status === "error" && (
        <p role="alert" className={cn("text-sm", tone === "onImage" ? "text-gold-light" : "text-destructive")}>
          Something went wrong sending your inquiry. Please try again.
        </p>
      )}

      <Button
        type="submit"
        variant="gold"
        size={compact ? "default" : "xl"}
        disabled={isSubmitting}
        className="w-full rounded-[0.45rem] font-sans"
      >
        {isSubmitting && <Loader2 className="size-4 animate-spin" />}
        {isSubmitting ? "Sending" : "Send Inquiry"}
      </Button>

    
    </form>
  );
}
