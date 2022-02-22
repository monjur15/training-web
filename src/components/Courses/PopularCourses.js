import React from "react";
import sendImg from "../../images/send.png";
import leetcodeImg from "../../images/leetcode.png";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const PopularCourses = () => {
  function scroll_left() {
    let content = document.querySelector("#courses");
    content.scrollLeft -= 1000;
  }

  function scroll_right() {
    let content = document.querySelector("#courses");
    content.scrollLeft += 1000;
  }

  const array = [
    { id: 1, value: "Alabama" },
    { id: 2, value: "Georgia" },
    { id: 3, value: "Tennessee" },
    { id: 4, value: "Tennessee" },
    { id: 5, value: "Tennessee" },
  ];

  return (
    <div className="px-28 py-16 bg-PopularCoursesBg relative">
      <div className="flex justify-center">
        <div className="bg-HomeBannerTop w-1/3 h-3 rounded-full -top-1 absolute z-10"></div>
      </div>
      <div className="flex flex-col w-fit mb-16">
        <h1 className="text-4xl font-poppins font-semibold text-PopularCourses">
          Popular Courses
        </h1>
        <div className="bg-PopularCourses h-1 w-1/4"></div>
      </div>

      <div className="flex items-center">
        <div className="md:w-2/12 lg:w-1/12">
          <button
            onClick={() => scroll_left()}
            class="w-10 h-10 rounded-full bg-white flex justify-center items-center drop-shadow-md hover:drop-shadow-xl text-SingleCourseOutlineBtn1 text-3xl transition duration-300 focus:outline-none"
          >
            <MdOutlineArrowBackIosNew />
          </button>
        </div>
        <div
          className="md:w-8/12 lg:w-10/12 flex overflow-hidden scroll-smooth px-1 py-4 gap-80"
          id="courses"
        >
          {array.map((arr) => (
            <div className="m-2 relative w-76 h-96 ">
              <div className="flex items-start justify-center w-76 h-96 bg-white rounded-2xl absolute z-10  shadow-md hover:shadow-xl  hover:border-HomeCoursesBg1">
                <img
                  src={leetcodeImg}
                  className="w-36 h-36 rounded-full bg-white absolute z-20 left-20 top-4  shadow-xl"
                ></img>
                <div class="text-uppercase text-white text-center   bg-PopularCourseCard hover:bg-HomeBannerTop  items-start justify-center w-full  h-1/2 bg-blue-200 absolute z-20 bottom-0 rounded-b-2xl rounded-tl-5xl transition duration-200">
                  <div className="flex flex-col gap-1 items-center justify-center px-5 pt-3">
                    <h5 className=" p-0 m-0 font-bold">
                      Cracking the coding interview with leetcode
                      {/* AWS */}
                    </h5>
                    <h6 className="p-0 m-0 font-light text-sm">
                      SHAHED MEHBUB
                    </h6>
                    <p className="font-light p-0 m-0 text-white">8 | 16</p>
                    <button className="mt-2  text-center px-14 py-2 text-HomeBannerTop bg-white rounded-full shadow-md hover:shadow-xl">
                      <img src={sendImg} className="h-4 w-4"></img>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="md:w-2/12 lg:w-1/12">
          <button
            onClick={() => scroll_right()}
            class="w-10 h-10 rounded-full bg-white flex justify-center items-center drop-shadow-md hover:drop-shadow-xl text-SingleCourseOutlineBtn1 text-3xl transition duration-300 focus:outline-none"
          >
            <MdOutlineArrowForwardIos />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
