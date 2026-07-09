"use client";

// Baseline y=12. Q(dip) -> R(up) -> S(down) -> baseline, tiled for seamless ECG sweep.
const WAVE_PATH =
  "M0 12 H42 L45 14.5 L49 2.5 L53 21 L57 12 H148";

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
