"use client";

import PageShell from "@/components/PageShell";
import SiteNav from "@/components/SiteNav";

export default function HomePage() {
  return (
    <PageShell showNav={false} mutedFooter>
      {(S) => (
        <section style={S.hero}>
          <h1 style={S.h1}>LNA</h1>
          <div style={S.heroMeta}>The OS of Human Thinking</div>
          <div style={{ marginTop: 96 }}>
            <SiteNav compact highlightActive={false} />
          </div>
        </section>
      )}
    </PageShell>
  );
}