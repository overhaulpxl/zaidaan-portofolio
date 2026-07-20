import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";

export const alt = "Zaidaan Zalfaa portfolio social preview";
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
          background: "#050506",
          color: "#f5f5f7",
          padding: "72px 76px 64px",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid rgba(255,255,255,0.18)",
            paddingBottom: 28,
            color: "#aaaab2",
            fontSize: 24,
          }}
        >
          <span>{siteConfig.location.locality}, {siteConfig.location.region}</span>
          <span>{siteConfig.contact.website}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              fontSize: 82,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.04em",
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: 980,
              color: "#c9c9cf",
              fontSize: 35,
              lineHeight: 1.25,
              letterSpacing: "-0.02em",
            }}
          >
            Customer Service · Operations · Digital Support
          </div>
        </div>

        <div
          style={{
            width: "100%",
            height: 10,
            display: "flex",
            background: "#f5f5f7",
          }}
        />
      </div>
    ),
    size,
  );
}
