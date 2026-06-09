import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Vemos Vamos — Acciones hablan más fuerte."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const STICKER_URL =
  "https://firebasestorage.googleapis.com/v0/b/groovy-ego-462522-v2.firebasestorage.app/o/vemos-vamos%2Fvv-hero-transparent.png?alt=media"

export default async function OpenGraphImage() {
  // Fetch the brand sticker at request time and inline as base64. ImageResponse
  // doesn't follow remote URLs reliably across all renderers — embedding is safest.
  // Falls back to typography-only if the fetch fails.
  let stickerDataUrl: string | null = null
  try {
    const response = await fetch(STICKER_URL, { cache: "force-cache" })
    if (response.ok) {
      const bytes = await response.arrayBuffer()
      const base64 = Buffer.from(bytes).toString("base64")
      stickerDataUrl = `data:image/png;base64,${base64}`
    }
  } catch {
    stickerDataUrl = null
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#eeebe3",
          display: "flex",
          flexDirection: "row",
          position: "relative",
          fontFamily: "ui-serif, Georgia, Cambria, 'Times New Roman', serif",
          color: "#0d1f2d",
        }}
      >
        {/* Soft red warmth, lower-right */}
        <div
          style={{
            position: "absolute",
            bottom: "-180px",
            right: "-180px",
            width: "560px",
            height: "560px",
            borderRadius: "9999px",
            background: "radial-gradient(circle, rgba(202,0,19,0.16) 0%, rgba(202,0,19,0) 70%)",
            display: "flex",
          }}
        />
        {/* Soft navy depth, upper-left */}
        <div
          style={{
            position: "absolute",
            top: "-160px",
            left: "-160px",
            width: "480px",
            height: "480px",
            borderRadius: "9999px",
            background: "radial-gradient(circle, rgba(26,42,92,0.10) 0%, rgba(26,42,92,0) 70%)",
            display: "flex",
          }}
        />

        {stickerDataUrl ? (
          <>
            {/* LEFT — Sticker centerpiece */}
            <div
              style={{
                width: "55%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "48px",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={stickerDataUrl}
                width={500}
                height={500}
                alt=""
                style={{
                  width: 500,
                  height: 500,
                  objectFit: "contain",
                  filter: "drop-shadow(0 18px 28px rgba(0,0,0,0.18))",
                }}
              />
            </div>

            {/* RIGHT — Brand stack */}
            <div
              style={{
                width: "45%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "72px 80px 72px 0",
              }}
            >
              {/* Eyebrow */}
              <div
                style={{
                  display: "flex",
                  fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
                  fontSize: 16,
                  fontWeight: 700,
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: "#ca0013",
                  marginBottom: 32,
                }}
              >
                A Bicultural Creative Media System
              </div>

              {/* Italic tagline */}
              <div
                style={{
                  display: "flex",
                  fontSize: 56,
                  fontWeight: 900,
                  fontStyle: "italic",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  color: "#0d1f2d",
                  marginBottom: 36,
                }}
              >
                Acciones hablan más fuerte.
              </div>

              {/* Operating triplet */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
                  fontSize: 16,
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#1a2a5c",
                  marginBottom: 56,
                }}
              >
                See the signal · Shape the story · Move the market
              </div>

              {/* URL */}
              <div
                style={{
                  display: "flex",
                  fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
                  fontSize: 18,
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#1a2a5c",
                  opacity: 0.7,
                }}
              >
                vemosvamos.com
              </div>
            </div>
          </>
        ) : (
          /* FALLBACK — typography-only version when sticker isn't on disk yet */
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              padding: "80px",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "#1a2a5c",
              }}
            >
              Refresh · Texas · 2026
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  fontSize: 200,
                  fontWeight: 900,
                  lineHeight: 0.92,
                  letterSpacing: "-0.04em",
                  color: "#0d1f2d",
                }}
              >
                Vemos Vamos
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: 24,
                  fontSize: 48,
                  fontStyle: "italic",
                  fontWeight: 900,
                  color: "#0d1f2d",
                  opacity: 0.85,
                }}
              >
                Acciones hablan más fuerte.
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#1a2a5c",
                opacity: 0.7,
              }}
            >
              <div style={{ display: "flex" }}>See the signal · Shape the story · Move the market</div>
              <div style={{ display: "flex" }}>vemosvamos.com</div>
            </div>
          </div>
        )}
      </div>
    ),
    { ...size },
  )
}
