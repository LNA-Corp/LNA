"use client";

import type { ReactNode } from "react";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { makeStyles } from "@/lib/styles";
import { useIsMobile } from "@/lib/ui/theme";

export default function PageShell({
  children,
  showNav = true,
  mutedFooter = false,
}: {
  children: (S: ReturnType<typeof makeStyles>, isMobile: boolean) => ReactNode;
  showNav?: boolean;
  mutedFooter?: boolean;
}) {
  const isMobile = useIsMobile();
  const S = makeStyles(isMobile);
  const navOffset = showNav ? (isMobile ? 56 : 62) : 0;

  return (
    <div style={S.wrap}>
      {showNav ? <SiteNav sticky /> : null}
      <main
        style={{
          ...S.container,
          paddingTop: showNav ? navOffset : S.container.paddingTop,
        }}
      >
        {children(S, isMobile)}
        <SiteFooter S={S} muted={mutedFooter} />
      </main>
    </div>
  );
}