"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/scroll-reveal";

const interests = [
  "Reading", "Fitness", "Open Source", "Writing", "Travel", "Photography",
  "Embedded Systems", "Cloud Architecture",
];

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-[60vh] flex items-end px-6 md:px-12 pb-16 pt-32">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <span className="section-label block mb-6">The Human</span>
            <h1 className="section-title">About</h1>
          </motion.div>
        </div>
      </section>

      {/* PERSONAL STORY */}
      <section className="px-6 md:px-12 border-t border-[var(--color-border)] py-32 md:py-48">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="statement-text max-w-5xl">
              I&apos;m someone who fell in love with making things work. It started
              with taking apart electronics as a kid, and evolved into designing
              ROVs, building IoT systems, and architecting cloud pipelines.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p
              className="text-base md:text-lg mt-12 max-w-3xl leading-relaxed"
              style={{ color: "var(--color-text-secondary)", fontWeight: 300 }}
            >
              What drives me is curiosity — the thrill of understanding how things
              connect, from a tiny microcontroller pin to a global cloud service.
              I believe the best engineers are the ones who never stop asking
              &ldquo;why?&rdquo; and &ldquo;what if?&rdquo;
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* INTERESTS */}
      <section className="px-6 md:px-12 border-t border-[var(--color-border)] py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <span className="section-label block mb-4">Beyond Code</span>
              <h2
                style={{
                  fontFamily: "var(--font-anton)",
                  fontSize: "clamp(48px, 8vw, 100px)",
                  textTransform: "uppercase",
                  lineHeight: "0.95",
                }}
              >
                Interests
              </h2>
            </div>
          </ScrollReveal>

          <div className="flex flex-wrap gap-3">
            {interests.map((interest, i) => (
              <ScrollReveal key={interest} delay={i * 0.05}>
                <motion.span
                  className="tag"
                  style={{
                    padding: "10px 22px",
                    fontSize: "13px",
                    fontWeight: 500,
                    textTransform: "none",
                  }}
                  whileHover={{
                    borderColor: "var(--color-accent)",
                    color: "var(--color-accent)",
                    y: -2,
                  }}
                  transition={{ duration: 0.25 }}
                >
                  {interest}
                </motion.span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CURRENT FOCUS */}
      <section className="px-6 md:px-12 border-t border-[var(--color-border)] py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="section-label block mb-4">Right Now</span>
              <h2
                className="mb-10"
                style={{
                  fontFamily: "var(--font-anton)",
                  fontSize: "clamp(48px, 8vw, 100px)",
                  textTransform: "uppercase",
                  lineHeight: "0.95",
                }}
              >
                Current Focus
              </h2>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: "var(--color-text-secondary)", fontWeight: 300 }}
              >
                Currently exploring the intersection of embedded systems and
                cloud architecture — building secure IoT pipelines with AWS,
                experimenting with BLE encryption protocols, and diving deeper
                into DevOps practices. Always learning, always building.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
