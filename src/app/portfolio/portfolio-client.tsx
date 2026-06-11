"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/scroll-reveal";
import SectionHeading from "@/components/section-heading";
import Timeline from "@/components/timeline";

interface MdxItem {
  slug: string;
  frontmatter: Record<string, any>;
  content: string;
}

interface PortfolioClientProps {
  experiences: MdxItem[];
  projects: MdxItem[];
  achievements: MdxItem[];
}

const skills = {
  Programming: ["Python", "Java", "JavaScript", "TypeScript", "Embedded C", "C++"],
  Frameworks: ["Next.js", "React", "Node.js", "Flask"],
  Tools: ["Git", "Docker", "Linux", "Jenkins", "EasyEDA"],
  "AI / ML": ["LangChain", "OpenAI", "Vector DBs"],
  "Soft Skills": ["Communication", "Leadership", "Problem Solving", "Writing"],
};

const certifications = [
  {
    title: "IBM DevOps Certification",
    issuer: "IBM Career Education Program (IBMCE)",
    date: "Jun 2025",
    description: "Covering Agile, CI/CD, and collaboration workflows.",
    link: "https://courses.vit.skillsnetwork.site/certificates/e04cce08b47c4d99af7bff7fbaca84b1"
  },
];

const education = [
  {
    level: "College",
    degree: "B.Tech in Electronics and Computer Engineering (ECM)",
    institution: "Vellore Institute of Technology, Chennai",
    score: "CGPA: 8.87",
    gpaHighlight: "9.64, 9.49",
    highlights: ["Embedded Systems", "IoT", "Cloud Computing", "DevOps"],
    date: "2023-2027",
  },
  {
    level: "12th",
    board: "Maharashtra state board (MSBSHSE)",
    school: "Higher Secondary School",
    score: "68%",
    date: "2021-2023",
  },
  {
    level: "JEE",
    board: "Competitive Exam",
    school: "Joint Entrance Examination",
    score: "93.07 Percentile",
    date: "2021-2023",
  },
  {
    level: "10th",
    board: "Central Board of Secondary Education (CBSE)",
    school: "Mount Carmel Convent High School",
    score: "93.8%",
    date: "2020-2021",
  },
];


/* ============================================
   EXPANDABLE PROJECT CARD
   ============================================ */
