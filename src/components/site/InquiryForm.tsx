import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(80),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(24)
    .regex(/^[+()\-\s\d]+$/, "Please enter a valid phone number"),
  email: z.string().trim().email("Please enter a valid email address").max(120),
  unitType: z.string().min(1, "Please choose a unit type"),
  budget: z.string().min(1, "Please choose a budget range"),
  message: z.string().trim().max(600).optional(),
});

type FormValues = z.infer<typeof schema>;

const UNIT_TYPES = ["Studio", "1 Bedroom", "2 Bedroom", "3 Bedroom", "Not sure yet"];
const BUDGETS = ["Under PKR 1 crore", "PKR 1–2 crore", "PKR 2–3 crore", "PKR 3 crore +"];

const fieldBase =
  "h-11 rounded-sm border-input bg-background/95 text-sm placeholder:text-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-gold";

export function InquiryForm({ tone = "light" }: { tone?: "light" | "onImage" }) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      unitType: "",
      budget: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setStatus("idle");
    try {
      await new Promise((r) => setTimeout(r, 700));
      // eslint-disable-next-line no-console
      console.info("Inquiry submitted", values);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const labelCls = cn(
    "mb-1.5 block text-[0.7rem] tracking-[0.14em] uppercase",
    tone === "onImage" ? "text-foreground/70" : "text-muted-foreground",
  );

  const Err = ({ name }: { name: keyof FormValues }) =>
    errors[name] ? (
      <p role="alert" className="mt-1 text-xs text-destructive">
        {errors[name]?.message as string}
      </p>
    ) : null;

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 px-2 py-14 text-center">
        <CheckCircle2 className="size-10 text-gold-deep" />
        <h3 className="font-display text-2xl">Thank you — we have your details</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          A member of the Goldcrest Views team will contact you shortly to arrange your appointment.
        </p>
        <Button variant="goldOutline" size="lg" onClick={() => setStatus("idle")}>
          Send another inquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="min-w-0">
          <Label htmlFor="fullName" className={labelCls}>
            Full name
          </Label>
          <Input
            id="fullName"
            placeholder="Your name"
            autoComplete="name"
            aria-invalid={!!errors.fullName}
            className={fieldBase}
            {...register("fullName")}
          />
          <Err name="fullName" />
        </div>
        <div className="min-w-0">
          <Label htmlFor="phone" className={labelCls}>
            Phone
          </Label>
          <Input
            id="phone"
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
        <Label htmlFor="email" className={labelCls}>
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          aria-invalid={!!errors.email}
          className={fieldBase}
          {...register("email")}
        />
        <Err name="email" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="min-w-0">
          <Label htmlFor="unitType" className={labelCls}>
            Unit type
          </Label>
          <select
            id="unitType"
            aria-invalid={!!errors.unitType}
            className={cn(
              fieldBase,
              "w-full border px-3 outline-none focus-visible:ring-2 focus-visible:ring-gold",
            )}
            {...register("unitType")}
          >
            <option value="">Select a layout</option>
            {UNIT_TYPES.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
          <Err name="unitType" />
        </div>
        <div className="min-w-0">
          <Label htmlFor="budget" className={labelCls}>
            Budget range
          </Label>
          <select
            id="budget"
            aria-invalid={!!errors.budget}
            className={cn(
              fieldBase,
              "w-full border px-3 outline-none focus-visible:ring-2 focus-visible:ring-gold",
            )}
            {...register("budget")}
          >
            <option value="">Select a range</option>
            {BUDGETS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
          <Err name="budget" />
        </div>
      </div>

      <div className="min-w-0">
        <Label htmlFor="message" className={labelCls}>
          Message <span className="normal-case opacity-60">(optional)</span>
        </Label>
        <Textarea
          id="message"
          rows={3}
          placeholder="Tell us what you're looking for"
          className="resize-none rounded-sm border-input bg-background/95 text-sm focus-visible:ring-2 focus-visible:ring-gold"
          {...register("message")}
        />
        <Err name="message" />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-destructive">
          Something went wrong sending your inquiry. Please try again.
        </p>
      )}

      <Button type="submit" variant="gold" size="xl" disabled={isSubmitting} className="w-full">
        {isSubmitting && <Loader2 className="size-4 animate-spin" />}
        {isSubmitting ? "Sending" : "Request an appointment"}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        We respect your privacy. Your details are used only to respond to this inquiry.
      </p>
    </form>
  );
}
