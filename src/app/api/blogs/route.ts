import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

// Initialize Prisma Client
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
}).$extends(withAccelerate());

// Handler for POST requests using NextResponse
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body.title || !body.content || !body.author) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    const blog = await prisma.blog.create({
      data: {
        title: body.title,
        content: body.content,
        author: body.author,
        description: body.description || '',
        coment: body.coment || 0,
        category: body.category || '',
        views: body.views || 0,
        published: body.published || false,
        imageUrl: body.imageUrl || '',
      },
    });
    console.log(blog)
    return NextResponse.json({ id: blog.id }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

// Handler for GET requests using NextResponse
// Handler for GET requests using NextResponse
export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        author: true,
        category: true,
        views: true,
        coment:true,
        createdAt: true,
        imageUrl:true,
      },
    });

    // Return the list of blogs in the response
    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
