import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// Manual trigger: GET /api/revalidate?secret=your-secret
export async function GET(req: NextRequest) {
  if (!process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Server misconfigured" }, { status: 500 });
  }

  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  revalidatePath("/", "layout");

  return NextResponse.json({ revalidated: true });
}

// Sanity webhook trigger: POST /api/revalidate (with x-sanity-secret header)
export async function POST(req: NextRequest) {
  if (!process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Server misconfigured" }, { status: 500 });
  }

  const secret = req.headers.get("x-sanity-secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  revalidatePath("/", "layout");

  return NextResponse.json({ revalidated: true });
}
