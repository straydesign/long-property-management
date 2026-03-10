"use client";

import { useState } from "react";
import { Shield, CheckSquare, AlertTriangle, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { maintenanceRules, emergencies } from "@/data/maintenance-rules";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

const iconMap = {
  shield: Shield,
  "check-square": CheckSquare,
  "alert-triangle": AlertTriangle,
  "file-text": FileText,
} as const;

export function MaintenanceRules() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="maintenance" variant="muted">
      <Container>
        <Reveal>
          <div className="mb-12">
            <h2 className="font-heading text-[26px] md:text-[32px] leading-[1.2] font-semibold tracking-[-0.01em]">
              Maintenance rules owners care about
            </h2>
            <p className="mt-2 text-muted max-w-[600px]">
              Clear thresholds, documented work, defined emergencies. This is how we protect your property and your trust.
            </p>
          </div>
        </Reveal>

        <Stagger className="grid md:grid-cols-2 gap-6" staggerDelay={0.12}>
          {maintenanceRules.map((rule, i) => {
            const Icon = iconMap[rule.icon];
            const isExpanded = expandedIndex === i;
            return (
              <StaggerItem key={rule.title}>
                <motion.div
                  layout
                  onClick={() => setExpandedIndex(isExpanded ? null : i)}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 cursor-pointer border border-transparent hover:border-black/10 transition-colors"
                >
                  <h3 className="font-heading text-xl leading-[1.3] font-semibold mb-2 flex items-center gap-2">
                    <Icon size={20} />
                    {rule.title}
                  </h3>
                  <p className="text-muted text-base leading-relaxed">
                    {rule.description}
                  </p>
                  <AnimatePresence>
                    {isExpanded && rule.icon === "alert-triangle" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 pt-4 border-t border-border">
                          <p className="text-sm font-semibold text-black mb-2">Emergency situations:</p>
                          <ul className="flex flex-col gap-1">
                            {emergencies.map((e) => (
                              <li key={e} className="text-sm text-error flex items-center gap-2">
                                <AlertTriangle size={14} /> {e}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal delay={0.3}>
          <div className="mt-8 p-6 bg-white rounded-2xl border-l-4 border-black">
            <h4 className="font-heading text-base font-semibold mb-2">
              What counts as an emergency
            </h4>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {emergencies.map((item) => (
                <li key={item} className="text-[15px] text-muted">
                  &mdash; {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </SectionWrapper>
  );
}
