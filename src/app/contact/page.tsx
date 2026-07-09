"use client";

import PageBrandHeader from "@/components/PageBrandHeader";
import PageShell from "@/components/PageShell";
import SubpageHero from "@/components/SubpageHero";

export default function ContactPage() {
  return (
    <PageShell>
      {(S) => (
        <SubpageHero style={S.subpageHero} scrollTargetId="site-footer">
          <PageBrandHeader title="Contact" titleStyle={S.pageTitle} />
          <p style={S.lead}>
            {
              "\uAC10\uC815, \uC5B8\uC5B4, \uC0DD\uAC01\uC758 \uD30C\uB3D9\uC744 \uD0D0\uAD6C\uD558\uACE0 \uC788\uB2E4\uBA74\n\uC5B8\uC81C\uB4E0 \uC5F0\uACB0\uC744 \uD658\uC601\uD569\uB2C8\uB2E4."
            }
          </p>
          <a
            href="mailto:contact@lna-corp.com"
            style={{
              marginTop: 56,
              fontSize: 14,
              fontWeight: 550,
              letterSpacing: "0.08em",
              color: "rgba(0,0,0,0.62)",
              textDecoration: "none",
              borderBottom: "1px solid rgba(0,0,0,0.18)",
              paddingBottom: 1,
            }}
          >
            contact@lna-corp.com
          </a>
        </SubpageHero>
      )}
    </PageShell>
  );
}