"use client";

import PageBrandHeader from "@/components/PageBrandHeader";
import PageShell from "@/components/PageShell";

export default function MissionPage() {
  return (
    <PageShell>
      {(S) => (
        <>
          <section style={S.pageHero}>
            <PageBrandHeader title="Mission" titleStyle={S.pageTitle} />
            <div style={S.quote}>
              {
                "\u201CTo reveal the human mind as it truly is,\nand to bring comfort\u201D"
              }
            </div>
          </section>

          <section style={{ ...S.block, paddingTop: S.sectionGap }}>
            <div style={S.sectionDivider}>
              <div style={S.sectionLabel}>Philosophy</div>
            </div>
            <div style={{ ...S.quoteKo, marginTop: S.paragraphGapTight }}>
              {
                "\u201C\uC228\uAE30\uC9C0 \uC54A\uB294 \uAC10\uC815.\n\uAFB8\uBBF8\uC9C0 \uC54A\uC740 \uC778\uAC04.\n\uC774\uD574\uAC00 \uB9CC\uB4DC\uB294 \uAC00\uC7A5 \uAE4A\uC740 \uC704\uB85C.\u201D"
              }
            </div>

            <p style={{ ...S.body, marginTop: S.sectionGap }}>
              {"\uC6B0\uB9AC\uB294 \uAC10\uC815\uC758 \uD30C\uB3D9\uC744\n\uC228\uAE30\uC9C0 \uC54A\uB294\uB2E4."}
            </p>
            <p style={{ ...S.body, marginTop: S.paragraphGapTight }}>
              {
                "\uB9D0 \uC18D\uC5D0 \uC2A4\uBA70 \uC788\uB294 \uC791\uC740 \uD754\uB4E4\uB9BC\uAE4C\uC9C0\n\uADF8\uB300\uB85C \uBC1B\uC544\uB4E4\uC778\uB2E4."
              }
            </p>
            <p style={{ ...S.body, marginTop: S.paragraphGapTight }}>
              {
                "\uC2A4\uC2A4\uB85C\uB3C4 \uC54C\uC9C0 \uBABB\uD588\uB358\n\uB9C8\uC74C\uC758 \uBCC0\uD654\uAE4C\uC9C0 \uD558\uB098\uC758 \uC2E0\uD638\uB85C\n\uC774\uD574\uD55C\uB2E4."
              }
            </p>

            <p style={{ ...S.body, marginTop: S.paragraphGap }}>
              {
                "LNA Corp\uC758 \uBAA8\uB4E0 OS\uB294\n\uAC10\uC815\uC774 \uB4DC\uB7EC\uB098\uB294 \uBC29\uC2DD\uC744 \uAE30\uB85D\uD558\uACE0,\n\uADF8 \uC774\uD574\uAC00 \uC704\uB85C\uB85C \uC774\uC5B4\uC9C0\uB294 \uACFC\uC815\uC744\n\uC815\uAD50\uD558\uAC8C \uC124\uACC4\uD558\uB294 \uAE30\uC220\uC774\uB2E4."
              }
            </p>
            <p style={{ ...S.body, marginTop: S.paragraphGapTight }}>
              {"\uC6B0\uB9AC\uB294 \uC778\uAC04\uC744 \uAFB8\uBBF8\uC9C0 \uC54A\uB294\uB2E4."}
            </p>
            <p style={{ ...S.body, marginTop: S.paragraphGapTight }}>
              {"\uC778\uAC04\uC744 \uB2E8\uC21C\uD654\uD558\uC9C0 \uC54A\uB294\uB2E4."}
            </p>
            <p style={{ ...S.body, marginTop: S.paragraphGapTight }}>
              {"\uC778\uAC04\uC744 \uC774\uD574\uD558\uACE0, \uADF8\uB9AC\uACE0 \uC704\uB85C\uD55C\uB2E4."}
            </p>
          </section>
        </>
      )}
    </PageShell>
  );
}
