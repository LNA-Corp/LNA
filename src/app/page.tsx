"use client";

import HeartbeatWave from "@/components/HeartbeatWave";
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
          <p style={S.heroTagline}>
            {"\uC778\uAC04\uC758 \uC0DD\uAC01\u00B7\uAC10\uC815\u00B7\uC5B8\uC5B4\uB97C \uD558\uB098\uC758 \uD30C\uB3D9\uC73C\uB85C \uC774\uD574\uD569\uB2C8\uB2E4."}
          </p>
          <HeartbeatWave />
          <div style={{ marginTop: 72 }}>
            <SiteNav compact highlightActive={false} />
          </div>
        </section>
      )}
    </PageShell>
  );
}
