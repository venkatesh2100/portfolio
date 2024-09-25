"use client"
import { useRouter } from "next/navigation";
import Image from "next/image";

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

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const { id, title, description, category, views, coment, createdAt, imageUrl } = blog;
  const router = useRouter();

  const handleClick = () => {
    router.push(`/blogs/${id}`);
  };

  console.log(imageUrl)

  return (
    <div onClick={handleClick} className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-6 cursor-pointer">
      <div className="p-4 w-full h-full">
        <Image src={imageUrl} alt={title} layout="responsive" width={500} height={300} className="object-contain rounded-md mb-4" />
        <p className="text-sm text-blue-500">{category}</p>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <div className="flex items-center text-gray-500 text-sm mt-2">
          <p>{new Date(createdAt).toLocaleDateString()}</p>
          <p className="ml-4">{views} views</p>
          <p className="ml-4">{coment} comments</p>
        </div>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;