"use client";

import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

const steps = [
  {
    number: 1,
    title: "Assess",
    description: "We review the property, current condition, and your goals. No obligation.",
  },
  {
    number: 2,
    title: "Set rules",
    description: "We confirm pricing, your maintenance approval threshold, and service scope.",
  },
  {
    number: 3,
    title: "Run the system",
    description: "Work is scheduled, documented, and communicated consistently. No surprises.",
  },
];

export function HowItWorks() {
  return (
    <SectionWrapper variant="muted">
      <Container>
        <Reveal>
          <div className="mb-12">
            <h2 className="font-heading text-[26px] md:text-[32px] leading-[1.2] font-semibold tracking-[-0.01em]">
              How it works
            </h2>
            <p className="mt-2 text-muted max-w-[600px]">
              Three steps from first call to managed property.
            </p>
          </div>
        </Reveal>

        <Stagger className="grid md:grid-cols-3 gap-8" staggerDelay={0.2}>
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black text-white font-heading font-bold text-xl mb-4">
                {step.number}
              </div>
              <h3 className="font-heading text-xl leading-[1.3] font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-muted text-base leading-relaxed">
                {step.description}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </SectionWrapper>
  );
}
