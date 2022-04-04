import React from "react";
import slider1 from "../images/1.svg";

const Search = () => {
  return (
    <div className="relative flex flex-col items-center ">
      <div className="bg-HomeBannerTop w-1/3 h-3 rounded-full -top-1 absolute z-10"></div>

      <div className="w-full flex flex-col lg:flex-row  items-start bg-HomeBannerBg relative rounded-t-5xl px-10 pb-4 pt-20">
        <div className=" lg:w-1/2">
          <img className="img-fluid" src={slider1} alt="" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center mt-28">
          <div className="mb-3 grid grid-rows-1 place-items-center lg:place-items-end gap-2">
            <h1 className="text-white  font-poppins text-3xl">
              Ever Asked <span className="text-blue-600">Yourself</span>
            </h1>
            <h1 className="text-white text-5xl font-poppins font-semibold">
              Why Do You Want To Be
            </h1>
            <h1 className="text-white font-extrabold text-7xl font-poppins">
              A <span className="text-blue-600">DevOps </span>Engineer
            </h1>
          </div>

          {/* Search Bar */}
          <div className="flex w-8/12 max-w-xl relative items-center mt-3">
            <input
              type="text"
              className="bg-white w-100 border border-HomeSearchInputBorder px-8 py-1 lg:px-12 lg:py-3 h-14 rounded-4xl focus:outline-none focus:ring-2 placeholder-segoeUI placeholder-SeachCoursePlaceholder text-SeachCoursePlaceholder"
              placeholder="Search for courses"
            />

            <span className="absolute right-12 top-4 text-lg text-transparent bg-clip-text bg-gradient-to-b from-HomeSearchIcon1 to-HomeSearchIcon2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-800 hover:cursor-pointer"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </div>
          {/* Search Bar end */}
        </div>
      </div>
    </div>
  );
};

export default Search;
