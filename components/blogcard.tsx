"use client"
import Image from "next/image";
interface Blog {
  id: string; // or number
  title: string;
  description: string;
  author: string;
  category: string;
  views: number;
  coment: number; // or 'comment' if it's a typo
  createdAt: Date;
  imageUrl: string;
}

// Define the props type
interface BlogCardProps {
  blog: Blog;
}

// The BlogCard component
const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const {
    title,
    description,
    category,
    views,
    coment,
    createdAt,
    imageUrl,
  } = blog;

  return (
    <div className="max-w-md md:w-200 mx-auto  bg-white-800 shadow-md rounded-lg overflow-hidden mb-6">
      <div className="p-4 w-300 h-200 ">
        {
          <Image
            src={imageUrl}
            alt={title}
            layout="responsive"
            width={500}
            height={300}
            className="object-contain rounded-md mb-4"
          />
        }
        <p className="text-sm  text-blue-500">{category}</p>

        <div className="flex">
          {/* <Image src="/profile.jpeg" width={30} height={30} className="rounded-full mr-2 " alt={"profile"}/> */}
          <h2 className="text-2xl font-bold text-gray-900 ">{title}</h2>
        </div>
        <div className="flex  text-gray-500 text-sm items-center ">
          <Image src="/cal.svg" width={20} height={10} alt="clap" className="mr-2"/>
          <p className=" mr-2">{new Date(createdAt).toLocaleDateString()}</p>
        <Image src="/clap.svg" width={20} height={10} alt="clap"/>
          <p className="  ">{views}</p>
          <p className="  ">{coment}</p>
        </div>
        <p className="text-gray-700 mt-2">{description}</p>
        <div className="flex items-center justify-between mt-4"></div>
      </div>
    </div>
  );
};

export default BlogCard;
