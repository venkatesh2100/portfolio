
import { GetServerSideProps } from "next";
import { PrismaClient } from "@prisma/client";
import { useRouter } from "next/router";
import Image from "next/image";

const prisma = new PrismaClient();

const BlogPage = async ({ params }: { params: { id: string } }) => {
  const blog = await prisma.blog.findUnique({
    where: { id: params.id },
  });

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const imageUrl = blog.imageUrl?blog.imageUrl:'/luffy.jpeg'; // Fallback to a default image if imageUrl is empty
  return (
    <div className="max-w-4xl mx-auto min-h-screen md:mx-60">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <Image
        src={imageUrl}
        alt={blog.title}
        width={800}
        height={500}
        className="rounded-md"
        // Add className for styling if needed
      />
      <p className="text-gray-700 mt-4">{blog.description}</p>
      <p className="text-sm text-gray-500">Views: {blog.views}</p>
      <p className="text-sm text-gray-500">Comments: {blog.coment}</p>
    </div>
  );
};

export default BlogPage;
