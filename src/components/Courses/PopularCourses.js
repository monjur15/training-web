import React, { useEffect, useState } from "react";
import sendImg from "../../images/send.png";
import leetcodeImg from "../../images/leetcode.png";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./PopularCourses.css";
import "swiper/css/autoplay";

import { Mousewheel, Autoplay, Pagination } from "swiper";
import { useRef } from "react";
import { fetchPopularCourses } from "../../store/action";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

// SwiperCore.use([Navigation]);

const PopularCourses = () => {
  // const prevRef = useRef(null);
  // const nextRef = useRef(null);
  const url = "http://3.1.196.0";

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

  const popularCourses = useSelector((state) => state.popularCourses);
  const swiperRef = useRef(null);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPopularCourses());
  }, []);

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  function navigateToCourseDetails(courseId) {
    navigate("/coursesDetail", { state: { courseId: courseId } });
  }

  // function scroll_left() {
  //   let content = document.querySelector("#courses");
  //   content.scrollLeft -= 1000;
  // }

  // function scroll_right() {
  //   let content = document.querySelector("#courses");
  //   content.scrollLeft += 1000;
  // }

  // const array = [
  //   { id: 1, value: "Alabama" },
  //   { id: 2, value: "Georgia" },
  //   { id: 3, value: "Tennessee" },
  //   { id: 4, value: "Tennessee" },
  //   { id: 5, value: "Tennessee" },
  //   { id: 6, value: "Tennessee" },
  // ];

  return (
    <div className="px-12 py-8 md:px-28 md:py-16 bg-PopularCoursesBg relative">
      <div className="flex justify-center">
        <div className="bg-HomeBannerTop w-1/3 h-3 rounded-full -top-1 absolute z-10"></div>
      </div>
      <div className="flex flex-col w-fit mb-16">
        <h1 className="text-4xl sm:text-5xl font-myriadProRegular text-PopularCourses">
          Popular Courses
        </h1>
        <div className="bg-PopularCourses h-1 w-1/4"></div>
      </div>

      {screenSize.dynamicWidth > 780 ? (
        <div
          id="previousButton"
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <button className="absolute bottom-60 2xl:left-14 w-10 h-10 rounded-full bg-white flex justify-center items-center drop-shadow-md hover:drop-shadow-xl text-SingleCourseOutlineBtn1 text-3xl transition-all duration-300 focus:outline-none">
            <MdOutlineArrowBackIosNew className="text-PopularCourseCard hover:text-HomeBannerTop" />
          </button>
        </div>
      ) : null}

      {screenSize.dynamicWidth > 780 ? (
        <div
          id="nextButton"
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          <button class="absolute bottom-60 right-28 2xl:right-16 w-10 h-10 rounded-full bg-white flex justify-center items-center drop-shadow-md hover:drop-shadow-xl text-SingleCourseOutlineBtn1 text-3xl transition-all duration-300 focus:outline-none">
            <MdOutlineArrowForwardIos className="text-PopularCourseCard hover:text-HomeBannerTop" />
          </button>
        </div>
      ) : null}

      <Swiper
        initialSlide={3}
        ref={swiperRef}
        // slidesPerView={3}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        mousewheel={true}
        autoplay={true}
        modules={[Mousewheel, Autoplay, Pagination]}
        className="mySwiper mt-10"
        // pagination={{ clickable: false }}
        breakpoints={{
          400: {
            slidesPerView: 1,
            spaceBetween: 20,
            // slidesPerGroup: 1,
            // pagination: { clickable: true },
          },
          768: {
            slidesPerView: 1,
          },
          1100: {
            slidesPerView: 2,
            // spaceBetween: 20,
            // slidesPerGroup: 2,
          },
          1536: {
            slidesPerView: 3,
            spaceBetween: 50,
            // slidesPerGroup: 1,
          },
        }}
      >
        {/* {array.map((course, index) => ( */}
        {popularCourses && popularCourses.length
          ? popularCourses.map((course, index) => (
              <SwiperSlide className="swiper-slide" key={course.course_id}>
                {screenSize.dynamicWidth > 500 ? (
                  <div className="m-2 relative w-92 h-96 scale-105">
                    <div className="flex items-start justify-center w-92 h-96 bg-white rounded-2xl absolute z-10  shadow-md hover:shadow-xl  hover:border-HomeCoursesBg1  transition-all duration-300">
                      {/* <img
                src={python}
                className=" w-36 h-36 absolute z-20 left-20 top-4"
              ></img> */}
                      <div className="flex items-center justify-center w-36 h-36 rounded-full bg-PopularCourseCard absolute z-20 left-22 top-4  shadow-xl">
                        <img
                          src={url + "/media/" + course.course_img}
                          className={classNames({
                            "w-28 h-20":
                              course.course_title ===
                              "DevOps (Docker to Kubernetes)",
                            "w-24 h-20":
                              course.course_title ===
                              "Learn AWS: Beginner to Solutions Architect - Associate",
                            "w-24 h-24":
                              course.course_title !==
                                "Learn AWS: Beginner to Solutions Architect - Associate" &&
                              course.course_title !==
                                "DevOps (Docker to Kubernetes)",
                          })}
                        ></img>
                      </div>
                      <div class="text-uppercase text-white text-center bg-PopularCourseCard hover:bg-HomeBannerTop  items-start justify-center w-full  h-1/2 absolute z-20 bottom-0 rounded-b-2xl rounded-tl-5xl transition-all duration-200 cursor-pointer">
                        <div className="flex flex-col gap-1 items-center justify-center px-4 pt-3">
                          <div className="flex item-center justify-center h-20">
                            {/* Cracking the coding interview with leetcode */}
                            {/* AWS */}
                            <h5 className="font-bold font-poppins p-0 m-0">
                              {course.course_title}
                            </h5>
                          </div>
                          <h6 className="p-0 m-0 font-poppins text-sm">
                            {/* SHAHED MEHBUB */}
                            {course.inst_name}
                          </h6>
                          <p className="font-light font-poppins p-0 m-0 text-white">
                            {course.course_classes} | {course.course_credit}
                          </p>
                          <button
                            onClick={() =>
                              navigateToCourseDetails(course.course_id)
                            }
                            className="absolute bottom-2 text-center px-14 py-2 text-HomeBannerTop bg-white rounded-full shadow-md hover:shadow-xl  transition-all duration-300"
                          >
                            <img src={sendImg} className="h-4 w-4"></img>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : screenSize.dynamicWidth > 400 ? (
                  <div className="m-2 relative w-72 h-400 ">
                    <div className="flex items-start justify-center w-72 h-400 bg-white rounded-2xl absolute z-10  shadow-md hover:shadow-xl  hover:border-HomeCoursesBg1  transition-all duration-300">
                      <div className="flex items-center justify-center w-36 h-36 rounded-full bg-PopularCourseCard absolute z-20 left-18 top-4  shadow-xl">
                        <img
                          src={url + "/media/" + course.course_img}
                          className={classNames({
                            "w-28 h-20":
                              course.course_title ===
                              "DevOps (Docker to Kubernetes)",
                            "w-24 h-20":
                              course.course_title ===
                              "Learn AWS: Beginner to Solutions Architect - Associate",
                            "w-24 h-24":
                              course.course_title !==
                                "Learn AWS: Beginner to Solutions Architect - Associate" &&
                              course.course_title !==
                                "DevOps (Docker to Kubernetes)",
                          })}
                        ></img>
                      </div>
                      <div class="text-uppercase text-white text-center bg-PopularCourseCard hover:bg-HomeBannerTop  items-start justify-center w-full  h-1/2 absolute z-20 bottom-0 rounded-b-2xl rounded-tl-5xl transition-all duration-200 cursor-pointer">
                        <div className="flex flex-col gap-1 items-center justify-center px-4 pt-3">
                          <div className="flex item-center justify-center h-20 mb-2">
                            {/* Cracking the coding interview with leetcode */}
                            {/* AWS */}
                            <h5 className="font-bold text-md font-poppins p-0 m-0">
                              {course.course_title}
                            </h5>
                          </div>
                          <h6 className="p-0 m-0 font-poppins text-sm">
                            {/* SHAHED MEHBUB */}
                            {course.inst_name}
                          </h6>
                          <p className="font-light font-poppins p-0 m-0 text-white">
                            {course.course_classes} | {course.course_credit}
                          </p>
                          <button
                            onClick={() =>
                              navigateToCourseDetails(course.course_id)
                            }
                            className="absolute bottom-2 text-center px-14 py-2 text-HomeBannerTop bg-white rounded-full shadow-md hover:shadow-xl  transition-all duration-300"
                          >
                            <img src={sendImg} className="h-4 w-4"></img>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="m-2 relative w-60 h-450 ">
                    <div className="flex items-start justify-center w-60 h-450 bg-white rounded-2xl absolute z-10  shadow-md hover:shadow-xl  hover:border-HomeCoursesBg1  transition-all duration-300">
                      <div className="flex items-center justify-center w-36 h-36 rounded-full bg-PopularCourseCard absolute z-20 left-18 top-4  shadow-xl">
                        <img
                          src={url + "/media/" + course.course_img}
                          className={classNames({
                            "w-28 h-20":
                              course.course_title ===
                              "DevOps (Docker to Kubernetes)",
                            "w-24 h-20":
                              course.course_title ===
                              "Learn AWS: Beginner to Solutions Architect - Associate",
                            "w-24 h-24":
                              course.course_title !==
                                "Learn AWS: Beginner to Solutions Architect - Associate" &&
                              course.course_title !==
                                "DevOps (Docker to Kubernetes)",
                          })}
                        ></img>
                      </div>
                      <div class="text-uppercase text-white text-center bg-PopularCourseCard hover:bg-HomeBannerTop  items-start justify-center w-full h-64  xs:h-1/2 absolute z-20 bottom-0 rounded-b-2xl rounded-tl-5xl transition-all duration-200 cursor-pointer">
                        <div className="flex flex-col gap-1 items-center justify-center px-4 pt-3">
                          <div className="flex item-center justify-center h-20 mb-2">
                            {/* Cracking the coding interview with leetcode */}
                            {/* AWS */}
                            <h5 className="font-bold text-md font-poppins p-0 m-0">
                              {course.course_title}
                            </h5>
                          </div>
                          <h6 className=" font-poppins bottom-14 absolute text-sm">
                            {/* SHAHED MEHBUB */}
                            {course.inst_name}
                          </h6>
                          <p className="font-light font-poppins bottom-6 absolute text-white">
                            {course.course_classes} | {course.course_credit}
                          </p>
                          <button
                            onClick={() =>
                              navigateToCourseDetails(course.course_id)
                            }
                            className="absolute bottom-2 text-center px-14 py-2 text-HomeBannerTop bg-white rounded-full shadow-md hover:shadow-xl  transition-all duration-300"
                          >
                            <img src={sendImg} className="h-4 w-4"></img>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))
          : null}
      </Swiper>
    </div>
  );
};

export default PopularCourses;
