import React from 'react';

const Search = () => {
  return (
    <div className="flex mt-36 items-center justify-between bg-gray-200 p-4">
      <div className="text-lg font-semibold">Messages</div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-400 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
        />
        <button className="absolute right-0 top-0 mt-2 mr-3 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Search;


