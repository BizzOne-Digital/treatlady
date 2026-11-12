"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { BUDGETS, EVENT_TYPES, SERVICE_OPTIONS } from "@/lib/constants";
import { quoteSchema, type QuoteErrors } from "@/lib/validation";

type Status = "idle" | "loading" | "success" | "error";

const input =
  "w-full rounded-xl border border-pale bg-ivory px-4 py-3 text-[15px] text-ink placeholder:text-ink/35 transition focus:border-rose focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose/25 aria-[invalid=true]:border-red-400";

function Field({
  id,
  label,
  error,
  children,
  className = "",
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<QuoteErrors>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = { ...Object.fromEntries(fd.entries()), agree: fd.get("agree") === "on" };

    const check = quoteSchema.safeParse(payload);
    if (!check.success) {
      setErrors(check.error.flatten().fieldErrors as QuoteErrors);
      setStatus("error");
      setMessage("Please check the highlighted fields.");
      const first = Object.keys(check.error.flatten().fieldErrors)[0];
      if (first) form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setErrors({});
    setStatus("loading");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setErrors(data.errors ?? {});
        setStatus("error");
        setMessage(data.message ?? "Something went wrong.");
        return;
      }
      setStatus("success");
      setMessage(data.message);
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again or call us directly.");
    }
  }

  const err = (k: keyof QuoteErrors) => errors[k]?.[0];
  const aria = (k: keyof QuoteErrors) => ({
    "aria-invalid": !!err(k),
    "aria-describedby": err(k) ? `${k}-error` : undefined,
  });

  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-card ring-1 ring-pale/70 sm:p-10">
      <h2 className="font-serif text-3xl text-ink">Request a Quote</h2>
      <p className="mt-2 text-sm text-muted">Fields marked with * are required. We usually reply within one business day.</p>

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="ok"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 rounded-2xl bg-blush p-8 text-center"
            role="status"
          >
            <CheckCircle2 size={44} strokeWidth={1.25} className="mx-auto text-copper" aria-hidden="true" />
            <h3 className="mt-4 font-serif text-2xl text-ink">Thank you!</h3>
            <p className="mt-2 text-muted">{message} Leticia will be in touch shortly to talk through your event.</p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 rounded-full border border-ink/70 px-6 py-2.5 text-sm font-semibold transition hover:bg-ink hover:text-white"
            >
              Send another request
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={onSubmit} noValidate className="mt-8 grid gap-5 sm:grid-cols-2" initial={false}>
            <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

            <Field id="fullName" label="Full Name *" error={err("fullName")}>
              <input id="fullName" name="fullName" autoComplete="name" className={input} {...aria("fullName")} />
            </Field>
            <Field id="email" label="Email *" error={err("email")}>
              <input id="email" name="email" type="email" autoComplete="email" className={input} {...aria("email")} />
            </Field>
            <Field id="phone" label="Phone *" error={err("phone")}>
              <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="559-000-0000" className={input} {...aria("phone")} />
            </Field>
            <Field id="eventType" label="Event Type *" error={err("eventType")}>
              <select id="eventType" name="eventType" defaultValue="" className={input} {...aria("eventType")}>
                <option value="" disabled>
                  Select event type
                </option>
                {EVENT_TYPES.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </Field>
            <Field id="eventDate" label="Event Date *" error={err("eventDate")}>
              <input id="eventDate" name="eventDate" type="date" className={input} {...aria("eventDate")} />
            </Field>
            <Field id="service" label="Service Required *" error={err("service")}>
              <select id="service" name="service" defaultValue="" className={input} {...aria("service")}>
                <option value="" disabled>
                  Select a service
                </option>
                {SERVICE_OPTIONS.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </Field>
            <Field id="guests" label="Number of Guests *" error={err("guests")}>
              <input id="guests" name="guests" type="number" min={1} inputMode="numeric" className={input} {...aria("guests")} />
            </Field>
            <Field id="budget" label="Budget Range *" error={err("budget")}>
              <select id="budget" name="budget" defaultValue="" className={input} {...aria("budget")}>
                <option value="" disabled>
                  Select a range
                </option>
                {BUDGETS.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </Field>
            <Field id="location" label="Event Location *" error={err("location")} className="sm:col-span-2">
              <input id="location" name="location" placeholder="City or venue" className={input} {...aria("location")} />
            </Field>
            <Field id="message" label="Message / Design Ideas" error={err("message")} className="sm:col-span-2">
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Theme, colors, flavors, inspiration links..."
                className={`${input} resize-y`}
                {...aria("message")}
              />
            </Field>

            <div className="sm:col-span-2">
              <label className="flex cursor-pointer items-start gap-3 text-sm text-ink">
                <input
                  type="checkbox"
                  name="agree"
                  className="mt-0.5 h-5 w-5 shrink-0 rounded border-pale accent-copper"
                  {...aria("agree")}
                />
                I understand dessert tables must be ordered at least 3 weeks in advance and wedding cakes at least 2 weeks in advance.
              </label>
              {err("agree") && (
                <p id="agree-error" className="mt-1.5 text-xs text-red-600">
                  {err("agree")}
                </p>
              )}
            </div>

            {status === "error" && message && (
              <p role="alert" className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 sm:col-span-2">
                <AlertCircle size={16} strokeWidth={1.5} aria-hidden="true" /> {message}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-copper to-rose px-8 font-semibold text-white shadow-card transition hover:brightness-105 disabled:opacity-70 sm:col-span-2 sm:justify-self-start"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={18} className="animate-spin" aria-hidden="true" /> Sending...
                </>
              ) : (
                <>
                  <Send size={17} strokeWidth={1.5} aria-hidden="true" /> Request My Quote
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
