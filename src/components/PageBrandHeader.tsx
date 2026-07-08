"use client";

import HelixMark from "@/components/HelixMark";
import Link from "next/link";
import type { CSSProperties } from "react";

export default function PageBrandHeader({
  title,
  titleStyle,
  showLogo = true,
  logoSize = 14,
}: {
  title: string;
  titleStyle: CSSProperties;
  showLogo?: boolean;
  logoSize?: number;
}) {
  return (
    <Link
      href="/"
      aria-label="LNA home"
      className="page-brand-header"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      {showLogo ? <HelixMark size={logoSize} /> : null}
      <h1 style={titleStyle}>{title}</h1>
    </Link>
  );
}