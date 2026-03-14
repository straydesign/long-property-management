"use client";

import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { navLinks } from "@/data/navigation";
import { contactInfo } from "@/data/contact";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function Footer() {
  return (
    <>
      <footer className="bg-black text-white/60 py-12 border-t border-white/10">
        <Container>
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-start flex-wrap gap-8">
              <div className="max-w-[320px]">
                <strong className="text-white font-heading text-lg block mb-2">
                  Long Property Management
                </strong>
                <p className="text-[15px] leading-relaxed">
                  {contactInfo.tagline}
                </p>
                <p className="mt-4 text-[15px]">
                  {contactInfo.phone} &bull; {contactInfo.email}
                </p>
              </div>

              <div>
                <h4 className="text-white font-heading text-[15px] font-semibold mb-4">
                  Pages
                </h4>
                <ul className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-white/60 no-underline text-[15px] hover:text-white transition-colors duration-150"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-heading text-[15px] font-semibold mb-4">
                  Service Area
                </h4>
                <ul className="flex flex-col gap-2">
                  {contactInfo.serviceAreas.map((area) => (
                    <li key={area}>
                      <span className="text-white/60 text-[15px]">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <div className="w-full pt-6 mt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center flex-wrap gap-4 text-sm">
            <p>&copy; 2026 Long Property Management. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <p>
                <small>
                  Built by{" "}
                  <a
                    href="https://straywebdesign.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-white transition-colors duration-150 no-underline"
                  >
                    Stray Web Design
                  </a>
                </small>
              </p>
              <p><small>Tenants: please contact your landlord directly.</small></p>
              <motion.a
                href="#hero"
                whileHover={{ y: -2 }}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors no-underline"
                aria-label="Back to top"
              >
                <ArrowUp size={18} />
              </motion.a>
            </div>
          </div>
        </Container>
      </footer>

      {/* Mobile Sticky CTA Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-black border-t border-white/15 px-4 py-3">
        <div className="flex gap-2">
          <a
            href={contactInfo.phoneHref}
            className="flex-1 inline-flex items-center justify-center rounded-xl border-[1.5px] border-white bg-transparent text-white min-h-11 px-4 py-2.5 text-[15px] font-semibold no-underline"
          >
            Call
          </a>
          <a
            href="#lead-form"
            className="flex-1 inline-flex items-center justify-center rounded-xl bg-white text-black min-h-11 px-4 py-2.5 text-[15px] font-semibold no-underline"
          >
            Get Assessment
          </a>
        </div>
      </div>
    </>
  );
}
