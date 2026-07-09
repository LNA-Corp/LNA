export default function HelixMark({ size = 14 }: { size?: number }) {
  const height = Math.round(size * 1.55);
  return (
    <svg
      width={size * 1.8}
      height={height}
      viewBox="0 0 36 56"
      fill="none"
      aria-hidden="true"
      style={{ marginBottom: 10, display: "block" }}
    >
      <path
        d="M4 4C4 14 32 14 32 24C32 34 4 34 4 44C4 50 12 52 18 52"
        stroke="rgba(0,0,0,0.32)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M32 4C32 14 4 14 4 24C4 34 32 34 32 44C32 50 24 52 18 52"
        stroke="rgba(0,0,0,0.16)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
