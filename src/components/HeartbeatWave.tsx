"use client";

export default function HeartbeatWave() {
  const path =
    "M0 12 H28 L36 12 L40 4 L44 20 L48 8 L52 12 H88 L96 12 L100 4 L104 20 L108 8 L112 12 H160";

  return (
    <div className="heartbeat-wave" aria-hidden="true">
      <div className="heartbeat-wave__track">
        <svg viewBox="0 0 160 24" preserveAspectRatio="none">
          <path
            d={path}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg viewBox="0 0 160 24" preserveAspectRatio="none">
          <path
            d={path}
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
