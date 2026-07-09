"use client";

export default function HeartbeatWave() {
  return (
    <div className="heartbeat-wave" aria-hidden="true">
      <svg
        className="heartbeat-wave__pulse"
        viewBox="0 0 72 24"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M0 12 H16 L22 12 L26 4 L30 20 L34 8 L38 12 H72"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
