"use client";

import PageBrandHeader from "@/components/PageBrandHeader";
import PageShell from "@/components/PageShell";
import SiteNav from "@/components/SiteNav";

export default function HomePage() {
  return (
    <PageShell showNav={false} mutedFooter>
      {(S) => (
        <section style={S.hero}>
          <PageBrandHeader title="LNA" titleStyle={S.h1} showLogo={false} />
          <div style={S.heroMeta}>The OS of Human Thinking</div>
          <div style={{ marginTop: 96 }}>
            <SiteNav compact highlightActive={false} />
          </div>
        </section>
      )}
    </PageShell>
  );
}