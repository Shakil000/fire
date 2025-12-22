import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Search = () => {
  const [animateLine, setAnimateLine] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchFocus = () => {
    setAnimateLine(false);
    setTimeout(() => setAnimateLine(true), 10);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchValue.trim()) {
      toast.error("Please fill in all required fields!");
      return;
    }

    toast.success(`Searching for "${searchValue}"...`);
    setSearchValue("");
  };

  return (
    <>
      {/* 🔍 FIXED SEARCH (DESKTOP ONLY) */}
      <div className="hidden md:flex justify-center absolute top-28 left-0 right-0 z-30">
        <form
          onSubmit={handleSubmit}
          className="relative w-full max-w-xl bg-gray-200 rounded-lg overflow-hidden"
        >
          {animateLine && (
            <span
              className="absolute bottom-0 left-0 h-[2px] w-full bg-red-600"
              style={{
                transform: "translateX(-100%)",
                animation: "flowOnce 2.3s ease-in-out forwards",
              }}
            />
          )}

          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={handleSearchFocus}
            className="w-full h-14 pl-6 pr-12 text-lg text-gray-800 bg-transparent focus:outline-none"
          />

          <button
            type="submit"
            className="absolute right-0 top-0 h-full w-12 flex items-center justify-center text-gray-500 hover:text-red-600"
          >
            <FaMagnifyingGlass />
          </button>

          <style>
            {`
              @keyframes flowOnce {
                from { transform: translateX(-100%); }
                to { transform: translateX(100%); }
              }
            `}
          </style>
        </form>
      </div>
    </>
  );
};

export default Search;