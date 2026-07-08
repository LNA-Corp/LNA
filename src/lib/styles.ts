import type React from "react";

export function makeStyles(isMobile: boolean) {
  const wrap: React.CSSProperties = {
    minHeight: "100vh",
    background: "#ffffff",
    color: "#111",
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    overflowX: "hidden",
    display: "flex",
    flexDirection: "column",
  };

  const container: React.CSSProperties = {
    width: "100%",
    maxWidth: 640,
    margin: "0 auto",
    padding: isMobile ? "0 22px 72px" : "0 28px 96px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  };

  const hero: React.CSSProperties = {
    minHeight: "100svh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: isMobile ? "20px 0 96px" : "20px 0 112px",
  };

  const pageHero: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "center",
    padding: isMobile ? "88px 0 72px" : "120px 0 96px",
  };

  const block: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: isMobile ? "96px 0" : "128px 0",
  };

  const h1: React.CSSProperties = {
    margin: 0,
    fontSize: isMobile ? 50 : 68,
    lineHeight: 1,
    letterSpacing: "0.08em",
    color: "rgba(0,0,0,0.88)",
    fontWeight: 700,
  };

  const pageTitle: React.CSSProperties = {
    margin: 0,
    fontSize: isMobile ? 24 : 28,
    lineHeight: 1.2,
    letterSpacing: "0.18em",
    color: "rgba(0,0,0,0.84)",
    fontWeight: 650,
  };

  const heroMeta: React.CSSProperties = {
    marginTop: 16,
    fontSize: isMobile ? 14.5 : 15.5,
    fontWeight: 400,
    letterSpacing: "0.14em",
    color: "rgba(0,0,0,0.52)",
  };

  const body: React.CSSProperties = {
    margin: "52px 0 0",
    fontSize: isMobile ? 14 : 14.5,
    lineHeight: 2.4,
    letterSpacing: "0.12em",
    color: "rgba(0,0,0,0.52)",
    fontWeight: 400,
    wordBreak: "keep-all",
    maxWidth: 420,
    whiteSpace: "pre-line",
  };

  const quote: React.CSSProperties = {
    margin: "44px 0 0",
    fontSize: isMobile ? 15.5 : 16.5,
    lineHeight: 2.15,
    letterSpacing: "0.12em",
    color: "rgba(0,0,0,0.62)",
    fontWeight: 400,
    maxWidth: 460,
    whiteSpace: "pre-line",
  };

  const sectionLabel: React.CSSProperties = {
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: "0.36em",
    color: "rgba(0,0,0,0.42)",
    textTransform: "none",
    marginBottom: 0,
  };

  const itemTitle: React.CSSProperties = {
    margin: 0,
    fontSize: isMobile ? 16.5 : 17.5,
    fontWeight: 650,
    letterSpacing: "0.14em",
    color: "rgba(0,0,0,0.82)",
  };

  const itemMeta: React.CSSProperties = {
    marginTop: 18,
    fontSize: isMobile ? 13.5 : 14,
    fontWeight: 400,
    letterSpacing: "0.12em",
    color: "rgba(0,0,0,0.56)",
    lineHeight: 1.75,
  };

  const itemDesc: React.CSSProperties = {
    marginTop: 16,
    fontSize: isMobile ? 13.5 : 14,
    lineHeight: 2.15,
    letterSpacing: "0.12em",
    color: "rgba(0,0,0,0.46)",
    fontWeight: 400,
    whiteSpace: "pre-line",
    wordBreak: "keep-all",
    maxWidth: 360,
  };

  const footer: React.CSSProperties = {
    marginTop: "auto",
    paddingTop: 56,
    paddingBottom: isMobile ? 18 : 24,
    color: "rgba(0,0,0,0.38)",
    fontSize: 11,
    letterSpacing: "0.12em",
    lineHeight: 1.8,
    textAlign: "center",
  };

  return {
    wrap,
    container,
    hero,
    pageHero,
    block,
    h1,
    pageTitle,
    heroMeta,
    body,
    quote,
    sectionLabel,
    itemTitle,
    itemMeta,
    itemDesc,
    footer,
  };
}

export type Styles = ReturnType<typeof makeStyles>;