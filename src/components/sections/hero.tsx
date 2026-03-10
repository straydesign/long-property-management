"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="hero" className="relative bg-black text-white py-20 md:py-28 overflow-hidden">
      {/* Parallax background image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>

      <Container className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
        <div className="max-w-[560px]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-sm font-semibold uppercase tracking-[0.08em] text-white/60 mb-4"
          >
            Owner-first property management + maintenance
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-heading text-[40px] md:text-[56px] leading-[1.05] font-bold tracking-[-0.02em] mb-6"
          >
            Owner-first property management with built-in maintenance
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl leading-relaxed text-white/80 mb-8 max-w-[480px]"
          >
            Snow, lawn, and repairs handled with clear approval rules&mdash;so your rental stays protected, safe, and rent-ready.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <Button href="#lead-form" variant="primary-on-dark">
              Get a Free Rental Assessment
            </Button>
            <Button href="tel:+18145551212" variant="secondary-on-dark">
              Call for Owner Pricing
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-wrap gap-4 text-sm text-white/50"
          >
            <li>Serving Erie, PA &amp; surrounding areas</li>
            <li className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-white/30" />
              Maintenance approvals at your threshold
            </li>
            <li className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-white/30" />
              Documented work with photos
            </li>
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="hidden md:flex items-center justify-center"
        >
          <Image
            src="/images/hero.jpg"
            alt="Well-maintained rental property with clean walkway and landscaping"
            width={1200}
            height={1600}
            priority
            className="w-full max-h-[520px] object-cover rounded-2xl shadow-2xl"
          />
        </motion.div>
      </Container>
    </section>
  );
}
