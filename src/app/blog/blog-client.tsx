"use client";

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

interface BlogClientProps {
  posts: Post[];
}

export default function BlogClient({ posts }: BlogClientProps) {
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
            <span className="section-label block mb-6">Ideas & Learning</span>
            <h1 className="section-title">Writing</h1>
          </motion.div>
        </div>
      </section>

      {/* POSTS */}
      <section className="px-6 md:px-12 border-t border-[var(--color-border)] py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          {posts.length === 0 ? (
            <p style={{ color: "var(--color-text-secondary)" }}>
              No posts yet. Check back soon.
            </p>
          ) : (
            <div>
              {posts.map((post, i) => (
                <ScrollReveal key={post.slug} delay={i * 0.08}>
                  <article className="group border-b border-[var(--color-border)] py-10 md:py-14 cursor-pointer">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <h2
                        className="text-xl md:text-3xl group-hover:text-[var(--color-accent)] transition-colors"
                        style={{
                          fontFamily: "var(--font-dm-sans)",
                          fontWeight: 700,
                          color: "var(--color-text-primary)",
                          lineHeight: 1.2,
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {post.frontmatter.title}
                      </h2>
                      <div className="flex items-center gap-4 metadata-bar flex-shrink-0 md:pt-2">
                        <span>
                          {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        {post.frontmatter.readingTime && (
                          <span>{post.frontmatter.readingTime}</span>
                        )}
                      </div>
                    </div>

                    <p
                      className="text-sm leading-relaxed max-w-3xl mb-4"
                      style={{ color: "var(--color-text-secondary)", fontWeight: 300 }}
                    >
                      {post.content.slice(0, 200).replace(/[#\-*]/g, "").trim()}...
                    </p>

                    {post.frontmatter.tags && (
                      <div className="flex flex-wrap gap-2">
                        {(post.frontmatter.tags as string[]).map((tag) => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>
                    )}
                  </article>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
