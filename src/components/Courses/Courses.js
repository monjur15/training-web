import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { Button, Carousel } from "react-bootstrap";
// import { connect } from "react-redux";
// import Axios from "axios";
// import { fetchCourses } from "../../store/action";
// import { useSelector, useDispatch } from "react-redux";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import {} from "./Courses.css";
// import { Link } from "react-router-dom";
// import Home from "../Home/Home";
// import { TiInfinity } from "react-icons/ti";
import { IoIosArrowDropup, IoIosArrowDropdown } from "react-icons/io";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import devops1 from "../../images/devops1.png";
import python from "../../images/python-white.png";
import linux from "../../images/linux.png";

const Courses = (props) => {
  // const rightArrow = <FontAwesomeIcon icon={faArrowCircleRight} />;
  // const url = "http://3.1.196.0";

  // const [courses1, setCourses] = useState(0);

  // const courses = useSelector((state) => state.courses);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCourses());
  // }, []);
  // const history = useHistory();
  const navigate = useNavigate();

  function scroll_left() {
    let content = document.querySelector("#courses");
    content.scrollTop -= 1000;
  }

  function scroll_right() {
    let content = document.querySelector("#courses");
    content.scrollTop += 1000;
  }
  const coursesArr = [
    {
      id: 1,
      title: "Cracking the Coding Interview with Leetcode",
      desc: "docker & kubernetes",
      img: devops1,
    },
    {
      id: 1,
      title: "Design Patterns with Python",
      desc: "best practices",
      img: python,
    },
    {
      id: 1,
      title: "Linux Basics",
      desc: "filesystem and commands",
      img: linux,
    },
  ];

  function navigateToCourseDetails() {
    navigate("/coursesDetail");
  }

  return (
    <div className="pl-28 py-16 relative">
      <div className="flex flex-col w-fit mb-12">
        <h1 className="text-5xl font-myriadProRegular text-CourseHeader my-0">
          Courses
        </h1>
        <div className="bg-SearchBg h-1 w-1/2"></div>
      </div>

      <div className="w-full h-80 flex relative">
        <div className="w-1/12">
          {/* <div className="flex"> */}
          <div className="w-1 h-80 relative flex flex-col items-center">
            <div className="w-5 h-5 rounded-full bg-CoursesLeftBorder"></div>
            <div className="w-1 h-48 bg-CoursesLeftBorder"></div>
            <IoIosArrowDropup
              onClick={() => scroll_left()}
              className="w-12 h-12 text-CoursesLeftBorder bottom-16 absolute hover:text-CourseTitle transition-all duration-200"
            />
            <IoIosArrowDropdown
              onClick={() => scroll_right()}
              className="w-12 h-12 text-CoursesLeftBorder bottom-0 absolute hover:text-CourseTitle bottom-6 transition-all duration-200"
            />
          </div>
        </div>
        {/* </div> */}

        {/* <div className="h-80 w-full">
          <div className="w-1/12"></div> */}
        {/* <div className="flex flex-col overflow-hidden scroll-smooth gap-96 h-80 w-10/12"> */}
        <div
          className="flex flex-col w-full overflow-hidden scroll-smooth gap-80"
          id="courses"
        >
          {coursesArr.map((course) => (
            <div className="flex w-7/12 h-80 relative">
              <div className="flex w-7/12 left-1 absolute">
                <div className="relative w-20 h-20 mr-5">
                  <div className="w-20 h-20 bg-CourseNum top-7 absolute flex items-center justify-center">
                    <h1 className="text-white text-5xl font-myriadProRegular z-0">
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
              <div className="w-4/12 right-0 absolute">
                <div className=" h-80 relative">
                  <div className="overflow-hidden h-96 w-96 border-2 rounded-full border-CoursesCircle bg-white -right-16 absolute -top-6"></div>
                  <div className="w-5 h-5 rounded-full bg-CoursesCircle right-14 -top-6 absolute"></div>
                  <div className="w-5 h-5 rounded-full bg-CoursesCircle right-14 -bottom-9 absolute"></div>
                  <div className="w-4 h-4 rounded-full bg-CoursesCircle right-56 top-0 absolute"></div>
                  <div className="w-4 h-4 rounded-full bg-CoursesCircle right-56 -bottom-4 absolute"></div>
                  <div className="w-96 h-64 course_img_bg z-10 absolute top-10 -left-14 rounded-4xl flex items-center justify-center">
                    <img src={python} className="h-3/4 w-1/2"></img>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="w-1/12"></div>
        </div> */}
      </div>
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
