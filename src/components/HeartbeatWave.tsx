"use client";

const WAVE_PATH =
  "M0 12 H48 L54 12 L58 4 L62 20 L66 8 L70 12 H148";

export default function HeartbeatWave() {
  return (
    <div className="heartbeat-wave" aria-hidden="true">
      <div className="heartbeat-wave__track">
        <svg viewBox="0 0 148 24" preserveAspectRatio="none">
          <path
            d={WAVE_PATH}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg viewBox="0 0 148 24" preserveAspectRatio="none">
          <path
            d={WAVE_PATH}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
