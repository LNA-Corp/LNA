"use client";

import PageBrandHeader from "@/components/PageBrandHeader";
import PageShell from "@/components/PageShell";
import SubpageHero from "@/components/SubpageHero";

const LABS = [
  {
    name: "Studio1216",
    title: "\uAD00\uACC4\u00B7\uC120\uD0DD\u00B7\uC6A9\uB9D0 \uC5F0\uAD6C\uC18C.",
    desc: "\uC0AC\uB78C\uC774 \uAD00\uACC4\uC640 \uC120\uD0DD \uC55E\uC5D0\uC11C \uBB34\uC5C7\uC744 \uC6D0\uD558\uACE0,\n\uBB34\uC5C7\uC744 \uC9C0\uD0A4\uB824 \uD558\uBA70, \uC65C \uAC19\uC740 \uD328\uD134\uC73C\uB85C \uB3CC\uC544\uAC00\uB294\uC9C0\uB97C \uC5F0\uAD6C\uD569\uB2C8\uB2E4.",
    note: "RDI \u00B7 RDI-U \u00B7 DualPulse \u00B7 GAP \u00B7 CDI \u00B7 PSI",
    link: "https://studio1216.app",
    linkLabel: "studio1216.app",
  },
  {
    name: "TextLab",
    title: "\uC5B8\uC5B4\u00B7\uD574\uC11D \uC5F0\uAD6C\uC18C.",
    desc: "\uB300\uD654\uC640 \uBB38\uC7A5 \uC18D\uC5D0\uC11C \uC0AC\uC2E4\uACFC \uD574\uC11D\uC774 \uAC08\uB77C\uC9C0\uB294 \uC9C0\uC810\uC744 \uBD84\uC11D\uD574\n\uAD00\uACC4 \uC774\uD574\uC758 \uC815\uD655\uB3C4\uB97C \uB192\uC785\uB2C8\uB2E4.",
  },
  {
    name: "CoreTex",
    title: "\uC0AC\uACE0\u00B7\uAD6C\uC870\uD654 \uC5F0\uAD6C\uC18C.",
    desc: "\uC778\uAC04\uC758 \uC0AC\uACE0 \uD750\uB984, \uCC3D\uC758\uC131, \uB17C\uB9AC \uD328\uD134\uC744 \uB2E4\uB8E8\uBA70\nLQI\uC758 \uAE30\uBC18\uC774 \uB429\uB2C8\uB2E4.",
  },
] as const;

export default function AboutPage() {
  return (
    <PageShell>
      {(S) => (
        <>
          <SubpageHero
            style={S.subpageIntro}
            scrollTargetId="our-labs"
            hintMarginTop={S.scrollHintMargin}
          >
            <PageBrandHeader title="LNA" titleStyle={S.pageTitle} />
            <p style={S.lead}>
              {
                "LNA\uB294 \uC778\uAC04\uC5D0\uAC8C \uB2F5\uC744 \uC8FC\uB294 \uD68C\uC0AC\uAC00 \uC544\uB2C8\uB77C,\n\uC790\uC2E0\uC758 \uC0DD\uAC01\uC744 \uC774\uD574\uD558\uACE0 \uC2A4\uC2A4\uB85C \uB2F5\uC744 \uC120\uD0DD\uD560 \uC218 \uC788\uB3C4\uB85D\n\uC0DD\uAC01\uC758 \uAD6C\uC870\uC640 \uACBD\uB85C\uB97C \uBCF4\uC5EC\uC8FC\uB294 \uD68C\uC0AC\uC785\uB2C8\uB2E4."
              }
            </p>
            <p style={{ ...S.body, marginTop: S.paragraphGapTight }}>
              {
                "\uC6B0\uB9AC\uB294 \uC778\uAC04\uC758 \uC2E0\uD638\uB97C \uC77D\uACE0,\n\uADF8 \uAD6C\uC870\uC640 \uC758\uBBF8\uB97C \uBD84\uC11D\uD574\n\uC2A4\uC2A4\uB85C \uD310\uB2E8\uD560 \uC218 \uC788\uB294 \uC9C0\uB3C4\uB97C \uC124\uACC4\uD569\uB2C8\uB2E4."
              }
            </p>
          </SubpageHero>

          <section id="our-labs" style={{ ...S.block, paddingTop: S.sectionGap }}>
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
                {"note" in lab && lab.note ? (
                  <div
                    style={{
                      marginTop: 20,
                      fontSize: 12,
                      fontWeight: 500,
                      letterSpacing: "0.1em",
                      color: "rgba(0,0,0,0.38)",
                      lineHeight: 1.8,
                    }}
                  >
                    {lab.note}
                  </div>
                ) : null}
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
