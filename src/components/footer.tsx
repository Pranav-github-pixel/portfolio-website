"use client";

import { useEffect, useState } from "react";
import { Mail } from "lucide-react";

export default function Footer() {
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setCurrentDate(
        now
          .toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
          .toUpperCase()
      );
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer>
      {/* Metadata Bar */}
      <div
        className="border-t border-[var(--color-border)] px-6 md:px-12 py-5"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8 md:gap-12 metadata-bar">
            <span>India</span>
            <span>{currentDate}</span>
            <span>{currentTime}</span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Pranav-github-pixel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/pranavkhadse/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            <a
              href="https://www.behance.net/pranavkhadse"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.226-2.477-2.226-1.467 0-2.274.891-2.488 2.226zm-9.562 6h-6.478v-14h6.77c3.125 0 4.542 1.39 4.542 3.593 0 1.272-.67 2.378-2.14 2.859 1.834.456 2.652 1.764 2.652 3.565 0 2.272-1.726 3.983-5.346 3.983zm-3.528-6.195v3.407h2.247c1.394 0 2.308-.432 2.308-1.733 0-1.405-.989-1.674-2.257-1.674h-2.298zm0-5.069v3.081h2.09c1.077 0 1.94-.356 1.94-1.541 0-1.157-.803-1.54-1.921-1.54h-2.109z" />
              </svg>
            </a>

            <a
              href="mailto:psjkhadse@gmail.com"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom credit */}
      <div className="border-t border-[var(--color-border)] px-6 md:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p
            className="text-xs"
            style={{
              color: "var(--color-text-secondary)",
              fontFamily: "var(--font-jetbrains-mono)",
              fontWeight: 500,
              letterSpacing: "0.05em",
            }}
          >
            © {new Date().getFullYear()} Pranav Khadse
          </p>
          <a
            href="https://drive.google.com/file/d/1n0dqSGYnnfrNp6I_1NoIhueWEHSdOH7-/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill btn-pill-outline"
            style={{ padding: "8px 18px", fontSize: "10px" }}
          >
            Resume ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
