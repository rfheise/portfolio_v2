import { ImageResponse } from "next/og";

import { siteConfig } from "../site";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          backgroundColor: "#050814",
          backgroundImage:
            "radial-gradient(900px 520px at 10% 10%, rgba(43, 99, 217, 0.22), transparent 60%), radial-gradient(900px 520px at 90% 0%, rgba(227, 193, 90, 0.24), transparent 60%)",
          color: "rgba(251, 245, 234, 0.96)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 60, fontWeight: 800, letterSpacing: -1 }}>
            {siteConfig.title}
          </div>
          <div style={{ fontSize: 28, opacity: 0.88, maxWidth: 980, lineHeight: 1.25 }}>
            {siteConfig.description}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12, opacity: 0.92 }}>
          <div
            style={{
              width: 18,
              height: 18,
              transform: "rotate(45deg)",
              borderRadius: 4,
              background: "linear-gradient(135deg, #e3c15a, #2b63d9)",
            }}
          />
          <div style={{ fontSize: 22, letterSpacing: 0.6 }}>{siteConfig.url}</div>
        </div>
      </div>
    ),
    size
  );
}

