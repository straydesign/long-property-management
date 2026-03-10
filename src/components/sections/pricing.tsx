"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { pricingBlocks } from "@/data/pricing";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Reveal } from "@/components/motion/reveal";

export function Pricing() {
  return (
    <SectionWrapper id="pricing">
      <Container>
        <Reveal>
          <div className="mb-12">
            <h2 className="font-heading text-[26px] md:text-[32px] leading-[1.2] font-semibold tracking-[-0.01em]">
              Simple pricing, clear boundaries
            </h2>
            <p className="mt-2 text-muted max-w-[600px]">
              Management fee and maintenance billing are separate. You always know what you&apos;re paying for.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {pricingBlocks.map((block, i) => (
            <Reveal key={block.title} direction={i === 0 ? "left" : "right"} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -2, boxShadow: "0 8px 30px rgba(11,11,12,0.08)" }}
                transition={{ duration: 0.2 }}
                className="bg-white border border-border rounded-2xl p-8 h-full"
              >
                <h3 className="font-heading text-xl leading-[1.3] font-semibold mb-4">
                  {block.title}
                </h3>
                <p className="font-heading text-[28px] font-bold mb-4">
                  {block.price}
                </p>
                <p className="text-sm text-muted leading-snug mb-6">
                  {block.description}
                </p>
                <ul className="flex flex-col gap-2">
                  {block.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-base text-muted leading-relaxed">
                      <Check size={18} className="text-success shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
