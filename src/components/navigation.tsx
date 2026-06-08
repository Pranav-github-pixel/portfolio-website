"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export default function Navigation() {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();

  return (
    <motion.nav
      className="fixed top-6 left-6 z-50"
      onHoverStart={() => setIsExpanded(true)}
      onHoverEnd={() => setIsExpanded(false)}
      initial={false}
    >
      <motion.div
        className="flex items-center overflow-hidden"
        style={{
          backgroundColor: "#1E1E1E",
          borderRadius: 50,
          cursor: "pointer",
        }}
      >
        {/* Links — shown when expanded */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="flex items-center gap-4 pl-5"
              initial={{ opacity: 0, width: 0, x: -20 }}
              animate={{ opacity: 1, width: "auto", x: 0 }}
              exit={{ opacity: 0, width: 0, x: -20 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsExpanded(false)}
                  className="relative whitespace-nowrap px-4 py-3"
                  style={{
                    color: pathname === link.href ? "#C29A5C" : "#F8F5EF",
                    fontSize: "17px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase" as const,
                    fontFamily: "var(--font-jetbrains-mono)",
                    transition: "color 0.25s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C29A5C")}
                  onMouseLeave={(e) =>
                  (e.currentTarget.style.color =
                    pathname === link.href ? "#C29A5C" : "#F8F5EF")
                  }
                >
                  {pathname === link.href && (
                    <span style={{ marginRight: "5px", color: "#C29A5C", fontSize: "7px" }}>
                      ▶
                    </span>
                  )}
                  {link.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Monogram Logo */}
        <div
          className="flex items-center justify-center flex-shrink-0"
          style={{
            width: 80,
            height: 80,
            borderRadius: 50,
            backgroundColor: "#1E1E1E",
          }}
        >
          <img
            src="/nav-image.jpg"
            alt="Menu Logo"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </motion.nav>
  );
}
