"use client";


const SearchBar: React.FC = () => {
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   // Add your form submission logic here
  // };

  return (
    <div className="max-w-md mx-auto">
      <form className="relative"  >
        <label htmlFor="default-search" className="sr-only">
          Search
        </label>
        <div className="relative flex items-center">
          <div className="absolute inset-y-0 start-0 flex items-center px-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500   dark:placeholder-gray-400   "
            placeholder="Search..."
            required
          />
          {/* <button
            type="submit"
            className="absolute inset-y-0 end-0 flex items-center px-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-medium rounded-r-lg text-sm  dark:hover:bg-blue-700 "
          >
            <span className="sr-only">Search</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4a8 8 0 1 1-8 8 8 8 0 0 1 8-8z"
              />
            </svg>
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
