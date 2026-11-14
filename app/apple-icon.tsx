import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          borderRadius: 36,
        }}
      >
        <svg width="110" height="110" viewBox="0 0 64 64">
          <polygon points="13,13 29,13 13,43.4" fill="#ffffff" />
          <polygon points="33.5,13 38.5,13 18.5,51 13.5,51" fill="#ffffff" />
          <polygon points="41.5,13 46.5,13 26.5,51 21.5,51" fill="#ffffff" />
          <polygon points="51,20.6 51,51 35,51" fill="#ffffff" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
