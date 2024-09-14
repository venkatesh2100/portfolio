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


export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const blogId = params?.id;

  if (!blogId) {
    return NextResponse.json({
      error: "Blog ID is missing.",
    }, { status: 400 });
  }

  const blog=await prisma.blog.findUnique({
    where:{
      id:blogId
    }
  })

  return NextResponse.json({
    message: `Received Blog ID: ${
    blogId}`,blog

  });
}
