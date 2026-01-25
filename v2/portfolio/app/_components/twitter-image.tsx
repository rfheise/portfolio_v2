import { ImageResponse } from "next/og";

import { siteConfig } from "../site";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          backgroundColor: "#050814",
          backgroundImage:
            "radial-gradient(900px 520px at 15% 20%, rgba(43, 99, 217, 0.20), transparent 60%), radial-gradient(900px 520px at 90% 10%, rgba(227, 193, 90, 0.22), transparent 60%)",
          color: "rgba(251, 245, 234, 0.96)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 64, fontWeight: 850, letterSpacing: -1 }}>
            {siteConfig.title}
          </div>
          <div style={{ fontSize: 30, opacity: 0.88, maxWidth: 980, lineHeight: 1.25 }}>
            {siteConfig.description}
          </div>
        </div>
      </div>
    ),
    size
  );
}

