"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "./scroll-reveal";

interface TimelineItem {
  year: string;
  title: string;
  subtitle?: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative">
      {/* Background line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-[var(--color-border)] md:-translate-x-1/2" />

      {/* Animated progress line */}
      <motion.div
        className="absolute left-8 md:left-1/2 top-0 w-px bg-[var(--color-accent)] md:-translate-x-1/2 origin-top"
        style={{ height: lineHeight }}
      />

      <div className="space-y-16 md:space-y-20">
        {items.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div key={index} className="relative">
              {/* Dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-3 z-10">
                <motion.div
                  className="w-3 h-3 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-background)]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                />
              </div>

              <ScrollReveal direction={isLeft ? "left" : "right"} delay={0.1}>
                <div
                  className={`pl-20 md:pl-0 md:w-[45%] ${isLeft
                    ? "md:mr-auto md:pr-16 md:text-right"
                    : "md:ml-auto md:pl-16 md:text-left"
                    }`}
                >
                  <div className="card">
                    <span className="section-label block mb-3">{item.year}</span>
                    <h3
                      className="text-xl md:text-2xl mb-2"
                      style={{
                        fontFamily: "var(--font-jetbrains-mono)",
                        fontWeight: 700,
                        color: "var(--color-text-primary)",
                        lineHeight: 1.2,
                      }}
                    >
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      <p
                        className="text-sm mb-3"
                        style={{ color: "var(--color-accent)", fontFamily: "var(--font-jetbrains-mono)", fontWeight: 500 }}
                      >
                        {item.subtitle}
                      </p>
                    )}
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--color-text-secondary)", fontWeight: 300, textAlign: "left" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          );
        })}
      </div>
    </div>
  );
}
