"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqItems } from "@/data/faq";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="faq">
      <Container>
        <Reveal>
          <div className="mb-12 text-center">
            <h2 className="font-heading text-[26px] md:text-[32px] leading-[1.2] font-semibold tracking-[-0.01em]">
              Owner FAQ
            </h2>
          </div>
        </Reveal>

        <Stagger className="max-w-[720px] mx-auto" staggerDelay={0.06}>
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <StaggerItem key={i}>
                <div className="border-b border-border">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex justify-between items-center w-full py-6 text-left cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading text-lg font-semibold pr-4 group-hover:text-accent transition-colors duration-200">
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                      className="text-muted shrink-0"
                    >
                      {isOpen ? <Minus size={24} /> : <Plus size={24} />}
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 text-muted text-base leading-relaxed max-w-[600px]">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </SectionWrapper>
  );
}
