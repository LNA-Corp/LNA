"use client";

import type { CSSProperties } from "react";

export default function ScrollHint({
  targetId,
  style,
}: {
  targetId: string;
  style?: CSSProperties;
}) {
  const scrollTo = () => {
    document
      .getElementById(targetId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <button
      type="button"
      aria-label="아래로 스크롤"
      onClick={scrollTo}
      style={{
        marginTop: "auto",
        paddingTop: 34,
        fontSize: 16,
        fontWeight: 500,
        letterSpacing: "0.02em",
        color: "rgba(0,0,0,0.40)",
        lineHeight: 1,
        userSelect: "none",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        ...style,
      }}
    >
      ↓
    </button>
  );
}
