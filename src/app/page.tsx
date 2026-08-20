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
          <p style={S.heroHook}>{"\uC0DD\uAC01\uC5D0\uB3C4 \uAE38\uC774 \uC788\uC2B5\uB2C8\uB2E4."}</p>
          <p style={S.heroTagline}>
            {
              "\uC0AC\uB78C\uC740 \uB2F5\uC774 \uC5C6\uC5B4\uC11C \uAE38\uC744 \uC783\uB294 \uAC83\uC774 \uC544\uB2C8\uB77C\n\uC790\uC2E0\uC758 \uC0DD\uAC01\uC744 \uAD6C\uBD84\uD560 \uAE30\uC900\uC774 \uC5C6\uC5B4 \uAE38\uC744 \uC783\uAE30\uB3C4 \uD569\uB2C8\uB2E4."
            }
          </p>
          <p style={{ ...S.heroTagline, marginTop: S.paragraphGapTight }}>
            {
              "LNA\uB294 \uAD00\uACC4, \uC6A9\uB9D0, \uC120\uD0DD\uACFC \uBC18\uBCF5 \uC18D\uC5D0\uC11C\n\uB2F9\uC2E0\uC774 \uC9C0\uAE08 \uC5B4\uB514\uC5D0 \uC788\uACE0, \uC65C \uADF8\uACF3\uC5D0 \uC788\uC73C\uBA70,\n\uC5B4\uB290 \uAE38\uC774 \uC5F4\uB824 \uC788\uB294\uC9C0\uB97C \uAD6C\uC870\uD654\uD569\uB2C8\uB2E4."
            }
          </p>
          <p style={S.heroSteps}>
            AI analyzes &nbsp;&middot;&nbsp; LNA structures &nbsp;&middot;&nbsp; You decide
          </p>
          <p style={S.heroBoundary}>
            {"\uACB0\uC815\uC740 \uB2F9\uC2E0\uC758 \uBABF\uC785\uB2C8\uB2E4."}
          </p>
          <HeartbeatWave />
          <div>
            <SiteNav compact highlightActive={false} />
          </div>
        </section>
      )}
    </PageShell>
  );
}
