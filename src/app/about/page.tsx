"use client";

import PageBrandHeader from "@/components/PageBrandHeader";
import PageShell from "@/components/PageShell";

const LABS = [
  {
    name: "Studio1216",
    title: "\uAC10\uC815\u00B7\uACBD\uD5D8 OS \uC5F0\uAD6C\uC18C.",
    desc: "\uC0AC\uB78C\uC758 \uAC10\uC815\uACFC \uC11C\uC0AC\uAC00 \uB9CC\uB4E4\uC5B4\uB0B4\uB294 \uC6C0\uC9C1\uC784\uC744\n\uD30C\uB3D9\uC73C\uB85C \uC2DC\uAC01\uD654\uD569\uB2C8\uB2E4.",
    link: "https://studio1216.app",
    linkLabel: "studio1216.app",
  },
  {
    name: "TextLab",
    title: "\uC5B8\uC5B4\u00B7\uAC10\uC815 \uD30C\uB3D9 \uC5F0\uAD6C\uC18C.",
    desc: "\uB300\uD654\uC758 \uD750\uB984\uACFC \uC815\uC11C\uB97C \uBD84\uC11D\uD574\n\uC0AC\uB78C\uC758 \uAD00\uACC4\uB97C \uC774\uD574\uD569\uB2C8\uB2E4.",
  },
  {
    name: "CoreTex",
    title: "\uC0AC\uACE0\u00B7\uC9C0\uB2A5 OS \uC5F0\uAD6C\uC18C.",
    desc: "\uC778\uAC04\uC758 \uC0AC\uACE0 \uD750\uB984, \uCC3D\uC758\uC131, \uB17C\uB9AC \uD328\uD134\uC744\n\uD30C\uB3D9 \uAE30\uBC18 \uC9C0\uB2A5 OS\uB85C \uAD6C\uC870\uD654\uD569\uB2C8\uB2E4.",
  },
] as const;

export default function AboutPage() {
  return (
    <PageShell>
      {(S) => (
        <>
          <section style={S.subpageHero}>
            <PageBrandHeader title="LNA" titleStyle={S.pageTitle} />
            <p style={S.lead}>
              {
                "LNA\uB294 \uC778\uAC04\uC758 \uC0DD\uAC01\u00B7\uAC10\uC815\u00B7\uC5B8\uC5B4\uB97C \uD558\uB098\uC758\n\uD30C\uB3D9\uC73C\uB85C(Wave) \uC774\uD574\uD558\uB294 \uAE30\uC5C5\uC785\uB2C8\uB2E4."
              }
            </p>
            <p style={{ ...S.body, marginTop: S.paragraphGap }}>
              {
                "\uC6B0\uB9AC\uB294 \uC778\uAC04\uC758 \uC2E0\uD638\uB97C \uC77D\uACE0,\n\uADF8 \uD750\uB984\uACFC \uC758\uBBF8\uB97C \uBD84\uC11D\uD574\n\uC0C8\uB85C\uC6B4 \uC778\uC9C0 \uAE30\uC220\uC744 \uC124\uACC4\uD569\uB2C8\uB2E4."
              }
            </p>
          </section>

          <section style={{ ...S.block, paddingTop: S.sectionGap }}>
            <div style={S.sectionDivider}>
              <div style={S.sectionLabel}>Our Labs</div>
            </div>
            {LABS.map((lab, idx) => (
              <div
                key={lab.name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  paddingTop: idx === 0 ? S.paragraphGap : 140,
                  paddingBottom: 8,
                }}
              >
                <h2 style={S.itemTitle}>{lab.name}</h2>
                <div style={S.itemMeta}>{lab.title}</div>
                <p style={S.itemDesc}>{lab.desc}</p>
                {"link" in lab && lab.link ? (
                  <a
                    href={lab.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      marginTop: 28,
                      fontSize: 13,
                      fontWeight: 500,
                      letterSpacing: "0.12em",
                      color: "rgba(0,0,0,0.48)",
                      textDecoration: "none",
                      borderBottom: "1px solid rgba(0,0,0,0.16)",
                      paddingBottom: 1,
                    }}
                  >
                    {lab.linkLabel}
                  </a>
                ) : null}
              </div>
            ))}
          </section>
        </>
      )}
    </PageShell>
  );
}