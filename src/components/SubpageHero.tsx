"use client";

import ScrollHint from "@/components/ScrollHint";
import type { CSSProperties, ReactNode } from "react";

export default function SubpageHero({
  style,
  scrollTargetId,
  children,
}: {
  style: CSSProperties;
  scrollTargetId?: string;
  children: ReactNode;
}) {
  return (
    <section style={style}>
      {children}
      {scrollTargetId ? <ScrollHint targetId={scrollTargetId} /> : null}
    </section>
  );
}
