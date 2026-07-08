"use client";

import { useEffect, useState } from "react";

export function useIsMobile() {
  const [m, setM] = useState(true);

  useEffect(() => {
    const calc = () => setM(window.innerWidth < 640);
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  return m;
}