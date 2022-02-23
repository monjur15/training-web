import React from "react";
import instImg from "../../images/review3.png";
import {} from "./Reviews.css";

const Reviews = () => {
  return (
    <div className="px-28 py-16 relative review_container">
      <div className="flex flex-col w-fit mb-20">
        <h1 className="text-5xl font-myriadProRegular text-SearchBg">
          Reviews
        </h1>
        <div className="bg-SearchBg h-1 w-1/2"></div>
      </div>

      <div className="grid grid-cols-3 place-items-center">
        <div className="m-2 w-80 h-80 flex items-center">
          <div className="flex flex-col relative items-center w-80 h-64 bg-white rounded-md shadow-md hover:shadow-xl  transition-all duration-200">
            <img
              src={instImg}
              className="w-40 h-40 rounded-full bg-white absolute z-20 left-20 -top-20 shadow-xl"
            ></img>
            <div className="w-2 h-4/5 left-0 absolute bg-blue-400"></div>
            <div className="flex flex-col gap-1 px-3 pt-3 text-black mt-20 absolute">
              <h4 className="rotate-180 text-6xl text-uppercase p-0 m-0 font-italic font-imprintMTShadow mb-2">
                ''
              </h4>
              <h6 className="p-0 m-0 font-greatVibesRegular font-bold text-md">
                Cracking the Coding Interview with Leetcode
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
