"use client";

import { Star } from "lucide-react";
import { stats } from "@/data/stats";
import { Container } from "@/components/ui/container";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

export function ProofStrip() {
  return (
    <div className="bg-white border-b border-border py-6">
      <Container>
        <Stagger className="flex justify-center flex-wrap gap-y-4 gap-x-12" staggerDelay={0.08}>
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="flex items-center gap-2 text-[15px] font-medium text-muted whitespace-nowrap">
              {stat.value === "5.0" && <Star size={18} className="text-yellow-400 fill-yellow-400" />}
              <span>
                {stat.numericValue !== undefined ? (
                  <>
                    <AnimatedCounter
                      value={stat.numericValue}
                      suffix={stat.suffix}
                      decimals={stat.value === "5.0" ? 1 : 0}
                      duration={1.5}
                      className="text-black font-bold"
                    />
                  </>
                ) : (
                  <strong className="text-black font-bold">{stat.value}</strong>
                )}{" "}
                {stat.label}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </div>
  );
}
