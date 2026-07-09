"use client";

import type { Styles } from "@/lib/styles";

export default function SiteFooter({
  S,
  muted = false,
}: {
  S: Styles;
  muted?: boolean;
}) {
  return (
    <footer
      id="site-footer"
      style={{
        ...S.footer,
        opacity: muted ? 0.55 : 1,
      }}
    >
      <div
        style={{
          fontWeight: 500,
          color: muted ? "rgba(0,0,0,0.38)" : "rgba(0,0,0,0.42)",
        }}
      >
        {"\u00A9"} {new Date().getFullYear()} LNA Corp. All rights reserved.
      </div>
      <div style={{ marginTop: 3 }}>
        <a
          href="mailto:contact@lna-corp.com"
          style={{
            color: muted ? "rgba(0,0,0,0.34)" : "rgba(0,0,0,0.42)",
            textDecoration: "none",
            fontWeight: 450,
          }}
        >
          contact@lna-corp.com
        </a>
      </div>
    </footer>
  );
}