"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "../blogcard";
import SearchBar from "../searchbar";

const BlogComponent = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/blogs");
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogs(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center">Error: {error}</div>;
  }

  return (
    <div className="flex flex-col items-center md:items-center mx-auto">
      <div className="font-bold text-3xl md:text-4xl mb-6 mt-4 text-center md:ml-30">
        Some writeup related to my space
      </div>
      <SearchBar />
      <div className="w-full md:flex" >
        {blogs.length > 0 ? (
          blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
        ) : (
          <div className="text-center">No blogs available</div>
        )}
      </div>
    </div>
  );
};

export default BlogComponent;
