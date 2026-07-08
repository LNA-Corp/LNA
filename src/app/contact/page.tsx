"use client";

import HelixMark from "@/components/HelixMark";
import PageShell from "@/components/PageShell";

export default function ContactPage() {
  return (
    <PageShell>
      {(S) => (
        <section style={{ ...S.hero, minHeight: "calc(100svh - 80px)" }}>
          <HelixMark size={14} />
          <h1 style={S.pageTitle}>Contact</h1>
          <p style={S.body}>
            {
              "\uAC10\uC815, \uC5B8\uC5B4, \uC0DD\uAC01\uC758 \uD30C\uB3D9\uC744 \uD0D0\uAD6C\uD558\uACE0 \uC788\uB2E4\uBA74\n\uC5B8\uC81C\uB4E0 \uC5F0\uACB0\uC744 \uD658\uC601\uD569\uB2C8\uB2E4."
            }
          </p>
          <a
            href="mailto:contact@lna-corp.com"
            style={{
              marginTop: 40,
              fontSize: 14,
              fontWeight: 550,
              letterSpacing: "0.12em",
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