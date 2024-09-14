import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

// Initialize Prisma Client
const prisma = new PrismaClient().$extends(withAccelerate());

// GET request handler to fetch a blog by ID
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {

    const blogId = params.id;

    // Fetch the blog post by id
    const blog = await prisma.blog.findUnique({
      where: { id: blogId },
    });

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
