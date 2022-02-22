import React from "react";
import pythonWhite from "../images/python-white.png";
import js from "../images/js.png";
import linux from "../images/linux.png";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Categories = () => {
  return (
    <div>
      <div className="flex flex-col w-fit px-28 pt-16 pb-5">
        <h1 className="text-5xl font-myriadProRegular text-SearchBg">
          Categories
        </h1>
        <div className="bg-SearchBg h-1 w-1/3"></div>
      </div>

      <div className="bg-CategoryBg px-28 relative ">
        <div className="flex items-center ">
          <div className="w-1/2  flex flex-col items-center gap-16 mt-16 mb-44">
            <div className="w-2/3 h-72 bg-CategoryCardBg hover:bg-CategoryCardHover shadow-md hover:shadow-xl rounded-xl transition-all duration-200">
              <div className="flex justify-center pt-10">
                <img src={pythonWhite} className="h-44 w-44"></img>
              </div>
              <div className="flex justify-end pt-3 pr-5">
                <button class="w-8 h-8 rounded-full bg-white flex justify-center items-center shadow-md hover:shadow-xl text-CategoryCardBg hover:text-CategoryCardHover text-3xl transition duration-300 focus:outline-none">
                  <MdOutlineArrowForwardIos className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="bg-CategoryCardBg w-2/3 h-72 shadow-md hover:shadow-xl rounded-xl transition-all duration-200 hover:bg-CategoryCardHover">
              <div className="flex justify-center pt-10">
                <img src={js} className="h-44 w-44"></img>
              </div>
              <div className="flex justify-end pt-3 pr-5">
                <button class="w-8 h-8 rounded-full bg-white flex justify-center items-center shadow-md hover:shadow-xl text-CategoryCardBg hover:text-CategoryCardHover text-3xl transition duration-300 focus:outline-none">
                  <MdOutlineArrowForwardIos className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="w-1/2  flex flex-col items-center gap-10 mt-16 mb-44 relative">
            <div className="bg-CategoryCardBg w-2/3 h-72 -top-56 absolute  rounded-xl shadow-md hover:shadow-xl transition-all duration-200 hover:bg-CategoryCardHover">
              <div className="flex justify-center pt-20">
                {/* <img src={aws} className="h-44 w-44"></img> */}
                <h1 className="text-white font-bold text-9xl text-uppercase font-myriadProRegular">
                  aws
                </h1>
              </div>
              <div className="flex justify-end pt-3 pr-5">
                <button class="w-8 h-8 rounded-full bg-white flex justify-center items-center shadow-md hover:shadow-xl text-CategoryCardBg hover:text-CategoryCardHover text-3xl transition duration-300 focus:outline-none">
                  <MdOutlineArrowForwardIos className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="bg-CategoryCardBg w-2/3 h-72 top-32 absolute rounded-xl shadow-md hover:shadow-xl transition-all duration-200 hover:bg-CategoryCardHover">
              <div className="flex justify-center pt-10">
                <img src={linux} className="h-44 w-44"></img>
              </div>
              <div className="flex justify-end pt-3 pr-5">
                <button class="w-8 h-8 rounded-full bg-white flex justify-center items-center shadow-md hover:shadow-xl text-CategoryCardBg hover:text-CategoryCardHover text-3xl transition duration-300 focus:outline-none">
                  <MdOutlineArrowForwardIos className="w-5 h-5" />
                </button>
              </div>
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
