"use client";

import ScrollHint from "@/components/ScrollHint";
import type { CSSProperties, ReactNode } from "react";

export default function SubpageHero({
  style,
  scrollTargetId,
  hintMarginTop,
  children,
}: {
  style: CSSProperties;
  scrollTargetId?: string;
  hintMarginTop?: number;
  children: ReactNode;
}) {
  return (
    <section style={style}>
      {children}
      {scrollTargetId ? (
        <ScrollHint
          targetId={scrollTargetId}
          style={hintMarginTop ? { marginTop: hintMarginTop } : undefined}
        />
      ) : null}
    </section>
  );
}
