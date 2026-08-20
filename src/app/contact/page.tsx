"use client";

import PageBrandHeader from "@/components/PageBrandHeader";
import PageShell from "@/components/PageShell";

export default function ContactPage() {
  return (
    <PageShell>
      {(S) => (
        <section style={S.subpageHero}>
          <PageBrandHeader title="Contact" titleStyle={S.pageTitle} />
          <p style={S.lead}>
            {
              "\uC778\uAC04\uC758 \uC0DD\uAC01\uACFC \uAD00\uACC4, \uC6A9\uB9D0, \uC120\uD0DD\uC744 \uAD6C\uC870\uD654\uD558\uACE0 \uC788\uB2E4\uBA74\n\uC5B8\uC81C\uB4E0 \uC5F0\uACB0\uC744 \uD658\uC601\uD569\uB2C8\uB2E4."
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
        </section>
      )}
    </PageShell>
  );
}
