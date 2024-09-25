// components/blogSkeleton.tsx
import React from "react";

const BlogSkeleton = () => {
  return (
    <div className="border rounded-lg w-full p-4  h-full  mt-10 bg-gray-200 animate-pulse max-w-md mx-auto shadow-md overflow-hidden mb-6 cursor-pointer">
      <div className="h-32 bg-gray-300 rounded-lg mb-4"></div>
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/3"></div>
    </div>
  );
};

export default BlogSkeleton;
