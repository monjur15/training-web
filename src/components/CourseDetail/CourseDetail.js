import React, { useEffect, useState } from "react";
import {} from "./CourseDetail.css";
import docker from "../../images/docker.png";
import keyboard from "../../images/keyboard.jpg";
import { Button, Carousel } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
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
  let navigate = useNavigate();
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

  function navigateToCourseDetails(courseId) {
    console.log(courseId);
    navigate("/coursesDetail", { state: { courseId: courseId } });
    window.location.reload();
  }

  const relatedCourses = [
    { id: 1, title: "kubernetes" },
    { id: 2, title: "python" },
    { id: 3, title: "linux" },
    { id: 4, title: "Design Patterns with JS" },
    { id: 5, title: "AWS" },
    { id: 6, title: "Cracking the coding interview with leetcode" },
  ];

  return (
    <div className="px-2 sm:px-10 md:pl-10 lg:pl-20 md:py-10 xl:pl-28 xl:py-16 relative">
      {screenSize.dynamicWidth > 1650 ? (
        <div className="grid grid-cols-2">
          <div className="flex flex-col items-center justify-center invisible">
            <h3 className="font-poppins text-blue-400">Course Title</h3>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h3 className="font-poppins text-blue-400">Related Courses</h3>
          </div>

          <div className="w-full flex flex-col items-end">
            <div className="w-4/5 h-700 course_card_bg py-4 rounded-4xl flex flex-col items-center justify-center">
              <div className="my-3">
                {/* <img src={react_white} className="w-48 h-48"></img> */}
                {singleCourse && singleCourse.length ? (
                  <img
                    src={url + "/media/" + singleCourse[0].course_img}
                    alt="img"
                    // className="w-48 h-48"
                    className={classNames({
                      "w-48 h-36 xl:w-56 xl:h-44":
                        singleCourse[0].course_title ===
                        "Learn AWS: Beginner to Solutions Architect - Associate",
                      "w-60 h-44":
                        singleCourse[0].course_title ===
                        "DevOps (Docker to Kubernetes)",
                      "w-48 h-48":
                        singleCourse[0].course_title !==
                          "Learn AWS: Beginner to Solutions Architect - Associate" &&
                        singleCourse[0].course_title !==
                          "DevOps (Docker to Kubernetes)",
                    })}
                  />
                ) : null}
              </div>
              <p
                className="px-5 py-4 text-white text-center"
                // style={{ whiteSpace: "pre-wrap" }}
              >
                {singleCourse ? singleCourse[0].course_desc : null}
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
                autoplay={true}
                modules={[Mousewheel, Autoplay]}
                className="mySwiper swiperjs5"
                // initialSlide={1}
              >
                {popularCourses && popularCourses.length
                  ? popularCourses.map((course, index) => (
                      <SwiperSlide
                        key={course.course_id}
                        className="swiper-slide5"
                        onClick={() =>
                          navigateToCourseDetails(course.course_id)
                        }
                      >
                        <div className="r_courses_card px-2 py-4 grid grid-cols-4 w-full h-44 rounded-2xl">
                          <div className="col-span-1 flex items-center justify-center">
                            {/* <img src={react_white} className="w-20 h-20"></img> */}
                            <img
                              className={classNames({
                                "w-24 h-16 my-auto":
                                  course.course_title ===
                                    "Learn AWS: Beginner to Solutions Architect - Associate" ||
                                  course.course_title ===
                                    "DevOps (Docker to Kubernetes)",
                                "w-20 h-20":
                                  course.course_title !==
                                    "Learn AWS: Beginner to Solutions Architect - Associate" &&
                                  course.course_title !==
                                    "DevOps (Docker to Kubernetes)",
                              })}
                              src={url + "/media/" + course.course_img}
                            ></img>
                          </div>
                          <div className="col-span-3 pr-2 relative flex items-center">
                            <h4 className="text-white text-uppercase text-left">
                              {/* CRACKING THE CODING INTERVIEW WITH LEETCODE
                              (PYTHON + GOLANG) */}
                              {course.course_title}
                            </h4>
                            {/* <button className="-bottom-2 absolute bg-white text-blue-300 font-pangramRegular px-8 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200">
                          Buy
                        </button> */}
                          </div>
                        </div>
                      </SwiperSlide>
                    ))
                  : null}
              </Swiper>
            </div>
          </div>
        </div>
      ) : screenSize.dynamicWidth > 1024 ? (
        <div className="grid grid-cols-2">
          <div className="flex flex-col items-center justify-center invisible">
            <h3 className="font-poppins text-blue-400">Course Title</h3>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h3 className="font-poppins text-blue-400">Related Courses</h3>
          </div>

          <div className="w-full flex flex-col items-end">
            <div className="w-full h-700 course_card_bg py-4 rounded-4xl flex flex-col items-center justify-center">
              {singleCourse && singleCourse.length ? (
                <img
                  src={url + "/media/" + singleCourse[0].course_img}
                  alt="img"
                  // className="w-48 h-48"
                  className={classNames({
                    "w-48 h-36":
                      singleCourse[0].course_title ===
                      "Learn AWS: Beginner to Solutions Architect - Associate",
                    "w-56 h-36":
                      singleCourse[0].course_title ===
                      "DevOps (Docker to Kubernetes)",
                    "w-40 h-40":
                      singleCourse[0].course_title !==
                        "Learn AWS: Beginner to Solutions Architect - Associate" &&
                      singleCourse[0].course_title !==
                        "DevOps (Docker to Kubernetes)",
                  })}
                />
              ) : null}
              <p className="px-4 xl:px-5 py-4 text-white text-center">
                {singleCourse ? singleCourse[0].course_desc : null}
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
                autoplay={true}
                modules={[Mousewheel, Autoplay]}
                className="mySwiper swiperjs5"
                // initialSlide={1}
              >
                {popularCourses && popularCourses.length
                  ? popularCourses.map((course, index) => (
                      <SwiperSlide
                        key={course.course_id}
                        className="swiper-slide5"
                        onClick={() =>
                          navigateToCourseDetails(course.course_id)
                        }
                      >
                        <div className="r_courses_card px-2 py-4 grid grid-cols-3 xl:grid-cols-4 w-full h-44 rounded-2xl">
                          <div className="col-span-1 flex items-center justify-center">
                            <img
                              className={classNames({
                                "w-24 h-16 my-auto":
                                  course.course_title ===
                                    "Learn AWS: Beginner to Solutions Architect - Associate" ||
                                  course.course_title ===
                                    "DevOps (Docker to Kubernetes)",
                                "w-20 h-20":
                                  course.course_title !==
                                    "Learn AWS: Beginner to Solutions Architect - Associate" &&
                                  course.course_title !==
                                    "DevOps (Docker to Kubernetes)",
                              })}
                              src={url + "/media/" + course.course_img}
                            ></img>
                          </div>
                          <div className="col-span-2 xl:col-span-3 xl:pr-3 relative flex items-center">
                            <h5 className="text-white text-xl text-uppercase">
                              {/* CRACKING THE CODING INTERVIEW WITH LEETCODE
                              (PYTHON + GOLANG) */}
                              {course.course_title}
                            </h5>
                            {/* <button className="-bottom-2 absolute bg-white text-blue-300 font-pangramRegular px-8 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200">
                          Buy
                        </button> */}
                          </div>
                        </div>
                      </SwiperSlide>
                    ))
                  : null}
              </Swiper>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex flex-col items-center justify-center invisible">
            <h3 className="font-poppins text-blue-400">Course Title</h3>
          </div>

          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full md:w-4/5 h-700 course_card_bg py-2 md:py-4 rounded-4xl flex flex-col items-center justify-center">
              {singleCourse && singleCourse.length ? (
                <img
                  src={url + "/media/" + singleCourse[0].course_img}
                  alt="img"
                  // className="w-48 h-48"
                  className={classNames({
                    "w-36 h-24 md:w-48 md:h-36":
                      singleCourse[0].course_title ===
                      "Learn AWS: Beginner to Solutions Architect - Associate",
                    "w-36 h-24 md:w-48 md:h-32":
                      singleCourse[0].course_title ===
                      "DevOps (Docker to Kubernetes)",
                    "w-24 h-24 md:w-32 md:h-32":
                      singleCourse[0].course_title !==
                        "Learn AWS: Beginner to Solutions Architect - Associate" &&
                      singleCourse[0].course_title !==
                        "DevOps (Docker to Kubernetes)",
                  })}
                />
              ) : null}
              <p className="px-4 xl:px-5 py-4 text-white text-center text-sm md:text-md">
                {singleCourse ? singleCourse[0].course_desc : null}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mt-3">
            <h3 className="font-poppins text-blue-400">Related Courses</h3>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full h-52 md:h-64 flex flex-col items-center">
              <Swiper
                // slidesPerView={3}
                loop={true}
                loopFillGroupWithBlank={true}
                mousewheel={true}
                autoplay={true}
                modules={[Mousewheel, Autoplay]}
                className="mySwiper swiperjs5"
                // initialSlide={1}
                breakpoints={{
                  550: {
                    slidesPerView: 3,
                  },
                  400: {
                    slidesPerView: 2,
                  },
                  360: {
                    slidesPerView: 1,
                  },
                }}
              >
                {popularCourses && popularCourses.length
                  ? popularCourses.map((course, index) => (
                      <SwiperSlide
                        key={index}
                        className="swiper-slide5"
                        onClick={() =>
                          navigateToCourseDetails(course.course_id)
                        }
                      >
                        <div className="r_courses_card p-4 w-32 h-32 md:w-40 md:h-40 rounded-2xl flex items-center justify-center">
                          <div className="">
                            <img
                              className={classNames({
                                "w-24 h-16 md:w-28 md:h-20 my-auto":
                                  course.course_title ===
                                    "Learn AWS: Beginner to Solutions Architect - Associate" ||
                                  course.course_title ===
                                    "DevOps (Docker to Kubernetes)",
                                "w-20 h-20 md:w-24 md:h-24":
                                  course.course_title !==
                                    "Learn AWS: Beginner to Solutions Architect - Associate" &&
                                  course.course_title !==
                                    "DevOps (Docker to Kubernetes)",
                              })}
                              src={url + "/media/" + course.course_img}
                            ></img>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))
                  : null}
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
}
