import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/constants";

export const alt = `${siteConfig.name} preview image`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "linear-gradient(180deg, rgb(249, 244, 237), rgb(240, 229, 216))",
          color: "rgb(30, 27, 24)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "rgb(143, 53, 27)",
          }}
        >
          Next.js Site Starter
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            maxWidth: "920px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 82,
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            {siteConfig.ogImageTitle}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              lineHeight: 1.35,
              color: "rgb(95, 86, 77)",
            }}
          >
            {siteConfig.ogImageSubtitle}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
