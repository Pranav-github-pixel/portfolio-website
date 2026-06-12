"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/scroll-reveal";

interface Post {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    readingTime?: string;
    tags?: string[];
    [key: string]: unknown;
  };
  content: string;
}

interface HomeClientProps {
  posts: Post[];
}

export default function HomeClient({ posts }: HomeClientProps) {
  return (
    <>
      {/* ============================================
          HERO — Full Viewport
          ============================================ */}
      <section className="relative min-h-screen flex flex-col justify-between pb-8">
        <div className="flex-grow flex items-stretch">
          <div className="w-full h-full">
            <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-0 h-full">
              {/* Left side — Name + Tagline */}
              {/* Left side — Name + Tagline */}
              <motion.div
                className="flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-28"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.08 }, // Time between each letter loading
                  },
                }}
                initial="hidden"
                animate="show"
              >
                <div className="w-fit mx-auto">
                  <h1 className="hero-name">
                    <span className="block" style={{ color: "#8c653b" }}>
                      {"Pranav".split("").map((char, index) => (
                        <motion.span
                          key={`first-${index}`}
                          className="inline-block"
                          variants={{
                            hidden: { opacity: 0, x: -50 },
                            show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                          }}
                        >
                          {char}
                        </motion.span>
                      ))}
                    </span>
                    <span className="block" style={{ color: "#1E1E1E  " }}>
                      {"Khadse".split("").map((char, index) => (
                        <motion.span
                          key={`last-${index}`}
                          className="inline-block"
                          variants={{
                            hidden: { opacity: 0, x: -50 },
                            show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                          }}
                        >
                          {char}
                        </motion.span>
                      ))}
                    </span>
                  </h1>

                  {/* The tagline will animate in exactly after the last letter finishes! */}
                  <motion.p
                    className="hero-tagline mt-8 font-medium text-lg ml-1.25"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                    }}
                  >
                    Driven by curiosity, Final-year student focused on software development, embedded systems, and lifelong learning.
                  </motion.p>
                </div>
              </motion.div>

              {/* Right side — Image */}
              <motion.div
                className="relative overflow-hidden"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
              >
                <img
                  src="/TrueEngineer.jpg"
                  alt="Pranav Khadse"
                  className="w-full h-full object-cover"
                  style={{ minHeight: "400px" }}
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom metadata */}
        <motion.div
          className="max-w-7xl mx-auto w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center justify-between border-t border-[var(--color-border)] pt-5">
            <div className="flex items-center gap-12 text-lg metadata-bar">
              <span>VIT Chennai</span>
              <span>Learner & Builder</span>
            </div>
            <motion.div
              className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-50"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="mailto:psjkhadse@gmail.com"
                className="flex items-center justify-center w-18 h-18 rounded-full shadow-2xl"
                style={{ backgroundColor: "var(--color-text-primary)" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-background)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* ============================================
          INTRODUCTION — Large Statement
          ============================================ */}
      <section className="px-6 md:px-12 pt-16 pb-16 md:pt-24 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="statement-text text-6xl max-w-6xl" >
              I&apos;m an embedded systems engineer who grew up tinkering with
              microcontrollers, now building IoT solutions and cloud architectures.
              I care just as much about elegant firmware as I do about scalable
              systems — always asking why, always building what matters.
            </p>
          </ScrollReveal>

          {/* CTAs */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap gap-4 mt-16">
              <Link href="/portfolio" className="btn-pill btn-pill-filled">
                Portfolio
              </Link>
              <Link href="/about" className="btn-pill btn-pill-outline">
                About Me
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================
          LATEST WRITING — Titles only
          ============================================ */}
      {posts.length > 0 && (
        <section className="px-6 md:px-12 border-t border-[var(--color-border)] py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
                <div>
                  {/* Made "Latest" bigger by adding text-lg md:text-xl */}
                  <span className="section-label block mb-3 text-base md:text-base font-bold">Latest</span>

                  {/* Made "Writings" massive by changing from text-5xl to 7xl/8xl */}
                  <h2
                    className="text-5xl md:text-6xl lg:text-7xl"
                    style={{
                      fontFamily: "var(--font-anton)",
                      textTransform: "uppercase",
                    }}
                  >
                    Writings
                  </h2>
                </div>

                <Link href="/blog" className="btn-pill btn-pill-outline hidden md:inline-flex">
                  All Posts →
                </Link>
              </div>
            </ScrollReveal>

            {/* Simple title-only list */}
            <div>
              {posts.map((post, i) => (
                <ScrollReveal key={post.slug} delay={i * 0.1}>
                  <Link
                    href="/blog"
                    className="group flex items-center justify-between border-b border-[var(--color-border)] py-6 md:py-8"
                  >
                    <h3
                      className="text-lg md:text-xl group-hover:text-[var(--color-accent)] transition-colors"
                      style={{
                        fontFamily: "var(--font-jetbrains-mono)",
                        fontWeight: 600,
                        color: "var(--color-text-primary)",
                      }}
                    >
                      {post.frontmatter.title}
                    </h3>
                    <span
                      className="hidden md:block text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: "var(--color-accent)", fontFamily: "var(--font-jetbrains-mono)", fontWeight: 500 }}
                    >
                      Read →
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            <div className="mt-8 md:hidden">
              <Link href="/blog" className="btn-pill btn-pill-outline">All Posts →</Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
