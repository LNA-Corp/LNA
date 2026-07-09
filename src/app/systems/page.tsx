"use client";

import PageBrandHeader from "@/components/PageBrandHeader";
import PageShell from "@/components/PageShell";

const SYSTEMS = [
  {
    name: "LNA",
    meta: "Core Theory",
    desc: "\uC778\uAC04\uC758 \uAC10\uC815\u00B7\uC5B8\uC5B4\u00B7\uC0AC\uACE0\uB97C \uD558\uB098\uC758 Wave Architecture\uB85C \uC7AC\uAD6C\uC131\uD55C\nLNA Corp \uAE30\uC220\uC758 \uADFC\uBCF8 OS.",
  },
  {
    name: "LTS",
    meta: "Life Thoughts System",
    desc: "\uC0AC\uACE0\uC758 \uAD6C\uC870, \uC5B8\uC5B4\uC758 \uD328\uD134, \uC9C0\uB2A5\uC758 \uD750\uB984\uC744 \uB2E4\uB8E8\uB294 LNA \uAE30\uBC18 \uC778\uC9C0 OS.",
    projectTitle: "Project",
    project:
      "LQI - Life Quotient Intelligence LTS\uC758 \uCCAB \uD504\uB85C\uC81D\uD2B8\uB85C,\n\uC0AC\uACE0\u00B7\uC5B8\uC5B4\u00B7\uCC3D\uC870\u00B7\uC9C1\uAD00\uC744 \uD30C\uB3D9 \uAE30\uBC18 \uC9C0\uD45C\uB85C \uC815\uAD50\uD558\uAC8C \uCE21\uC815\uD569\uB2C8\uB2E4.",
  },
  {
    name: "LSR",
    meta: "Life Self Reflection",
    desc: "\uC0AC\uB78C\uC758 \uB0B4\uBA74\uC744 \uC774\uB8E8\uB294\n\uB2E4\uC591\uD55C \uCD95\uC744 \uC77D\uC5B4\uB0B4\uACE0, \uAC10\uC815\u00B7\uAD00\uACC4\u00B7\uC2EC\uB9AC\uC758 \uD328\uD134\uC744 \uBA85\uD655\uD55C \uD30C\uB3D9 \uAD6C\uC870\uB85C \uB4DC\uB7EC\uB0B4\uB294 OS.",
    projectTitle: "Project",
    project:
      "RDI - Relationship Dynamics Indicator LSR\uC758 \uCCAB \uD504\uB85C\uC81D\uD2B8\uB85C, \uAC10\uC815\u00B7\uAD00\uACC4 \uC131\uD5A5\uC744 \uD30C\uB3D9 \uAE30\uBC18\uC73C\uB85C \uBD84\uC11D\uD569\uB2C8\uB2E4.",
  },
] as const;

const ENGINES = [
  {
    name: "LNAR - Relationship",
    desc: "\uB300\uD654 \uC18D \uAC10\uC815, \uAD00\uACC4\uC758 \uD750\uB984, \uBB38\uC7A5\uC744 \uD30C\uB3D9\uC73C\uB85C \uBD84\uC11D\uD558\uB294 \uAD00\uACC4 \uD574\uC11D \uC5D4\uC9C4.\n\uAC10\uC815\uACFC \uAD00\uACC4\uC758 \uD750\uB984\uC744\n\uD30C\uB3D9\uC73C\uB85C \uC77D\uC2B5\uB2C8\uB2E4.",
  },
  {
    name: "LNAL - Literary",
    desc: "\uC2DC\u00B7\uBB38\uD559\u00B7\uC11C\uC0AC\uC758 \uC815\uC11C\uC640 \uB9AC\uB4EC\uC744 Wave \uD328\uD134\uC73C\uB85C \uD574\uC11D\uD558\uB294 \uBB38\uD559 \uBD84\uC11D \uC5D4\uC9C4.\n\uC2DC\u00B7\uBB38\uD559\uC758 \uC815\uC11C\uC640 \uAD6C\uC870\uB97C\n\uD30C\uB3D9\uC73C\uB85C \uD574\uC11D\uD569\uB2C8\uB2E4.",
  },
  {
    name: "LNAD - Direction",
    desc: "\uC5D0\uB108\uC9C0 \uD750\uB984, \uD589\uB3D9 \uD328\uD134, \uC0B6\uC758 \uBC29\uD5A5\uC131\uC744 \uD30C\uB3D9\uC73C\uB85C \uBAA8\uB378\uB9C1\uD558\uB294 \uBC29\uD5A5\uC131 \uC5D4\uC9C4.\n\uD589\uB3D9\uACFC \uC5D0\uB108\uC9C0\uC758 \uBC29\uD5A5\uC131\uC744\n\uD30C\uB3D9\uC73C\uB85C \uBAA8\uB378\uB9C1\uD569\uB2C8\uB2E4.",
  },
  {
    name: "ECE - Cascade",
    desc: "\uAC10\uC815\uC758 \uC2DC\uC791, \uBCC0\uD654\uC758 \uACB0,\n\uB300\uD654\uC758 \uD750\uB984\uC744 \uD30C\uB3D9\uC73C\uB85C \uBAA8\uB378\uB9C1\uD558\uB294\n\uC11C\uC0AC \uC5D4\uC9C4.\n\uAC10\uC815\uACFC \uC758\uBBF8\uC758 Cascade\uB97C\n\uD30C\uB3D9\uC73C\uB85C \uBAA8\uB378\uB9C1\uD569\uB2C8\uB2E4.",
  },
] as const;

export default function SystemsPage() {
  return (
    <PageShell>
      {(S) => (
        <>
          <section style={S.subpageHero}>
            <PageBrandHeader title="Systems" titleStyle={S.pageTitle} />
            <p style={S.lead}>
              {
                "LNA Corp\uC758 \uAE30\uC220\uC740 \uB2E8\uC77C\uD55C Wave Theory\n\uC704\uC5D0\uC11C \uC5EC\uB7EC \uC2DC\uC2A4\uD15C\uACFC \uC5D4\uC9C4\uC73C\uB85C \uD655\uC7A5\uB429\uB2C8\uB2E4."
              }
            </p>
          </section>

          {SYSTEMS.map((sys) => (
            <section key={sys.name} style={S.block}>
              <h2 style={S.itemTitle}>{sys.name}</h2>
              <div style={S.itemMeta}>{sys.meta}</div>
              <p style={S.itemDesc}>{sys.desc}</p>
              {"project" in sys && sys.project ? (
                <div style={{ marginTop: 48 }}>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: "0.16em",
                      color: "rgba(0,0,0,0.42)",
                      marginBottom: 14,
                    }}
                  >
                    {sys.projectTitle}
                  </div>
                  <p style={S.itemDesc}>{sys.project}</p>
                </div>
              ) : null}
            </section>
          ))}

          <section style={{ ...S.block, paddingTop: S.sectionGap }}>
            <div style={S.sectionDivider}>
              <div style={S.sectionLabel}>Engines</div>
            </div>
            {ENGINES.map((engine, idx) => (
              <div
                key={engine.name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  paddingTop: idx === 0 ? S.paragraphGap : 132,
                  paddingBottom: 8,
                }}
              >
                <h2 style={S.itemTitle}>{engine.name}</h2>
                <p style={S.itemDesc}>{engine.desc}</p>
              </div>
            ))}
          </section>
        </>
      )}
    </PageShell>
  );
}