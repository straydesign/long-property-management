"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { galleryImages } from "@/data/gallery";
import { caseSnapshots } from "@/data/case-snapshots";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

export function Gallery() {
  return (
    <SectionWrapper id="gallery">
      <Container>
        <Reveal>
          <div className="mb-12">
            <h2 className="font-heading text-[26px] md:text-[32px] leading-[1.2] font-semibold tracking-[-0.01em]">
              Recent work and property results
            </h2>
            <p className="mt-2 text-muted max-w-[600px]">
              Real properties, real outcomes. Photos from recent maintenance, turns, and seasonal work.
            </p>
          </div>
        </Reveal>

        <Stagger className="grid grid-cols-2 md:grid-cols-3 gap-4" staggerDelay={0.08}>
          {galleryImages.map((image) => (
            <StaggerItem key={image.src}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="aspect-[4/3] bg-surface rounded-xl overflow-hidden border border-border"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.2}>
          <div className="mt-8">
            <video
              src="/images/snow-plowing.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full rounded-xl aspect-video object-cover"
            />
          </div>
        </Reveal>

        <Stagger className="grid md:grid-cols-2 gap-6 mt-8" staggerDelay={0.15}>
          {caseSnapshots.map((snapshot) => (
            <StaggerItem key={snapshot.title}>
              <motion.div
                whileHover={{ y: -2 }}
                className="p-6 bg-surface rounded-2xl h-full"
              >
                <h3 className="font-heading text-xl leading-[1.3] font-semibold mb-3">
                  {snapshot.title}
                </h3>
                <p className="text-muted text-base leading-relaxed mb-2">
                  <strong className="text-black">Problem:</strong> {snapshot.problem}
                </p>
                <p className="text-muted text-base leading-relaxed mb-2">
                  <strong className="text-black">Fix:</strong> {snapshot.fix}
                </p>
                <p className="text-muted text-base leading-relaxed">
                  <strong className="text-black">Outcome:</strong> {snapshot.outcome}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </SectionWrapper>
  );
}
