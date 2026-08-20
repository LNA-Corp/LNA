"use client";

import PageBrandHeader from "@/components/PageBrandHeader";
import PageShell from "@/components/PageShell";
import SubpageHero from "@/components/SubpageHero";
import type { Styles } from "@/lib/styles";

const DOMAINS = [
  {
    name: "Relationship",
    question:
      "\uB098\uB294 \uC774 \uAD00\uACC4\uC5D0\uC11C \uC65C \uC774\uB807\uAC8C \uBC18\uC751\uD558\uBAE0, \uC6B0\uB9AC\uB294 \uC5B4\uB514\uB85C \uC6C0\uC9C1\uC774\uB294\uAC00?",
    products: "RDI \u00B7 RDI-U \u00B7 DualPulse",
  },
  {
    name: "Desire",
    question: "\uB098\uB294 \uC65C \uC774\uAC83\uC744 \uC6D0\uD558\uB294\uAC00?",
    products: "GAP",
  },
  {
    name: "Decision",
    question: "\uB098\uB294 \uC65C \uC774 \uC120\uD0DD \uC55E\uC5D0\uC11C \uBA48\uCD94\uB294\uAC00?",
    products: "CDI",
  },
  {
    name: "Repetition",
    question:
      "\uB098\uB294 \uC65C \uC54C\uBA74\uC11C\uB3C4 \uAC19\uC740 \uC120\uD0DD\uC73C\uB85C \uB3CC\uC544\uAC00\uB294\uAC00?",
    products: "PSI",
  },
  {
    name: "Thinking",
    question:
      "\uB098\uB294 \uD604\uC2E4\uACFC \uC815\uBCF4\uB97C \uC5B4\uB5BB\uAC8C \uAD6C\uC870\uD654\uD558\uACE0 \uC7AC\uAD6C\uC131\uD558\uB294\uAC00?",
    products: "LQI (\uC608\uC815)",
  },
] as const;

const STEPS = [
  {
    step: "01",
    name: "Observe",
    desc: "\uC0AC\uC6A9\uC790\uC758 \uC5B8\uC5B4\uC5D0\uC11C \uD604\uC7AC \uC704\uCE58\uB97C \uAD00\uCC30\uD569\uB2C8\uB2E4.",
  },
  {
    step: "02",
    name: "Separate",
    desc: "\uC11C\uB85C \uB2E4\uB978 \uCE35\uC758 \uC0DD\uAC01\uC774 \uC11C\uB85C \uCBB0\uC778 \uACBD\uACC4\uB97C \uB2E4\uC2DC \uADF8\uB9BD\uB2C8\uB2E4.",
  },
  {
    step: "03",
    name: "Structure",
    desc: "\uC65C \uADF8\uB7F0 \uAC00\uCE58\uAC00 \uCDA9\uB3CC\uD558\uACE0, \uC0AC\uACE0\uAC00 \uBC18\uBCF5\uB418\uB294\uC9C0 \uAD6C\uC870\uD654\uD569\uB2C8\uB2E4.",
  },
  {
    step: "04",
    name: "Navigate",
    desc: "\uD604\uC7AC \uC704\uCE58\uC5D0\uC11C \uAC00\uB2A5\uD55C \uACBD\uB85C\uB97C \uBCF4\uC5EC\uC90D\uB2C8\uB2E4.",
  },
  {
    step: "05",
    name: "Decide",
    desc: "\uC5B4\uB290 \uAE38\uC744 \uAC78\uC744\uC9C0\uB294 \uC778\uAC04\uC774 \uACB0\uC815\uD569\uB2C8\uB2E4.",
  },
] as const;

function DomainList({ S, domains }: { S: Styles; domains: typeof DOMAINS }) {
  return (
    <>
      {domains.map((domain, idx) => (
        <div
          key={domain.name}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            paddingTop: idx === 0 ? S.paragraphGap : 132,
            paddingBottom: 8,
          }}
        >
          <h2 style={S.itemTitle}>{domain.name}</h2>
          <p style={S.itemDesc}>{domain.question}</p>
          <div
            style={{
              marginTop: 20,
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.1em",
              color: "rgba(0,0,0,0.38)",
            }}
          >
            {domain.products}
          </div>
        </div>
      ))}
    </>
  );
}

export default function SystemsPage() {
  return (
    <PageShell>
      {(S) => (
        <>
          <SubpageHero
            style={S.subpageIntroWithTail}
            scrollTargetId="systems-content"
            hintMarginTop={S.scrollHintMargin}
          >
            <PageBrandHeader title="Systems" titleStyle={S.pageTitle} />
            <p style={S.lead}>
              {
                "LNA Corp\uC758 \uAE30\uC220\uC740 \uD558\uB098\uC758 \uC2EC\uB9AC \uC774\uB860 \uC704\uC5D0 \uC788\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\nHuman Navigation Architecture \uC704\uC5D0\uC11C \uB2E4\uC12F \uAC1C\uC758 Domain\uC73C\uB85C \uD3BC\uCE64\uC838\uC785\uB2C8\uB2E4."
              }
            </p>
          </SubpageHero>

          <section id="systems-content" style={S.contentAfterIntro}>
            <div style={S.contentRule} aria-hidden="true" />
            <div style={S.sectionLabel}>Human Navigation</div>
            <p style={{ ...S.body, marginTop: S.paragraphGapTight }}>
              {
                "AI analyzes \u00B7 LNA structures \u00B7 You decide\n\uACB0\uC815\uC740 \uB2F9\uC2E0\uC758 \uBABF\uC785\uB2C8\uB2E4."
              }
            </p>
            {STEPS.map((item, idx) => (
              <div
                key={item.name}
                style={{
                  marginTop: idx === 0 ? S.paragraphGap : S.paragraphGapTight,
                  maxWidth: 360,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.16em",
                    color: "rgba(0,0,0,0.42)",
                  }}
                >
                  {`${item.step} ${item.name}`}
                </div>
                <p style={{ ...S.itemDesc, marginTop: 10 }}>{item.desc}</p>
              </div>
            ))}
          </section>

          <section style={{ ...S.block, paddingTop: S.sectionGap }}>
            <div style={S.sectionDivider}>
              <div style={S.sectionLabel}>Domains</div>
            </div>
            <DomainList S={S} domains={DOMAINS} />
          </section>
        </>
      )}
    </PageShell>
  );
}
