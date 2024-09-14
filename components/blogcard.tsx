const BlogCard = ({ blog }) => {
  const { title, description, author, category, views, coment, createdAt } = blog;

  return (
    <div className="max-w-md mx-auto  bg-white-800 shadow-md rounded-lg overflow-hidden mb-6">
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
        <p className="text-gray-700 dark:text-gray-300 mt-2">{description}</p>
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            By {author} - {new Date(createdAt).toLocaleDateString()}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Category: {category}</p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">Views: {views}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Comments: {coment}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
