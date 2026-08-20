import type React from "react";

export function makeStyles(isMobile: boolean) {
  const wrap: React.CSSProperties = {
    minHeight: "100vh",
    background: "#fbfaf7",
    color: "#161412",
    fontFamily:
      'var(--font-sans), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
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

  const lineStep = isMobile ? Math.round(13.5 * 2.35) : Math.round(14 * 2.35);

  const hero: React.CSSProperties = {
    minHeight: "100svh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "center",
    padding: isMobile
      ? `calc(32svh - ${lineStep}px) 0 96px`
      : `calc(36svh - ${lineStep}px) 0 112px`,
  };

  const subpageHero: React.CSSProperties = {
    minHeight: "calc(100svh - 80px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "center",
    padding: isMobile
      ? `calc(36svh - ${Math.round(14.5 * 2.2 * 3)}px) 0 48px`
      : `calc(40svh - ${Math.round(15 * 2.2 * 3)}px) 0 56px`,
  };

  const subpageIntro: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "center",
    padding: isMobile
      ? `calc(36svh - ${Math.round(14.5 * 2.2 * 3)}px) 0 72px`
      : `calc(40svh - ${Math.round(15 * 2.2 * 3)}px) 0 88px`,
  };

  const subpageIntroWithTail: React.CSSProperties = {
    ...subpageIntro,
    paddingBottom: isMobile ? 72 + lineStep : 88 + lineStep,
  };

  const block: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: isMobile ? "112px 0" : "144px 0",
  };

  const sectionGap = isMobile ? 96 : 120;
  const paragraphGap = isMobile ? 72 : 96;
  const paragraphGapTight = isMobile ? 48 : 64;
  const scrollHintMargin = 34 + lineStep;
  const introTail = lineStep;
  const contentAfterIntro: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    paddingTop: sectionGap,
    paddingBottom: isMobile ? 112 : 144,
  };

  const h1: React.CSSProperties = {
    margin: 0,
    fontFamily: "var(--font-serif), serif",
    fontSize: isMobile ? 52 : 72,
    lineHeight: 1.05,
    letterSpacing: "0.02em",
    color: "rgba(0,0,0,0.9)",
    fontWeight: 600,
  };

  const pageTitle: React.CSSProperties = {
    margin: 0,
    fontFamily: "var(--font-serif), serif",
    fontSize: isMobile ? 26 : 30,
    lineHeight: 1.2,
    letterSpacing: "0.06em",
    color: "rgba(0,0,0,0.86)",
    fontWeight: 600,
    fontStyle: "italic",
  };

  const heroMeta: React.CSSProperties = {
    marginTop: 16,
    fontSize: isMobile ? 14.5 : 15.5,
    fontWeight: 400,
    letterSpacing: "0.14em",
    color: "rgba(0,0,0,0.48)",
  };

  const heroHook: React.CSSProperties = {
    marginTop: isMobile ? 28 : 32,
    fontSize: isMobile ? 15 : 16,
    lineHeight: 1.85,
    letterSpacing: "0.06em",
    color: "rgba(0,0,0,0.62)",
    fontWeight: 500,
    wordBreak: "keep-all",
    maxWidth: 420,
  };

  const heroTagline: React.CSSProperties = {
    marginTop: isMobile ? 20 : 24,
    fontSize: isMobile ? 14.5 : 15,
    lineHeight: 2.2,
    letterSpacing: "0.08em",
    color: "rgba(0,0,0,0.40)",
    fontWeight: 400,
    wordBreak: "keep-all",
    maxWidth: 420,
    whiteSpace: "pre-line",
  };

  const heroSteps: React.CSSProperties = {
    marginTop: isMobile ? 32 : 40,
    fontSize: isMobile ? 12.5 : 13,
    lineHeight: 1.9,
    letterSpacing: "0.14em",
    color: "rgba(0,0,0,0.48)",
    fontWeight: 500,
    maxWidth: 420,
  };

  const heroBoundary: React.CSSProperties = {
    marginTop: isMobile ? 16 : 18,
    fontSize: isMobile ? 13 : 13.5,
    lineHeight: 1.75,
    letterSpacing: "0.1em",
    color: "rgba(0,0,0,0.52)",
    fontWeight: 500,
    wordBreak: "keep-all",
    maxWidth: 420,
  };

  const lead: React.CSSProperties = {
    margin: `${isMobile ? 56 : 64}px 0 0`,
    fontSize: isMobile ? 14.5 : 15,
    lineHeight: 2.2,
    letterSpacing: "0.08em",
    color: "rgba(0,0,0,0.58)",
    fontWeight: 400,
    wordBreak: "keep-all",
    maxWidth: 420,
    whiteSpace: "pre-line",
  };

  const body: React.CSSProperties = {
    margin: 0,
    fontSize: isMobile ? 13.5 : 14,
    lineHeight: 2.35,
    letterSpacing: "0.06em",
    color: "rgba(0,0,0,0.46)",
    fontWeight: 400,
    wordBreak: "keep-all",
    maxWidth: 420,
    whiteSpace: "pre-line",
  };

  const quote: React.CSSProperties = {
    margin: `${isMobile ? 44 : 48}px 0 0`,
    fontFamily: "var(--font-serif), serif",
    fontStyle: "italic",
    fontSize: isMobile ? 17 : 19,
    lineHeight: 1.85,
    letterSpacing: "0.02em",
    color: "rgba(0,0,0,0.68)",
    fontWeight: 500,
    maxWidth: 460,
    whiteSpace: "pre-line",
  };

  const quoteKo: React.CSSProperties = {
    margin: `${isMobile ? 44 : 48}px 0 0`,
    fontSize: isMobile ? 16 : 17,
    lineHeight: 2,
    letterSpacing: "0.06em",
    color: "rgba(0,0,0,0.62)",
    fontWeight: 400,
    maxWidth: 460,
    whiteSpace: "pre-line",
    wordBreak: "keep-all",
  };

  const sectionLabel: React.CSSProperties = {
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: "0.36em",
    color: "rgba(0,0,0,0.42)",
    textTransform: "none",
    marginBottom: 0,
  };

  const sectionDivider: React.CSSProperties = {
    width: "100%",
    maxWidth: 420,
    borderTop: "1px solid rgba(0,0,0,0.05)",
    paddingTop: paragraphGapTight,
  };

  const contentRule: React.CSSProperties = {
    width: "100%",
    maxWidth: 420,
    borderTop: "1px solid rgba(0,0,0,0.05)",
    marginBottom: paragraphGap,
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
    lineHeight: 2.2,
    letterSpacing: "0.06em",
    color: "rgba(0,0,0,0.46)",
    fontWeight: 400,
    whiteSpace: "pre-line",
    wordBreak: "keep-all",
    maxWidth: 360,
  };

  const footer: React.CSSProperties = {
    marginTop: "auto",
    paddingTop: 56 + lineStep,
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
    subpageHero,
    subpageIntro,
    subpageIntroWithTail,
    block,
    contentAfterIntro,
    h1,
    pageTitle,
    heroMeta,
    heroHook,
    heroTagline,
    heroSteps,
    heroBoundary,
    lead,
    body,
    quote,
    quoteKo,
    sectionLabel,
    sectionDivider,
    contentRule,
    sectionGap,
    paragraphGap,
    paragraphGapTight,
    lineStep,
    scrollHintMargin,
    introTail,
    itemTitle,
    itemMeta,
    itemDesc,
    footer,
  };
}

export type Styles = ReturnType<typeof makeStyles>;
