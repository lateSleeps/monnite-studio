import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Monnite Studio — Jasa Pembuatan Website & Design Agency Bali";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#000000",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: logo */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ color: "#ffffff", fontSize: "22px", fontWeight: 600, letterSpacing: "-0.5px" }}>
            Monnite Studio
          </span>
        </div>

        {/* Middle: heading */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: "72px",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-2px",
              maxWidth: "900px",
            }}
          >
            Design + Build.
            <br />
            <span style={{ color: "#8a8a8a" }}>One Studio.</span>
          </div>
          <div style={{ color: "#8a8a8a", fontSize: "24px", fontWeight: 400, maxWidth: "680px", lineHeight: 1.5 }}>
            Jasa pembuatan website profesional & design agency di Bali, Tabanan.
          </div>
        </div>

        {/* Bottom: value props + URL */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", gap: "40px" }}>
            {["4–8 weeks", "Fixed-price", "Partner, not vendor"].map((v) => (
              <div
                key={v}
                style={{
                  color: "#ffffff",
                  fontSize: "14px",
                  fontWeight: 500,
                  padding: "8px 16px",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "4px",
                  letterSpacing: "0.5px",
                }}
              >
                {v}
              </div>
            ))}
          </div>
          <span style={{ color: "#8a8a8a", fontSize: "16px", fontWeight: 500 }}>
            monnitestudio.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
