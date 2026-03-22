import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MasifSpecial | AI & Otomasyon Ajansı";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#080c14",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "20%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(14,165,233,0.08)",
            filter: "blur(80px)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            border: "1px solid rgba(14,165,233,0.3)",
            borderRadius: 999,
            padding: "8px 20px",
            marginBottom: 32,
            color: "#0ea5e9",
            fontSize: 18,
          }}
        >
          AI & Otomasyon Ajansı
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 68,
            fontWeight: 800,
            color: "white",
            textAlign: "center",
            lineHeight: 1.1,
            maxWidth: 900,
            marginBottom: 24,
          }}
        >
          İş Süreçlerinizi{" "}
          <span style={{ color: "#0ea5e9" }}>Yapay Zeka</span> ile
          <br />
          Geleceğe Taşıyın
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            color: "#64748b",
            textAlign: "center",
            maxWidth: 700,
          }}
        >
          masifspecial.com
        </div>
      </div>
    ),
    size
  );
}
