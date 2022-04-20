import React, { useEffect, useState } from "react";
import {} from "./CourseDetail.css";
import docker from "../../images/docker.png";
import keyboard from "../../images/keyboard.jpg";
import { Button, Carousel } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchSingleCourse, fetchPopularCourses } from "../../store/action";
import { Swiper, SwiperSlide } from "swiper/react";
import react_white from "../../images/react_white.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Mousewheel, Autoplay, Pagination } from "swiper";
import classNames from "classnames";

const CourseDetail = () => {
  function myFunction() {
    alert("Done!");
  }

  let location = useLocation();
  let dispatch = useDispatch();
  let singleCourse = useSelector((state) => state.singleCourse);
  let popularCourses = useSelector((state) => state.popularCourses);
  let url = "http://3.1.196.0";

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
    console.log(location.state.courseId);
    dispatch(fetchSingleCourse(location.state.courseId));
    dispatch(fetchPopularCourses());
    // window.location.reload();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  const relatedCourses = [
    { id: 1, title: "kubernetes" },
    { id: 2, title: "python" },
    { id: 3, title: "linux" },
    { id: 4, title: "Design Patterns with JS" },
    { id: 5, title: "AWS" },
    { id: 6, title: "Cracking the coding interview with leetcode" },
  ];

  return (
    <div className="px-10 md:pl-10 lg:pl-20 md:py-10 xl:pl-28 xl:py-16 relative">
      {screenSize.dynamicWidth > 1650 ? (
        <div className="grid grid-cols-2">
          <div className="flex flex-col items-center justify-center invisible">
            <h3 className="font-poppins text-blue-400">Course Title</h3>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h3 className="font-poppins text-blue-400">Related Courses</h3>
          </div>

          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-4/5 h-700 course_card_bg py-4 rounded-4xl flex flex-col items-center justify-center">
              <div className="my-3">
                <img src={react_white} className="w-48 h-48"></img>
              </div>
              <p className="px-5 py-4 text-white text-center">
                NodeJS is a web developer course that will teach you how to
                construct production-ready features for a large online project
                using Node and Express JS. The course is also designed to help
                you become a self-sufficient developer who can solve complex
                problems on the fly. NodeJS is quickly becoming one of the most
                popular web technology stacks. It aids in the development of
                scalable and rapid network applications. With this technology,
                web apps can be created quickly and efficiently, and they can be
                distributed to the cloud with simplicity. This course provides a
                thorough overview of server-side web development fundamentals.
                The many components that make up a website or web application's
                backend, as well as the Node.js runtime configuration, will be
                discussed. After finishing this course, you'll be ready to
                explore standard Node frameworks like Express.js and build
                powerful apps. This course necessitates a thorough knowledge of
                JavaScript. It is preferable, but not required, to have prior
                experience with asynchronous JavaScript.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-2/3 h-600 flex flex-col items-center p-3">
              <Swiper
                direction={"vertical"}
                slidesPerView={3}
                loop={true}
                loopFillGroupWithBlank={true}
                mousewheel={true}
                // autoplay={true}
                modules={[Mousewheel, Autoplay]}
                className="mySwiper swiperjs5"
                // initialSlide={1}
              >
                {relatedCourses.map((course, index) => (
                  <SwiperSlide key={index} className="swiper-slide5">
                    <div className="r_courses_card px-2 py-4 grid grid-cols-4 w-full h-44 rounded-2xl">
                      <div className="col-span-1 flex items-center justify-center">
                        <img src={react_white} className="w-20 h-20"></img>
                      </div>
                      <div className="col-span-3 pr-2 relative flex items-center justify-center">
                        <h4 className="text-white">
                          CRACKING THE CODING INTERVIEW WITH LEETCODE (PYTHON +
                          GOLANG)
                          {/* {course.title} */}
                        </h4>
                        {/* <button className="-bottom-2 absolute bg-white text-blue-300 font-pangramRegular px-8 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200">
                          Buy
                        </button> */}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2">
          <div className="flex flex-col items-center justify-center invisible">
            <h3 className="font-poppins text-blue-400">Course Title</h3>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h3 className="font-poppins text-blue-400">Related Courses</h3>
          </div>

          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full h-700 course_card_bg py-4 rounded-4xl flex flex-col items-center justify-center">
              <div className="my-3">
                <img src={react_white} className="w-32 h-32"></img>
              </div>
              <p className="px-4 xl:px-5 py-4 text-white text-center">
                NodeJS is a web developer course that will teach you how to
                construct production-ready features for a large online project
                using Node and Express JS. The course is also designed to help
                you become a self-sufficient developer who can solve complex
                problems on the fly. NodeJS is quickly becoming one of the most
                popular web technology stacks. It aids in the development of
                scalable and rapid network applications. With this technology,
                web apps can be created quickly and efficiently, and they can be
                distributed to the cloud with simplicity. This course provides a
                thorough overview of server-side web development fundamentals.
                The many components that make up a website or web application's
                backend, as well as the Node.js runtime configuration, will be
                discussed. After finishing this course, you'll be ready to
                explore standard Node frameworks like Express.js and build
                powerful apps. This course necessitates a thorough knowledge of
                JavaScript. It is preferable, but not required, to have prior
                experience with asynchronous JavaScript.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col items-center xl:justify-center">
            <div className="w-4/5 h-600 flex flex-col items-center p-3">
              <Swiper
                direction={"vertical"}
                slidesPerView={3}
                loop={true}
                loopFillGroupWithBlank={true}
                mousewheel={true}
                // autoplay={true}
                modules={[Mousewheel, Autoplay]}
                className="mySwiper swiperjs5"
                // initialSlide={1}
              >
                {relatedCourses.map((course, index) => (
                  <SwiperSlide key={index} className="swiper-slide5">
                    <div className="r_courses_card px-2 py-4 grid grid-cols-3 xl:grid-cols-4 w-full h-44 rounded-2xl">
                      <div className="col-span-1 flex items-center justify-center">
                        <img src={react_white} className="w-20 h-20"></img>
                      </div>
                      <div className="col-span-2 xl:col-span-3 xl:pr-3 relative flex items-center justify-center">
                        <h5 className="text-white text-xl">
                          CRACKING THE CODING INTERVIEW WITH LEETCODE (PYTHON +
                          GOLANG)
                          {/* {course.title} */}
                        </h5>
                        {/* <button className="-bottom-2 absolute bg-white text-blue-300 font-pangramRegular px-8 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200">
                          Buy
                        </button> */}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetail;

{
  /* <div className="w-full flex flex-col items-center justify-center">
          <div className="w-2/3 h-600 flex flex-col items-center p-3">
            <div className="r_courses_card px-2 py-4 grid grid-cols-4 w-full h-44 rounded-2xl mb-3">
              <div className="col-span-1 flex items-center justify-center">
                <img src={react_white} className="w-20 h-20"></img>
              </div>
              <div className="col-span-3 pr-2 relative">
                <h4 className="text-white">
                  CRACKING THE CODING INTERVIEW WITH LEETCODE (PYTHON + GOLANG)
                </h4>
                <button className="bottom-0 absolute bg-white text-blue-300 font-pangramRegular px-8 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200">
                  Buy
                </button>
              </div>
            </div>
            <div className="r_courses_card px-2 py-4 grid grid-cols-4 w-full h-44 rounded-2xl mb-3">
              <div className="col-span-1 flex items-center justify-center">
                <img src={react_white} className="w-20 h-20"></img>
              </div>
              <div className="col-span-3 pr-2 relative">
                <h4 className="text-white">
                  CRACKING THE CODING INTERVIEW WITH LEETCODE (PYTHON + GOLANG)
                </h4>
                <button className="bottom-0 absolute bg-white text-blue-300 font-pangramRegular px-8 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200">
                  Buy
                </button>
              </div>
            </div>

            <div className="r_courses_card px-2 py-4 grid grid-cols-4 w-full h-44 rounded-2xl mb-3">
              <div className="col-span-1 flex items-center justify-center">
                <img src={react_white} className="w-20 h-20"></img>
              </div>
              <div className="col-span-3 pr-2 relative">
                <h4 className="text-white">
                  CRACKING THE CODING INTERVIEW WITH LEETCODE (PYTHON + GOLANG)
                </h4>
                <button className="bottom-0 absolute bg-white text-blue-300 font-pangramRegular px-8 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200">
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div> */
}
