export default function HelixMark({ size = 14 }: { size?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/lna-symbol.png"
      alt="LNA"
      width={size}
      height={Math.round(size * 1.55)}
      style={{
        width: size,
        height: "auto",
        opacity: 0.5,
        marginBottom: 8,
        objectFit: "contain",
        mixBlendMode: "multiply",
      }}
    />
  );
}