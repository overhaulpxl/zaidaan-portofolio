import { NextRequest, NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";

export const dynamic = "force-static";

export async function GET(request: NextRequest) {
  try {
    const filePath = path.join(process.cwd(), "public", "documents", "zaidaan-zalfaa-cv.pdf");
    const fileBuffer = await fs.readFile(filePath);

    const { searchParams } = new URL(request.url);
    const isInline = searchParams.get("view") === "true" || searchParams.get("inline") === "true";

    const disposition = isInline
      ? 'inline; filename="Zaidaan_Zalfaa_CV.pdf"'
      : 'attachment; filename="Zaidaan_Zalfaa_CV.pdf"';

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": disposition,
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
      },
    });
  } catch {
    return new NextResponse("CV document not found", { status: 404 });
  }
}
