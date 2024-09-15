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
    return NextResponse.json(
      {
        error: "Blog ID is missing.",
      },
      { status: 400 }
    );
  }

  const blog = await prisma.blog.findUnique({
    where: {
      id: blogId,
    },
  });

  return NextResponse.json({
    message: `Received Blog ID: ${blogId}`,
    blog,
  });
}

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const blogId = params?.id;

  if (!blogId) {
    return NextResponse.json(
      {
        error: "Blog Id is missing",
      },
      {
        status: 400,
      }
    );
  }

  const body = await req.json();
  const blog = await prisma.blog.update({
    where:{
      id: blogId,
    },
    data:{
      title:body.title,
      content:body.content,
      author:body.author,
      description:body.description,
      category:body.category,
      views:body.views,
      published:body.published,
      coment:body.coment,
      imageUrl:body.imageUrl,
    }
  });

  return NextResponse.json({
    msg: "sucessfully updated",
    blog
  });
}
