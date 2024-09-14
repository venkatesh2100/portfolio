import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest
) {
  const { searchParams } = new URL(req.url);
  const blogId = searchParams.get("id"); // Safely access params and id
  if (!blogId) {
    return NextResponse.json({
      error: "Blog ID is missing.",
    }, { status: 400 });
  }

  return NextResponse.json({
    message: `Received Blog ID: ${blogId}`,
  });
}
