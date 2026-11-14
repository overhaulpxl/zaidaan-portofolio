import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";

export const alt = "Project Archive — Zaidaan Zalfaa";
export const size = { width: 1200, height: 630 };
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

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: "0.22em",
              color: "#aaaab2",
              textTransform: "uppercase",
            }}
          >
            Project Archive
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              fontWeight: 800,
              lineHeight: 0.98,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
            }}
          >
            Work, Built<br />For Real Users.
          </div>
          <div
            style={{
              display: "flex",
              color: "#c9c9cf",
              fontSize: 30,
              lineHeight: 1.3,
            }}
          >
            Discord bots · Websites · Automation · Community systems
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
