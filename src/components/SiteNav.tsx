"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useIsMobile } from "@/lib/ui/theme";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/mission", label: "Mission" },
  { href: "/systems", label: "Systems" },
  { href: "/contact", label: "Contact" },
] as const;

export default function SiteNav({
  compact = false,
  sticky = false,
  highlightActive = true,
}: {
  compact?: boolean;
  sticky?: boolean;
  highlightActive?: boolean;
}) {
  const pathname = usePathname();
  const isMobile = useIsMobile();

  const gap = compact
    ? isMobile
      ? 14
      : 22
    : isMobile
      ? 16
      : 22;

  return (
    <nav
      className={`site-nav${sticky ? " site-nav--fixed" : ""}${compact ? " site-nav--compact" : ""}`}
      style={{
        gap,
        ...(sticky
          ? {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 100,
              background: "rgba(255,255,255,0.92)",
              backdropFilter: "saturate(180%) blur(12px)",
              WebkitBackdropFilter: "saturate(180%) blur(12px)",
              padding: isMobile ? "16px 14px" : "18px 20px",
              borderBottom: "1px solid rgba(0,0,0,0.04)",
            }
          : {
              padding: compact ? 0 : isMobile ? "20px 12px 0" : "24px 16px 0",
            }),
      }}
    >
      {LINKS.map((link, i) => {
        const active =
          highlightActive && pathname.startsWith(link.href);

        return (
          <span
            key={link.href}
            style={{ display: "inline-flex", alignItems: "center", gap }}
          >
            {i > 0 && (
              <span
                className="site-nav__sep"
                aria-hidden
              >
                |
              </span>
            )}
            <Link
              href={link.href}
              className={`site-nav__link${active ? " is-active" : ""}`}
            >
              {link.label}
            </Link>
          </span>
        );
      })}
    </nav>
  );
}