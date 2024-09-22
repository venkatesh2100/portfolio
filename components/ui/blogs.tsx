import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();
import BlogCard from "../blogcard";
import SearchBar from "../searchbar";
import { NextResponse } from "next/server";

// Extend the Blog interface to match your API's response structure
interface Blog {
  id: string;
  title: string;
  description: string;
  author: string;
  category: string;
  views: number;
  coment: number;
  createdAt: Date;
  imageUrl: string;
}


export async function findBlogs() {
  try {
    const blogs = await client.blog.findMany({
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
    return NextResponse.json(blogs);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}

const BlogComponent = async () => {
  const response = await findBlogs();
  const blogs = await response.json();

  return (
    <div className="flex flex-col items-center md:items-center mx-auto">
      <div className="font-bold text-3xl md:text-4xl mb-6 mt-4 text-center md:ml-30">
        Some writeup related to my space
      </div>
      <SearchBar />
      <div className="w-full md:flex">
        {blogs.length > 0 ? (
          blogs.map((blog: Blog) => <BlogCard key={blog.id} blog={blog} />)
        ) : (
          <div className="text-center">No blogs available</div>
        )}
      </div>
    </div>
  );
};

export default BlogComponent;
