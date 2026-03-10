"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  units?: string;
  address?: string;
}

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  function validate(formData: FormData): FormErrors {
    const errs: FormErrors = {};
    if (!formData.get("name")) errs.name = "Please enter your name.";
    const phone = (formData.get("phone") as string) || "";
    if (!phone || phone.replace(/\D/g, "").length < 10) errs.phone = "Please enter a valid phone number (10 digits).";
    const email = (formData.get("email") as string) || "";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Please enter a valid email.";
    if (!formData.get("units")) errs.units = "Please select unit count.";
    if (!formData.get("address")) errs.address = "Please enter the property address.";
    return errs;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const errs = validate(formData);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  }

  const inputClasses = "w-full min-h-11 px-3.5 py-2.5 bg-white/8 border-[1.5px] border-white/20 rounded-[10px] text-white font-body text-base placeholder:text-white/30 focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(37,99,235,0.3)] transition-all duration-200";

  return (
    <section id="lead-form" className="bg-black text-white py-16 md:py-24">
      <Container>
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div key="form" exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }}>
              <Reveal>
                <h2 className="font-heading text-[26px] md:text-[32px] leading-[1.2] font-semibold tracking-[-0.01em] mb-2">
                  Get a free rental assessment
                </h2>
                <p className="text-white/70 mb-8 max-w-[520px]">
                  Tell us the property address and unit type&mdash;we&apos;ll reply with a rent range, scope fit, and next steps.
                </p>
              </Reveal>

              <form onSubmit={handleSubmit} noValidate>
                <Stagger className="grid md:grid-cols-2 gap-4 max-w-[640px]" staggerDelay={0.08}>
                  <StaggerItem>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="form-name" className="text-sm font-semibold text-white/70">Name</label>
                      <input id="form-name" name="name" type="text" autoComplete="name" required className={inputClasses} />
                      {errors.name && <span className="text-[13px] text-error">{errors.name}</span>}
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="form-phone" className="text-sm font-semibold text-white/70">Phone</label>
                      <input id="form-phone" name="phone" type="tel" autoComplete="tel" required className={inputClasses} />
                      {errors.phone && <span className="text-[13px] text-error">{errors.phone}</span>}
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="form-email" className="text-sm font-semibold text-white/70">Email</label>
                      <input id="form-email" name="email" type="email" autoComplete="email" required className={inputClasses} />
                      {errors.email && <span className="text-[13px] text-error">{errors.email}</span>}
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="form-units" className="text-sm font-semibold text-white/70">Number of units</label>
                      <select id="form-units" name="units" required defaultValue="" className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_14px_center] pr-10`}>
                        <option value="" disabled className="bg-black">Select</option>
                        <option value="1" className="bg-black">1</option>
                        <option value="2-4" className="bg-black">2-4</option>
                        <option value="5+" className="bg-black">5+</option>
                      </select>
                      {errors.units && <span className="text-[13px] text-error">{errors.units}</span>}
                    </div>
                  </StaggerItem>

                  <StaggerItem className="md:col-span-2">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="form-address" className="text-sm font-semibold text-white/70">Property address</label>
                      <input id="form-address" name="address" type="text" autoComplete="street-address" required className={inputClasses} />
                      {errors.address && <span className="text-[13px] text-error">{errors.address}</span>}
                    </div>
                  </StaggerItem>

                  <StaggerItem className="md:col-span-2">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="form-notes" className="text-sm font-semibold text-white/70">Notes (optional)</label>
                      <textarea id="form-notes" name="notes" rows={3} maxLength={250} className={`${inputClasses} resize-y`} />
                    </div>
                  </StaggerItem>

                  <StaggerItem className="md:col-span-2 mt-2">
                    <motion.button
                      type="submit"
                      whileHover={{ y: -2, boxShadow: "0 8px 30px rgba(255,255,255,0.15)" }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full inline-flex items-center justify-center rounded-xl bg-white text-black min-h-12 px-6 py-3.5 text-base font-semibold leading-none whitespace-nowrap cursor-pointer transition-all duration-150"
                    >
                      Send My Assessment Request
                    </motion.button>
                    <p className="text-sm text-white/50 mt-2">
                      We respond within one business day. No spam&mdash;just a quick owner call.
                    </p>
                  </StaggerItem>
                </Stagger>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="text-center py-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-success">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </motion.div>
              <h3 className="font-heading text-2xl font-bold text-white mb-4">
                Request received.
              </h3>
              <p className="text-white/70">
                We&apos;ll call within one business day. If you prefer, call us now at{" "}
                <a href="tel:+18145551212" className="text-white font-semibold no-underline hover:underline">
                  (814) 555-1212
                </a>.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}
