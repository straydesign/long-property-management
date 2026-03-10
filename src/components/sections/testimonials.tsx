"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

export function Testimonials() {
  return (
    <SectionWrapper variant="muted">
      <Container>
        <Reveal>
          <div className="mb-12">
            <h2 className="font-heading text-[26px] md:text-[32px] leading-[1.2] font-semibold tracking-[-0.01em]">
              What owners say
            </h2>
          </div>
        </Reveal>

        <Stagger className="grid md:grid-cols-3 gap-6" staggerDelay={0.12}>
          {testimonials.map((testimonial, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(11,11,12,0.08)" }}
                transition={{ duration: 0.2 }}
                className="bg-white border border-border rounded-2xl p-8 h-full"
              >
                <motion.span
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.4, type: "spring" }}
                  className="font-heading text-[48px] font-bold leading-none text-black/10 block mb-2"
                >
                  &ldquo;
                </motion.span>
                <blockquote className="text-[17px] leading-relaxed text-black mb-4">
                  {testimonial.quote}
                </blockquote>
                <cite className="not-italic text-sm text-muted font-semibold">
                  {testimonial.author}
                </cite>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </SectionWrapper>
  );
}
