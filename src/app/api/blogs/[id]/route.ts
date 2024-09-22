import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import { validate as isUUID } from "uuid"; // Import UUID validation function

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

  // Validate that the blog ID is a valid UUID
  if (!blogId || !isUUID(blogId)) {
    return NextResponse.json(
      {
        error: "Invalid or missing Blog ID.",
      },
      { status: 400 }
    );
  }

  try {
    const blog = await prisma.blog.findUnique({
      where: {
        id: blogId,
      },
    });

    if (!blog) {
      return NextResponse.json(
        { error: "Blog not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({ blog });
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching the blog." },
      { status: 500 }
    );
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const blogId = params?.id;

  // Validate that the blog ID is a valid UUID
  if (!blogId || !isUUID(blogId)) {
    return NextResponse.json(
      {
        error: "Invalid or missing Blog ID.",
      },
      {
        status: 400,
      }
    );
  }

  try {
    const body = await req.json();

    // Validate that the required fields are present
    // const requiredFields = ["title", "content", "author", "description", "category", "views", "published", "coment", "imageUrl"];
    // for (const field of requiredFields) {
    //   if (!body[field]) {
    //     return NextResponse.json(
    //       { error: `Missing field: ${field}` },
    //       { status: 400 }
    //     );
    //   }
    // }

    const updatedBlog = await prisma.blog.update({
      where: {
        id: blogId,
      },
      data: {
        title: body.title,
        content: body.content,
        author: body.author,
        description: body.description,
        category: body.category,
        views: body.views,
        published: body.published,
        coment: body.coment,
        imageUrl: body.imageUrl,
      },
    });

    return NextResponse.json({
      message: "Successfully updated.",
      blog: updatedBlog,
    });
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json(
      { error: "An error occurred while updating the blog." },
      { status: 500 }
    );
  }
}