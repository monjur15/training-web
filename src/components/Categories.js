import React, { useEffect, useState } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import js from "../images/js.png";
import devops from "../images/devops_white.png";
import aws from "../images/aws_white.png";
import python from "../images/python_white.png";

const Categories = () => {
  let navigate = useNavigate();

  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  function navigateToCourseDetails(courseId) {
    navigate("/coursesDetail", { state: { courseId: courseId } });
  }

  return (
    <div>
      <div className="flex flex-col w-fit px-12 xl:px-28 pt-4 xl:pt-16 pb-5">
        <h1 className="text-4xl sm:text-5xl font-myriadProRegular text-SearchBg">
          Categories
        </h1>
        <div className="bg-SearchBg h-1 w-1/3"></div>
      </div>

      <div className="bg-CategoryBg px-2 xl:px-28 relative ">
        <div className="flex items-center">
          <div className="w-1/2  flex flex-col items-center gap-16 mt-16 mb-44">
            <div
              onClick={() => navigateToCourseDetails(14)}
              className="w-2/3 2xl:w-3/5 h-48 sm:h-68 md:h-80 bg-CategoryCardBg hover:bg-CategoryCardHover shadow-md hover:shadow-xl rounded-xl transition-all duration-200"
            >
              <div className="flex justify-center pt-12 sm:pt-14">
                <img
                  src={python}
                  className="w-24 h-24 sm:w-36 sm:h-36 md:h-44 md:w-44"
                ></img>
              </div>
              {screenSize.dynamicWidth > 640 ? (
                <div className="flex justify-end pt-3 pr-5">
                  <button
                    onClick={() => navigateToCourseDetails(14)}
                    className="w-8 h-8 rounded-full bg-white flex justify-center items-center shadow-md hover:shadow-xl text-CategoryCardBg hover:text-CategoryCardHover text-3xl transition duration-300 focus:outline-none"
                  >
                    <MdOutlineArrowForwardIos className="w-5 h-5" />
                  </button>
                </div>
              ) : null}
            </div>
            <div
              onClick={() => navigateToCourseDetails(17)}
              className="bg-CategoryCardBg w-2/3 2xl:w-3/5 h-48 sm:h-68 md:h-80 shadow-md hover:shadow-xl rounded-xl transition-all duration-200 hover:bg-CategoryCardHover"
            >
              <div className="flex justify-center pt-12 sm:pt-14">
                <img
                  src={js}
                  className="w-24 h-24 sm:w-36 sm:h-36 md:h-44 md:w-44"
                ></img>
              </div>
              {screenSize.dynamicWidth > 640 ? (
                <div className="flex justify-end pt-3 pr-5">
                  <button
                    onClick={() => navigateToCourseDetails(17)}
                    class="w-8 h-8 rounded-full bg-white flex justify-center items-center shadow-md hover:shadow-xl text-CategoryCardBg hover:text-CategoryCardHover text-3xl transition duration-300 focus:outline-none"
                  >
                    <MdOutlineArrowForwardIos className="w-5 h-5" />
                  </button>
                </div>
              ) : null}
            </div>
          </div>

          <div className="w-1/2 flex flex-col items-center gap-10 mt-16 mb-44 relative">
            <div
              onClick={() => navigateToCourseDetails(16)}
              className="bg-CategoryCardBg w-2/3 2xl:w-3/5 h-48 sm:h-68 md:h-80 -bottom-20 sm:-top-56 absolute  rounded-xl shadow-md hover:shadow-xl transition-all duration-200 hover:bg-CategoryCardHover"
            >
              <div className="flex justify-center pt-14 sm:pt-20 md:pt-24">
                {/* <img src={aws} className="h-44 w-44"></img> */}
                <img
                  src={aws}
                  className="h-20 w-24 sm:h-32 sm:w-40 md:h-40 md:w-52"
                ></img>
              </div>
              {screenSize.dynamicWidth > 640 ? (
                <div className="flex justify-end pt-3 pr-5">
                  <button
                    onClick={() => navigateToCourseDetails(16)}
                    class="w-8 h-8 rounded-full bg-white flex justify-center items-center shadow-md hover:shadow-xl text-CategoryCardBg hover:text-CategoryCardHover text-3xl transition duration-300 focus:outline-none"
                  >
                    <MdOutlineArrowForwardIos className="w-5 h-5" />
                  </button>
                </div>
              ) : null}
            </div>
            <div
              onClick={() => navigateToCourseDetails(15)}
              className="bg-CategoryCardBg w-2/3 2xl:w-3/5 h-48 sm:h-68 md:h-80 top-36 absolute rounded-xl shadow-md hover:shadow-xl transition-all duration-200 hover:bg-CategoryCardHover"
            >
              <div className="flex justify-center pt-14">
                <img
                  src={devops}
                  className="h-20 w-24 sm:h-36 sm:w-44 md:h-40 md:w-56"
                ></img>
              </div>
              {screenSize.dynamicWidth > 640 ? (
                <div className="flex justify-end pt-3 pr-5">
                  <button
                    onClick={() => navigateToCourseDetails(15)}
                    class="w-8 h-8 rounded-full bg-white flex justify-center items-center shadow-md hover:shadow-xl text-CategoryCardBg hover:text-CategoryCardHover text-3xl transition duration-300 focus:outline-none"
                  >
                    <MdOutlineArrowForwardIos className="w-5 h-5" />
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="bg-HomeBannerTop w-1/3 h-3 rounded-full -bottom-1 absolute z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
