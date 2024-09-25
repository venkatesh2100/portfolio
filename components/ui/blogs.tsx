"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "../blogcard";
import BlogSkeleton from "../blogskeleton"; // Import the skeleton
import SearchBar from "../searchbar";

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

const BlogComponent = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogs");
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data: Blog[] = await response.json();
        setBlogs(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message); // Handle error correctly
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const groupBlogsByYear = (blogs: Blog[]) => {
    const sortedBlogs = blogs.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return sortedBlogs.reduce((acc: { [year: string]: Blog[] }, blog) => {
      const year = new Date(blog.createdAt).getFullYear().toString();
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(blog);
      return acc;
    }, {});
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center md:items-center mx-auto">
        <div className="font-bold text-3xl md:text-4xl mb-6 mt-4 text-center md:ml-30">
          Some writeup related to my space
        </div>
        <SearchBar />
        <div className="w-full md:flex md:justify-center md:flex-wrap">
          {[...Array(3)].map((_, index) => (
            <BlogSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center">Error: {error}</div>;
  }

  const blogsByYear = groupBlogsByYear(blogs);

  return (
    <div className="flex flex-col items-center md:items-center mx-auto">
      <div className="font-bold text-3xl md:text-4xl mb-6 mt-4 text-center md:ml-30">
        Some writeup related to my space
      </div>
      <SearchBar />
      <div className="w-full">
        {Object.keys(blogsByYear).map((year) => (
          <div key={year} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{year}</h2>
            <div className="md:flex md:flex-wrap md:justify-center">
              {blogsByYear[year].map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogComponent;
