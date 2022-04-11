import React, { useEffect } from "react";
import {} from "./CourseDetail.css";
import docker from "../../images/docker.png";
import keyboard from "../../images/keyboard.jpg";
import { Button, Carousel } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchSingleCourse, fetchPopularCourses } from "../../store/action";
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

  useEffect(() => {
    dispatch(fetchSingleCourse(location.state.courseId));
    dispatch(fetchPopularCourses());
  }, []);

  const relatedCourses = [
    { id: 1, title: "kubernetes" },
    { id: 2, title: "python" },
    { id: 3, title: "linux" },
    { id: 4, title: "Design Patterns with JS" },
    { id: 5, title: "AWS" },
    { id: 6, title: "Cracking the coding interview with leetcode" },
  ];

  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="col-lg-6 col-md-12  course_det  row relative">
            <div className="course_card p-3 my-5 flex flex-col items-center">
              <div className="course_img my-3">
                {singleCourse ? (
                  <img
                    src={url + "/media/" + singleCourse[0].course_img}
                    alt="img"
                    // className="w-48 h-48"
                    className={classNames({
                      "w-56 h-44":
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
              <div className="course_description pt-3 px-3 font-pangramRegular">
                {/* <p>{location.state.courseId}</p> */}
                <p>
                  {/* Docker is an open platform for developing, shipping, and
                  running applications. Developing apps today requires so much
                  more than writing code. Multiple languages, frameworks,
                  architectures, and discontinuous interfaces between tools for
                  each lifecycle stage creates enormous complexity. Docker
                  simplifies and accelerates your workflow, while giving
                  developers the freedom to innovate with their choice of tools,
                  application stacks, and deployment environments for each
                  project. This course is for everybody interested in getting
                  started with Docker and learn a few advanced tips and tricks
                  that will help you in real life. */}
                  {singleCourse ? singleCourse[0].course_desc : null}
                </p>
              </div>
              <button className="text-center  bg-white text-blue-300 px-10 py-2 rounded-full font-pangramRegular shadow-md hover:shadow-lg font-semibold  transition-all duration-200 absolute bottom-16">
                Buy
              </button>
            </div>
          </div>

          {/* related courses */}
          <div className="col-lg-6 p-5 related_course_main  col-12 ">
            <div className="related_course  row">
              <div className="flex justify-center">
                <h3>Related Courses</h3>
              </div>
              <div className="wrapper ">
                {/* <div className="py-0"> */}
                {/* {relatedCourses.map((course) => ( */}
                {popularCourses && popularCourses.length
                  ? popularCourses.map((course) => (
                      <div
                        className="p-3 my-4 bg-blue-300 rounded-2xl r_courses_card "
                        key={course.course_id}
                      >
                        <div className="flex gap-5">
                          {/* <div className="w-28 h-28 ml-5 rounded-full shadow-lg flex items-center justify-center"> */}
                          <img
                            className={classNames("ml-5", {
                              "w-28 h-20 my-auto":
                                course.course_title ===
                                  "Learn AWS: Beginner to Solutions Architect - Associate" ||
                                course.course_title ===
                                  "DevOps (Docker to Kubernetes)",
                              "w-28 h-28 my-auto":
                                course.course_title !==
                                  "Learn AWS: Beginner to Solutions Architect - Associate" &&
                                course.course_title !==
                                  "DevOps (Docker to Kubernetes)",
                            })}
                            src={url + "/media/" + course.course_img}
                          ></img>
                          {/* </div> */}
                          <div>
                            <h3 className="py-2 font-myriadProRegular text- font-bold text-uppercase text-white m-0">
                              {course.course_title}
                            </h3>
                            <button className="bg-white text-blue-300 font-pangramRegular px-8 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200">
                              Buy
                            </button>
                          </div>
                        </div>
                      </div>
                      // <div className="r_courses_card  my-4 p-3 row" key={course.id}>
                      //   <div className="col-4 ">
                      //     <img className="img-fluid" src={keyboard} alt="" />
                      //   </div>
                      //   <div className="course_title col-8 ">
                      //     <h5>KUBERNETES</h5>

                      //     <Button variant="light">Buy</Button>
                      //   </div>
                      // </div>
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