function ProjectCard({ project, index }: { project: MdxItem; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLeft = index % 2 === 0;

  return (
    <ScrollReveal direction="up" delay={0.1}>
      <motion.div
        className="card cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
        layout
        whileHover={{ borderColor: "var(--color-accent)" }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex-grow">
            <div className="flex items-center gap-4 mb-2">
              <span
                className="text-2xl md:text-3xl font-bold opacity-10"
                style={{ fontFamily: "var(--font-anton)" }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="section-label">
                {project.frontmatter.date as string}
              </span>
            </div>
            <h3
              className="text-xl md:text-2xl mb-2"
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 700,
                color: "var(--color-text-primary)",
                lineHeight: 1.2,
              }}
            >
              {project.frontmatter.title as string}
            </h3>
            <p
              className="text-sm"
              style={{ color: "var(--color-text-secondary)", fontWeight: 300 }}
            >
              {project.frontmatter.summary as string}
            </p>
          </div>

          {/* Expand indicator + links */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {project.frontmatter.github && (
              <a
                href={project.frontmatter.github as string}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-pill-outline"
                style={{ padding: "12px 24px", fontSize: "14px" }}
                onClick={(e) => e.stopPropagation()}
              >
                GitHub ↗
              </a>
            )}
            {project.frontmatter.live && (
              <a
                href={project.frontmatter.live as string}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-pill-filled"
                style={{ padding: "12px 24px", fontSize: "12px" }}
                onClick={(e) => e.stopPropagation()}
              >
                {(project.frontmatter.liveLabel as string) || "Live"} ↗
              </a>
            )}
            <motion.span
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              style={{
                color: "var(--color-accent)",
                fontSize: "20px",
                fontWeight: 300,
              }}
            >
              ↓
            </motion.span>
          </div>
        </div>

        {/* Expanded content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div
                className="pt-6 mt-6"
                style={{ borderTop: "1px solid var(--color-border)" }}
              >
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "var(--color-text-secondary)", fontWeight: 300 }}
                >
                  {project.content.replace(/^- /gm, "• ").replace(/\n/g, " ")}
                </p>

                {project.frontmatter.tags && (
                  <div className="flex flex-wrap gap-2">
                    {(project.frontmatter.tags as string[]).map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </ScrollReveal>
  );
}

export default function PortfolioClient({
  experiences,
  projects,
  achievements,
}: PortfolioClientProps) {
  const experienceTimeline = experiences.map((exp) => ({
    year: (exp.frontmatter.date as string) || "",
    title: (exp.frontmatter.title as string) || "",
    subtitle: (exp.frontmatter.company as string) || "",
    description: exp.content.replace(/^- /gm, "• ").replace(/\n/g, " "),
  }));

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
            <span className="section-label block mb-6">Work & Growth</span>
            <h1 className="section-title">Portfolio</h1>
          </motion.div>
          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a href="#skills" className="btn-pill btn-pill-outline">
              Jump to Skills ↓
            </a>
            <a
              href="https://drive.google.com/file/d/1n0dqSGYnnfrNp6I_1NoIhueWEHSdOH7-/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill btn-pill-filled"
            >
              View Resume ↗
            </a>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="px-6 md:px-12 border-t border-[var(--color-border)] py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <SectionHeading label="Experience" title="Where I've Worked" number="01" />
          <Timeline items={experienceTimeline} />
        </div>
      </section>

      {/* PROJECTS — Expandable cards */}
      <section className="px-6 md:px-12 border-t border-[var(--color-border)] py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <SectionHeading label="Projects" title="What I've Built" number="02" />
          <div className="space-y-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="px-6 md:px-12 border-t border-[var(--color-border)] py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <SectionHeading label="Achievements" title="Milestones" number="03" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements
              .filter((a) => !(a.frontmatter.title as string).includes("Certification") && !(a.frontmatter.title as string).includes("IBM"))
              .map((achievement, i) => (
                <ScrollReveal key={achievement.slug} delay={i * 0.1}>
                  <div className="card h-full flex flex-col">
                    <span className="section-label block mb-4">
                      {achievement.frontmatter.date as string}
                    </span>
                    <h3
                      className="text-lg mb-3"
                      style={{
                        fontFamily: "var(--font-jetbrains-mono)",
                        fontWeight: 700,
                        color: "var(--color-text-primary)",
                        lineHeight: 1.3,
                      }}
                    >
                      {achievement.frontmatter.title as string}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mt-auto"
                      style={{ color: "var(--color-text-secondary)", fontWeight: 300 }}
                    >
                      {achievement.content}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-6 md:px-12 border-t border-[var(--color-border)] py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <SectionHeading label="Skills" title="Capabilities" number="04" />
          <div className="columns-1 md:columns-2 lg:columns-3 gap-10 md:gap-14">
            {Object.entries(skills).map(([category, items], catIndex) => (
              <ScrollReveal
                key={category}
                delay={catIndex * 0.08}
                className="break-inside-avoid mb-10 md:mb-14"
              >
                <div className="card h-full">

                  <h3 className="skill-category-title">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span key={skill} className="tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS — Separate from achievements */}
      <section className="px-6 md:px-12 border-t border-[var(--color-border)] py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <SectionHeading label="Certifications" title="Credentials" number="05" />
          <div className="space-y-6">
            {certifications.map((cert, i) => (
              <ScrollReveal key={cert.title} delay={i * 0.1}>
                <div className="card flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3
                      className="text-lg md:text-xl mb-1"
                      style={{
                        fontFamily: "var(--font-jetbrains-mono)",
                        fontWeight: 700,
                        color: "var(--color-text-primary)",
                      }}
                    >
                      {cert.title}
                    </h3>
                    <p
                      className="text-sm mb-1"
                      style={{ color: "var(--color-accent)", fontFamily: "var(--font-jetbrains-mono)", fontWeight: 500 }}
                    >
                      {cert.issuer}
                    </p>
                    <p className="text-sm" style={{ color: "var(--color-text-secondary)", fontWeight: 300 }}>
                      {cert.description}
                    </p>
                  </div>
                  {/* Added a container for the date and the new button */}
                  <div className="flex items-center gap-4 flex-shrink-0 mt-4 md:mt-0">
                    <span className="section-label">{cert.date}</span>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-pill btn-pill-outline"
                        style={{ padding: "12px 24px", fontSize: "13px" }}
                      >
                        Credential ↗
                      </a>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="px-6 md:px-12 border-t border-[var(--color-border)] py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <SectionHeading label="Education" title="Learning" number="06" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, i) => {
              // Automatically check if any OTHER education item shares this exact date
              const isInterlinked = education.some((otherEdu, otherIndex) =>
                otherIndex !== i && edu.date && otherEdu.date === edu.date
              );
              return (
                <ScrollReveal
                  key={edu.level}
                  delay={i * 0.1}
                  className={isInterlinked ? "md:col-span-1" : "md:col-span-2"}
                >
                  <div className="card h-full">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
                      <div>
                        <span className="section-label block mb-2">
                          {edu.level}
                          {edu.date && <span className="text-[var(--color-text-secondary)] ml-2"> • {edu.date}</span>}
                        </span>
                        <h3
                          className="text-xl md:text-2xl"
                          style={{
                            fontFamily: "var(--font-jetbrains-mono)",
                            fontWeight: 700,
                            color: "var(--color-text-primary)",
                          }}
                        >
                          {edu.degree || edu.board}
                        </h3>
                      </div>
                      <div className="md:text-right">
                        <p
                          className="text-lg"
                          style={{ color: "var(--color-accent)", fontFamily: "var(--font-jetbrains-mono)", fontWeight: 700 }}
                        >
                          {edu.score}
                        </p>
                        {edu.gpaHighlight && (
                          <p
                            className="text-[15px] mt-1 tracking-wider"
                            style={{ color: "var(--color-text-highlight)", fontWeight: 500, fontFamily: "var(--font-jetbrains-mono)" }}
                          >
                            [GPA Highlights: {edu.gpaHighlight}]
                          </p>
                        )}
                      </div>
                    </div>
                    <p className="text-sm" style={{ color: "var(--color-text-secondary)", fontWeight: 300 }}>
                      {edu.institution || edu.school}
                    </p>
                    {edu.highlights && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {edu.highlights.map((h) => (
                          <span key={h} className="tag">{h}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
