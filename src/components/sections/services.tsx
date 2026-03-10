"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

export function Services() {
  return (
    <SectionWrapper id="services">
      <Container>
        <Reveal>
          <div className="mb-12">
            <h2 className="font-heading text-[26px] md:text-[32px] leading-[1.2] font-semibold tracking-[-0.01em]">
              What we handle for rental owners
            </h2>
            <p className="mt-2 text-muted max-w-[600px]">
              Three service lines, one management relationship. Everything documented and communicated.
            </p>
          </div>
        </Reveal>

        <Stagger className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <motion.article
                whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(11,11,12,0.12)" }}
                transition={{ duration: 0.2 }}
                className="bg-white border border-border rounded-2xl p-6 h-full"
              >
                <div className="overflow-hidden rounded-xl mb-4">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
                    <Image
                      src={service.image}
                      alt={service.alt}
                      width={800}
                      height={533}
                      className="w-full h-[200px] object-cover"
                    />
                  </motion.div>
                </div>
                <h3 className="font-heading text-xl leading-[1.3] font-semibold mb-4">
                  {service.title}
                </h3>
                <ul className="flex flex-col gap-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-base text-muted leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href={service.linkHref} className="text-[15px] font-semibold text-black no-underline inline-flex items-center gap-1 group">
                  {service.linkLabel}{" "}
                  <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </SectionWrapper>
  );
}
