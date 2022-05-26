import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { Button, Carousel } from "react-bootstrap";
// import { connect } from "react-redux";
// import Axios from "axios";
import { fetchCourses, fetchPopularCourses } from "../../store/action";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import {} from "./Courses.css";
// import { Link } from "react-router-dom";
// import Home from "../Home/Home";
// import { TiInfinity } from "react-icons/ti";
import { IoIosArrowDropup, IoIosArrowDropdown } from "react-icons/io";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import devops1 from "../../images/devops1.png";
import linux from "../../images/linux.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { useSelector, useDispatch } from "react-redux";

import { Mousewheel, Autoplay } from "swiper";
import { useRef } from "react";
import classNames from "classnames";

const Courses = (props) => {
  // const rightArrow = <FontAwesomeIcon icon={faArrowCircleRight} />;
  const url = "http://3.1.196.0";

  // const [courses1, setCourses] = useState(0);

  // const courses = useSelector((state) => state.courses);
  const courses = useSelector((state) => state.popularCourses);
  const dispatch = useDispatch();

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

  useEffect(() => {
    // dispatch(fetchCourses());
    dispatch(fetchPopularCourses());
  }, []);
  // const history = useHistory();
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  // const coursesArr = [
  //   {
  //     id: 1,
  //     title: "Cracking the Coding Interview with Leetcode",
  //     desc: "docker & kubernetes",
  //     img: devops1,
  //   },
  //   {
  //     id: 1,
  //     title: "Design Patterns with Python",
  //     desc: "best practices",
  //     img: python,
  //   },
  //   {
  //     id: 1,
  //     title: "Linux Basics",
  //     desc: "filesystem and commands",
  //     img: linux,
  //   },
  // ];

  function navigateToCourseDetails(courseId) {
    navigate("/coursesDetail", { state: { courseId: courseId } });
  }

  return (
    <div className="px-10 md:pl-10 lg:pl-20 md:py-10 xl:pl-28 xl:py-16 relative">
      {/* Title */}
      <div className="flex flex-col w-fit mb-12">
        <h1 className="text-5xl font-myriadProRegular text-CourseHeader my-0">
          Courses
        </h1>
        <div className="bg-SearchBg h-1 w-1/2"></div>
      </div>
      {/* Title end */}

      {screenSize.dynamicWidth > 768 ? (
        <div className="w-full h-96 flex relative">
          {screenSize.dynamicWidth > 768 ? (
            <div className="w-1 h-80 relative flex flex-col items-center">
              <div className="w-5 h-5 rounded-full bg-CoursesLeftBorder"></div>
              <div className="w-1 h-48 bg-CoursesLeftBorder"></div>
              <IoIosArrowDropup
                id="previousButton"
                onClick={() => swiperRef.current.swiper.slidePrev()}
                className="w-12 h-12 text-CoursesLeftBorder bottom-16 absolute hover:text-CourseTitle"
              />
              <IoIosArrowDropdown
                id="nextButton"
                onClick={() => swiperRef.current.swiper.slideNext()}
                className="w-12 h-12 text-CoursesLeftBorder bottom-0 absolute hover:text-CourseTitle bottom-6"
              />
            </div>
          ) : null}

          <div
            className="w-full flex flex-col h-96 overflow-hidden scroll-smooth gap-96 left-0 absolute"
            id="courses"
          >
            {screenSize.dynamicWidth > 1280 ? (
              <Swiper
                direction={"vertical"}
                slidesPerView={1}
                spaceBetween={30}
                ref={swiperRef}
                loop={true}
                loopFillGroupWithBlank={true}
                mousewheel={true}
                autoplay={true}
                modules={[Mousewheel, Autoplay]}
                className="mySwiper swiperjs"
                initialSlide={1}
              >
                {/* {coursesArr.map((course, index) => ( */}
                {courses && courses.length
                  ? courses.map((course, index) => (
                      <SwiperSlide
                        key={course.course_id}
                        className="swiper-slide1 flex h-80 relative"
                      >
                        <div className="flex left-1 absolute">
                          <div className="relative w-20 h-20 mr-5">
                            <div className="w-20 h-20 bg-CourseNum top-2 absolute flex items-center justify-center">
                              <h1 className="text-white text-5xl font-myriadProRegular z-0">
                                0{index + 1}
                                {/* {index + 1 > 10 ? 0(index + 1) : index + 1} */}
                              </h1>
                            </div>
                          </div>

                          <div className="h-80">
                            {/* <div className="flex flex-col items-start justify-start"> */}
                            {/* <h1 className="bg-green-300 w-400 2xl:w-600 xxl:w-900 mt-10 font-myriadProRegular text-CourseTitle font-bold text-3xl 2xl:text-5xl"> */}
                            <h1 className=" w-400 2xl:w-600 xxl:w-900 mt-10 font-myriadProRegular text-CourseTitle font-bold text-3xl 2xl:text-5xl">
                              {course.course_title}
                            </h1>
                            <h4 className="font-myriadProRegular text-CourseShortDesc">
                              {/* {course.inst_name} */}
                            </h4>
                            {/* </div> */}
                            <div className="mt-10 flex flex-col items-center w-64">
                              <button
                                onClick={(e) =>
                                  navigateToCourseDetails(course.course_id)
                                }
                                className="shadow-md w-full bg-CourseOutlineButton text-CourseOutline hover:bg-CourseOutline hover:text-white hover:shadow-xl px-4 py-2 rounded-full text-center transition-all duration-200"
                              >
                                Know more
                              </button>
                              <div className="flex items-center relative mt-2">
                                <h6>Course Outline</h6>
                                {/* <HiOutlineArrowNarrowRight className="h-7 w-10 text-gray-300 bottom-0.5 left-20 absolute" /> */}
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <div className="bg-red-300 w-400 2xl:w-500 right-36 2xl:right-28 top-3 absolute"> */}
                        <div className=" w-400 2xl:w-500 right-36 2xl:right-28 top-3 absolute">
                          <div className="h-80 relative">
                            <div className="w-80 h-80 2xl:h-92 2xl:w-92 border-2 rounded-full border-CoursesCircle bg-white left-20 2xl:left-32 absolute top-2 2xl:-top-0"></div>
                            <div className="w-5 h-5 rounded-full bg-CoursesCircle right-24 2xl:right-32 top-2 2xl:top-1 absolute"></div>
                            <div className="w-5 h-5 rounded-full bg-CoursesCircle right-20 2xl:right-32 -bottom-1 2xl:-bottom-3 absolute"></div>
                            <div className="w-4 h-4 rounded-full bg-CoursesCircle right-48 2xl:right-64 top-2 2xl:top-1 absolute"></div>
                            <div className="w-4 h-4 rounded-full bg-CoursesCircle right-44 2xl:right-64 -bottom-3 absolute"></div>
                            <div className="w-72 2xl:w-92 h-56 2xl:h-64 course_img_bg z-10 absolute top-14 2xl:top-10 -left-8 rounded-4xl flex items-center justify-center">
                              <img
                                src={url + "/media/" + course.course_img}
                                className={classNames({
                                  "h-32 w-48 2xl:h-44 2xl:w-56":
                                    course.course_title ===
                                    "Learn AWS: Beginner to Solutions Architect - Associate",
                                  "h-32 w-52 2xl:h-36 2xl:w-60":
                                    course.course_title ===
                                    "DevOps (Docker to Kubernetes)",
                                  "w-36 h-36 2xl:w-48 2xl:h-48":
                                    course.course_title !==
                                      "Learn AWS: Beginner to Solutions Architect - Associate" &&
                                    course.course_title !==
                                      "DevOps (Docker to Kubernetes)",
                                })}
                              ></img>
                              {/* {course.course_title ===
                          "Learn AWS: Beginner to Solutions Architect - Associate" ? (
                            <img
                              src={url + course.course_img}
                              className="h-44 w-56"
                            ></img>
                          ) : course.course_title ===
                            "DevOps (Docker to Kubernetes)" ? (
                            <img
                              src={url + course.course_img}
                              className="h-44 w-60"
                            ></img>
                          ) : (
                            <img
                              src={url + course.course_img}
                              className="h-48 w-48"
                            ></img>
                          )} */}
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))
                  : null}
              </Swiper>
            ) : screenSize.dynamicWidth > 768 ? (
              <Swiper
                direction={"vertical"}
                slidesPerView={1}
                spaceBetween={100}
                ref={swiperRef}
                loop={true}
                loopFillGroupWithBlank={true}
                mousewheel={true}
                autoplay={true}
                modules={[Mousewheel, Autoplay]}
                className="mySwiper swiperjs4"
                initialSlide={1}
              >
                {courses && courses.length
                  ? courses.map((course, index) => (
                      <SwiperSlide
                        key={course.course_id}
                        className="swiper-slide4 h-96 relative"
                      >
                        <div className="flex left-1 top-4 absolute">
                          <div className="relative w-20 h-20 mr-5">
                            <div className="w-16 h-16 bg-CourseNum top-2 absolute flex items-center justify-center">
                              <h1 className="text-white text-4xl font-myriadProRegular z-0">
                                0{index + 1}
                              </h1>
                            </div>
                          </div>

                          <div className="h-32">
                            {/* <div className="flex flex-col items-start justify-start"> */}
                            {/* <h1 className="bg-green-300 w-400 2xl:w-600 xxl:w-900 mt-10 font-myriadProRegular text-CourseTitle font-bold text-3xl 2xl:text-5xl"> */}
                            <h1 className="w-2/3 mt-4 font-myriadProRegular text-CourseTitle font-bold text-3xl">
                              {course.course_title}
                            </h1>
                            <h5 className="font-myriadProRegular text-CourseShortDesc">
                              {/* {course.inst_name} */}
                            </h5>
                          </div>
                        </div>
                        {/* <div className="bg-red-300 w-400 2xl:w-500 right-36 2xl:right-28 top-3 absolute"> */}
                        <div className="flex justify-between">
                          <div className="mt-10 flex flex-col items-center left-24 bottom-24 lg:bottom-36 absolute">
                            <button
                              onClick={(e) =>
                                navigateToCourseDetails(course.course_id)
                              }
                              className="shadow-md w-full bg-CourseOutlineButton text-CourseOutline hover:bg-CourseOutline hover:text-white hover:shadow-xl px-4 lg:px-12 py-2 rounded-full text-center transition-all duration-200"
                            >
                              Know more
                            </button>
                            <div className="flex items-center relative mt-2">
                              <h6>Course Outline</h6>
                              {/* <HiOutlineArrowNarrowRight className="h-7 w-10 text-gray-300 bottom-0.5 left-20 absolute" /> */}
                            </div>
                          </div>
                          <div className=" w-400 top-32 lg:top-24 right-0 lg:right-10 absolute">
                            <div className="h-64 relative">
                              <div className="w-56 h-56 border-2 rounded-full border-CoursesCircle bg-white left-10 absolute top-3"></div>
                              <div className="w-5 h-5 rounded-full bg-CoursesCircle right-48 top-3 absolute"></div>
                              <div className="w-5 h-5 rounded-full bg-CoursesCircle right-48 bottom-6 absolute"></div>
                              <div className="w-4 h-4 rounded-full bg-CoursesCircle left-20 top-6 absolute"></div>
                              <div className="w-4 h-4 rounded-full bg-CoursesCircle left-20 bottom-8 absolute"></div>
                              <div className="w-48 h-36 course_img_bg z-10 absolute top-14 2xl:top-10 -left-8 rounded-4xl flex items-center justify-center">
                                <img
                                  src={url + "/media/" + course.course_img}
                                  className={classNames({
                                    "h-20 w-32":
                                      course.course_title ===
                                      "Learn AWS: Beginner to Solutions Architect - Associate",
                                    "h-20 w-36":
                                      course.course_title ===
                                      "DevOps (Docker to Kubernetes)",
                                    "w-24 h-24":
                                      course.course_title !==
                                        "Learn AWS: Beginner to Solutions Architect - Associate" &&
                                      course.course_title !==
                                        "DevOps (Docker to Kubernetes)",
                                  })}
                                ></img>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))
                  : null}
              </Swiper>
            ) : null}
          </div>
        </div>
      ) : (
        <Swiper
          slidesPerView={1}
          loop={true}
          loopFillGroupWithBlank={true}
          mousewheel={true}
          autoplay={true}
          modules={[Mousewheel, Autoplay]}
          className="mySwiper swiperjs4"
          initialSlide={1}
        >
          {courses && courses.length
            ? courses.map((course, index) => (
                <SwiperSlide
                  key={course.course_id}
                  className="swiper-slide4 relative"
                >
                  <div className="w-full h-600 sm:h-500 flex flex-col text-center items-center justify-center mb-10 px-4 shadow-md hover:shadow-xl rounded-2xl hover:border-HomeCoursesBg1 transition-all duration-300">
                    <h1 className="font-myriadProRegular w-4/5 text-CourseTitle font-bold text-2xl xs:text-3xl">
                      {course.course_title}
                    </h1>

                    <div className=" w-64 xs:w-400 relative">
                      <div className="h-64 relative xs:left-16">
                        <div className="w-44 h-44 xs:w-56 xs:h-56 border-2 rounded-full border-CoursesCircle bg-white left-14 xs:left-10 absolute top-3"></div>
                        <div className="w-5 h-5 rounded-full bg-CoursesCircle right-20 top-2 xs:right-48 xs:top-3 absolute"></div>
                        <div className="w-5 h-5 rounded-full bg-CoursesCircle right-20 bottom-16 xs:right-48 xs:bottom-6 absolute"></div>
                        <div className="w-4 h-4 rounded-full bg-CoursesCircle left-24 top-4 xs:top-6 absolute"></div>
                        <div className="w-4 h-4 rounded-full bg-CoursesCircle left-20 xs:left-20 bottom-20 xs:bottom-8 absolute"></div>
                        <div className="w-32 h-24 xs:w-48 xs:h-36 course_img_bg z-10 absolute top-14 2xl:top-10 left-6 xs:-left-8 rounded-2xl xs:rounded-4xl flex items-center justify-center">
                          <img
                            src={url + "/media/" + course.course_img}
                            className={classNames({
                              "w-20 h-14 xs:h-20 xs:w-32":
                                course.course_title ===
                                "Learn AWS: Beginner to Solutions Architect - Associate",
                              "h-14 w-24 xs:h-20 xs:w-36":
                                course.course_title ===
                                "DevOps (Docker to Kubernetes)",
                              "w-16 h-16 xs:w-24 xs:h-24":
                                course.course_title !==
                                  "Learn AWS: Beginner to Solutions Architect - Associate" &&
                                course.course_title !==
                                  "DevOps (Docker to Kubernetes)",
                            })}
                          ></img>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10 flex flex-col items-center">
                      <h6 className="font-myriadProRegular text-CourseShortDesc">
                        {/* {course.inst_name} */}
                      </h6>
                      <button
                        onClick={(e) =>
                          navigateToCourseDetails(course.course_id)
                        }
                        className="shadow-md w-full bg-CourseOutlineButton text-CourseOutline hover:bg-CourseOutline hover:text-white hover:shadow-xl px-12 py-2 rounded-full text-center transition-all duration-200"
                      >
                        Know more
                      </button>
                      <div className="flex items-center relative mt-2">
                        <h6>Course Outline</h6>
                        {/* <HiOutlineArrowNarrowRight className="h-7 w-10 text-gray-300 bottom-0.5 left-20 absolute" /> */}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            : null}
        </Swiper>
      )}
    </div>

    // <div className="container review_container">
    //   <h1 className="category_head pt-lg-5">Courses</h1>
    //   <div className="down_border mb-5"></div>
    //   <Carousel fade>
    //     {courses && courses.length
    //       ? courses.map((course, index) => (
    //           <Carousel.Item key={course.course_id}>
    //             <div className="container courses_container">
    //               <div className="row">
    //                 <div className="col-lg-7 col-12  ">
    //                   <div className="course_cap w-100">
    //                     <div className="course_number">
    //                       <h1>{index + 1}</h1>
    //                     </div>
    //                     <div className="course_title">
    //                       <h1>{course.course_title}</h1>
    //                     </div>
    //                   </div>
    //                   <div className="sub_title">
    //                     <h5>{course.course_desc}</h5>
    //                   </div>

    //                   <div className="course_btn my-3 ">
    //                     <Button variant="info">Course Outline</Button>
    //                     {""}
    //                   </div>
    //                   <div className=" my-3 know">
    //                     <Link className="ms-5" to="/coursesDetail">
    //                       Know more
    //                     </Link>
    //                   </div>
    //                 </div>

    //                 <div className="col-lg-5 col-12  p-2">
    //                   <div className="row">
    //                     <div className="course_img ">
    //                       <TiInfinity className="w-72 h-56 text-white" />
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </Carousel.Item>
    //         ))
    //       : null}
    //   </Carousel>
    // </div>
  );
};

export default Courses;

{
  /* <img className="img-fluid" src={url + course.course_img} alt="no" />; */
}

{
  /* <div className="w-full h-80 flex">
        <div className="w-3/5">
          <div className="flex">
            <div className="w-1 h-80 relative flex flex-col items-center">
              <div className="w-5 h-5 rounded-full bg-CoursesLeftBorder"></div>
              <div className="w-1 h-48 bg-CoursesLeftBorder"></div>
              <IoIosArrowDropup className="w-12 h-12 text-CoursesLeftBorder bottom-16 absolute hover:text-CourseTitle transition-all duration-200" />
              <IoIosArrowDropdown className="w-12 h-12 text-CoursesLeftBorder bottom-0 absolute hover:text-CourseTitle bottom-6 transition-all duration-200" />
            </div>

            <div className="flex">
              <div className="relative w-20 h-20 mr-5">
                <div className="w-20 h-20 bg-CourseNum top-7 absolute flex items-center justify-center">
                  <h1 className="text-white text-5xl font-myriadProRegular">
                    01
                  </h1>
                </div>
              </div>

              <div className="h-80 w-full">
                <h1 className="mt-16 font-myriadProRegular text-CourseTitle font-bold text-6xl">
                  Cracking the Coding Interview with Leetcode
                </h1>
                <h4 className="font-myriadProRegular text-CourseShortDesc">
                  docker & kubernetes
                </h4>
                <div className="mt-10 flex flex-col items-center w-4/12">
                  <button
                    onClick={(e) => navigateToCourseDetails()}
                    className="shadow-md w-full bg-CourseOutlineButton text-CourseOutline hover:bg-CourseOutline hover:text-white hover:shadow-xl px-4 py-2 rounded-full text-center transition-all duration-200"
                  >
                    Course Outline
                  </button>
                  <div className="flex items-center relative mt-2">
                    <h6>know more</h6>
                    <HiOutlineArrowNarrowRight className="h-7 w-10 text-gray-300 bottom-0.5 left-20 absolute" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-2/5 h-80 relative">
          <div className="overflow-hidden h-96 w-96 border-2 rounded-full border-CoursesCircle bg-white -right-16 absolute -top-6"></div>
          <div className="w-5 h-5 rounded-full bg-CoursesCircle right-14 -top-6 absolute"></div>
          <div className="w-5 h-5 rounded-full bg-CoursesCircle right-14 -bottom-9 absolute"></div>
          <div className="w-4 h-4 rounded-full bg-CoursesCircle right-56 top-0 absolute"></div>
          <div className="w-4 h-4 rounded-full bg-CoursesCircle right-56 -bottom-4 absolute"></div>
          <div className="w-96 h-64 course_img_bg z-10 absolute top-10 left-12 rounded-4xl flex items-center justify-center">
            <img src={python} className="h-3/4 w-1/2"></img>
          </div>
        </div>
      </div> */
}
